import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationModule } from './core/navigation/navigation.module';
import { MaterialModule } from './core/material/material.module';
import { FooterModule } from './core/footer/footer.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    NavigationModule,
    FooterModule,
    MaterialModule,
    HttpClientModule
  ],

  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
