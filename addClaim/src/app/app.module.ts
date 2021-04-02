import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddClaimComponent } from './add-claim/add-claim.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { GetClaimComponent } from './get-claim/get-claim.component';

@NgModule({
  declarations: [
    AppComponent,
    AddClaimComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    GetClaimComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
