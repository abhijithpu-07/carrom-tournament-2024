import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RegComponent } from './reg/reg.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { RulesComponent } from './rules/rules.component';
import { SemiComponent } from './semi/semi.component';
import { PredictionFormComponent } from './prediction-form/prediction-form.component';
import {HttpClientModule } from '@angular/common/http';
import {AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/compat/firestore';

// import { Observable } from 'rxjs';


@NgModule({
  declarations: [
    AppComponent,
    RegComponent,
    ScheduleComponent,
    RulesComponent,
    SemiComponent,
    PredictionFormComponent
   
  ],
  imports: [
    BrowserModule,
    MatDatepickerModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    CommonModule,
    HttpClientModule,
    // Observable
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
