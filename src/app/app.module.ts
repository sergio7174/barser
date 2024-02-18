import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



import { RouterModule, Routes } from '@angular/router';



import { MainRoutingModule } from './main/main-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { MainModule } from './main/main.module';
import { CoreRoutingModule } from './core/core-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReservationService } from './services/reservation.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreRoutingModule,
    CoreModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MainModule,
    NgbModule,
    MainRoutingModule,


  ],
  providers: [ReservationService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
