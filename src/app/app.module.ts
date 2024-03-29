import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { Contacts } from "@ionic-native/contacts/ngx";

import { NgxQRCodeModule } from "@techiediaries/ngx-qrcode";
import { Base64ToGallery } from "@ionic-native/base64-to-gallery/ngx";
import { BarcodeScanner } from "@ionic-native/barcode-scanner/ngx";
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    Contacts,
    NgxQRCodeModule,
    Base64ToGallery,
    BarcodeScanner,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
