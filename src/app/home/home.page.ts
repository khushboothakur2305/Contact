import { Component } from "@angular/core";
import { BarcodeScanner } from "@ionic-native/barcode-scanner/ngx";
import { Base64ToGallery } from "@ionic-native/base64-to-gallery/ngx";
import { Contacts } from "@ionic-native/contacts/ngx";
import { ToastController } from "@ionic/angular";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  qrData = null;
  createdCode = null;
  scannedCode = null;

  constructor(private barcodeScanner: BarcodeScanner) {}

  createCode() {
    this.createdCode = this.qrData;
    console.log(this.createdCode);
  }

  scanCode() {
    this.barcodeScanner.scan().then((barcodeData) => {
      this.scannedCode = barcodeData.text;
    });
  }
  /*   myContacts: any[] = [];
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
  } */
}
