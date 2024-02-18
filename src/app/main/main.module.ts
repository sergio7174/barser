import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';


import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';






import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { ReservationComponent } from './reservation/reservation.component';
import { MainComponent } from './main.component';
import { AppRoutingModule } from '../app-routing.module';
import { ReservationService } from '../services/reservation.service';



@NgModule({
  declarations: [
    AboutComponent,
    ContactComponent,
    GalleryComponent,
    HomeComponent,
    ReservationComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
  ],
  providers: [ReservationService],
  exports: [
    AboutComponent,
    ContactComponent,
    GalleryComponent,
    HomeComponent,
    ReservationComponent,
    MainComponent
  ]
})
export class MainModule { }
