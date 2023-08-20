import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';
import localeEn from '@angular/common/locales/en';
import { ToKmPipe } from './to-km.pipe';
import { ConvertUnitPipe } from './convert-unit.pipe';

@NgModule({
  declarations: [AppComponent, ToKmPipe, ConvertUnitPipe],
  imports: [BrowserModule],
  providers: [
    { provide: LOCALE_ID, useValue: navigator.language ?? 'en' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'EUR' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    registerLocaleData(localeDe, 'de');
    registerLocaleData(localeEn, 'en');
  }
}
