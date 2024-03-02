import { Component, OnInit } from '@angular/core';
import { CarromServiceService } from '../carrom-service.service';
import { Points } from '../common/Points';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-points',
  templateUrl: './points.component.html',
  styleUrls: ['./points.component.css']
})
export class PointsComponent implements OnInit {

  constructor(private service:CarromServiceService) { }
  

  pointsDataArray :Points[] =[]
  // allData : any[]=[]
  loaded:boolean=true
  

 
    ngOnInit(): void {
      this.getall();
    }

   
  

  // getall(){
  //   this.service.getAll().subscribe((values: any) => {
  //     this.allData = values;
  //     this.pointsDataArray = []; // Clear existing data
  //     this.allData.forEach((value: Points) => {
  //       this.pointsDataArray.push(value); // Push values to pointsDataArray
  //     });
  //     console.log(this.pointsDataArray);
  //   });
  // }

  // getall() {
  //   this.allData[1] =this.service.getAll()
  //   console.log(this.allData);
  //     this.pointsDataArray = []; // Clear existing data
  //     this.allData.forEach((value: any) => {
  //       this.pointsDataArray.push(value); // Push values to pointsDataArray
  //     });
  //     console.log(this.pointsDataArray);
    
  // }

  getall()
  {
   
    this.service.getall().subscribe((res) => {
      this.pointsDataArray=res.map((e:any)=> {
        const data=e.payload.doc.data();
        data.id=e.payload.doc.id;
        this.loaded=false
        // console.log(data)
        return data;
      })
      // console.log(this.pointsDataArray)
    })
    
  }


  
 
}
