import { Component } from "@angular/core";
import { Contacts } from "@ionic-native/contacts/ngx";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  myContacts: any[] = [];
  mobileNumber: any[] = [];
  constructor(private contacts: Contacts) {}
  loadContacts() {
    let options = {
      filter: "",
      multiple: true,
      hasPhoneNumber: true,
    };
    this.contacts.find(["*"], options).then((contacts) => {
      this.myContacts = contacts;
      this.myContacts.map((re) => {
        this.mobileNumber.push(re.phoneNumbers[0].value);
      });
    });
  }
}
