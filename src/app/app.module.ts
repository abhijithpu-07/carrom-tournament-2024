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
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { PointsComponent } from './points/points.component';
import { CarromServiceService } from './carrom-service.service';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
// import { AngularFireDatabaseModule } from 'angularfire2/database';


@NgModule({
  declarations: [
    AppComponent,
    RegComponent,
    ScheduleComponent,
    RulesComponent,
    SemiComponent,
    PredictionFormComponent,
    PointsComponent
   
  ],
  imports: [
    BrowserModule,
    MatDatepickerModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp( {
      apiKey: "AIzaSyBdEWw-BYRJD2oidB66C-Shac382kHWOU0",
      authDomain: "carrom-nav-2024.firebaseapp.com",
      projectId: "carrom-nav-2024",
      storageBucket: "carrom-nav-2024.appspot.com",
      messagingSenderId: "612704384917",
      appId: "1:612704384917:web:020ddfe1a53913436da89c"
    },),
    CommonModule,
    HttpClientModule,
    MatProgressSpinnerModule
  ],
  providers: [CarromServiceService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
