import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeEspecesComponent } from './liste-especes/liste-especes.component';
import { HomeComponent } from './home/home.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';

@NgModule({
    declarations: [
        AppComponent,
        ListeEspecesComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NoopAnimationsModule,
        MatListModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
