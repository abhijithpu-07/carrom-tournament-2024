import { Component, OnInit } from '@angular/core';
import { DateRange, MatDatepickerModule } from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';




@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  standalone: true,
  
  imports: [MatCardModule, MatDatepickerModule,MatInputModule],
})
export class HomepageComponent implements OnInit {
 
   
  //  selected: Date = new Date(2024, 1, 2) ;
  //  selected: Date = new Date(2024, 1, 2), new Date(2024, 1, 5); 
  //  datevalue:Date = new Date(2024, 1, 2) ;
  //  minDate = new Date(2010, 0, 3); 
  //  maxDate = new Date(2010, 0, 15);
  selected= new Date(new Date(2024, 1, 2))
  

  constructor() { }

  ngOnInit(): void {
  }
  // dateToMarkInRed = new Date('2024-02-02');

  // dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
  //   console.log("hi")
  //   console.log(this.dateToMarkInRed.toDateString())
  //   return cellDate.toDateString() === this.dateToMarkInRed.toDateString() ? 'marked-date' : '';
  // };
  // dateClass = (date: Date): MatCalendarCellCssClasses => { return '2024-02-02'; }

}


