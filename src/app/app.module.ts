import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MainInfoComponent } from './components/main-info/main-info.component';
import { CardFormComponent } from './components/card-form/card-form.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { LanguagesComponent } from './components/languages/languages.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaymentProcessedComponent } from './components/payment-processed/payment-processed.component';
import { FormsContainerComponent } from './components/forms-container/forms-container.component';
import { LanguagesService } from './services/languages.service';

@NgModule({
  declarations: [
    AppComponent,
    MainInfoComponent,
    CardFormComponent,
    UserFormComponent,
    LanguagesComponent,
    PaymentProcessedComponent,
    FormsContainerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [
    LanguagesService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
