import {
  Component,
  ElementRef,
  Input,
  OnInit,
  Output,
  QueryList,
  Renderer2,
  ViewChildren,
} from "@angular/core";
import { EventEmitter } from "events";

@Component({
  selector: "app-tinder-ui",
  templateUrl: "./tinder-ui.component.html",
  styleUrls: ["./tinder-ui.component.scss"],
})
export class TinderUiComponent {
  @Input("cards") cards: Array<{}>;

  @ViewChildren("tinderCard") tinderCards: QueryList<ElementRef>;

  tinderCardsArray: Array<ElementRef>;

  moveOutWidth: number; // value in pixels that a card needs to travel to dissapear from screen
  shiftRequired: boolean; // state variable that indicates we need to remove the top card of the stack
  transitionInProgress: boolean; // state variable that indicates currently there is transition on-going
  heartVisible: boolean;
  crossVisible: boolean;

  constructor(private renderer: Renderer2) {
    // we imported Renderer to be able to alter style's of elements safely
  }

  userClickedButton(event, heart) {
    event.preventDefault();
    if (!this.cards.length) return false;
    if (heart) {
      this.tinderCardsArray[0].nativeElement.style.transform =
        "translate(" + this.moveOutWidth + "px, -100px) rotate(-30deg)";
      this.toggleChoiceIndicator(false, true);
    } else {
      this.tinderCardsArray[0].nativeElement.style.transform =
        "translate(-" + this.moveOutWidth + "px, -100px) rotate(30deg)";
      this.toggleChoiceIndicator(true, false);
    }
    this.shiftRequired = true;
    this.transitionInProgress = true;
  }

  toggleChoiceIndicator(cross, heart) {
    this.crossVisible = cross;
    this.heartVisible = heart;
  }

  handleShift() {
    this.transitionInProgress = false;
    this.toggleChoiceIndicator(false, false);
    if (this.shiftRequired) {
      this.shiftRequired = false;
      this.cards.shift();
    }
  }

  ngAfterViewInit() {
    this.moveOutWidth = document.documentElement.clientWidth * 1.5;
    this.tinderCardsArray = this.tinderCards.toArray();
    this.tinderCards.changes.subscribe(() => {
      this.tinderCardsArray = this.tinderCards.toArray();
    });
  }
}
