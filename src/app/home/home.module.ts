import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { FormsModule } from "@angular/forms";
import { HomePage } from "./home.page";
import { NgxQRCodeModule } from "@techiediaries/ngx-qrcode";

import { HomePageRoutingModule } from "./home-routing.module";
import { TinderUiComponent } from "../tinder-ui/tinder-ui/tinder-ui.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    NgxQRCodeModule,
  ],
  declarations: [HomePage, TinderUiComponent],
})
export class HomePageModule {}
