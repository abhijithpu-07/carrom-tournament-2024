import { Component, OnInit } from '@angular/core';
import { CarromServiceService } from '../carrom-service.service';
import { FormData } from '../common/formData';
import {Location} from '@angular/common';
import { Observable } from 'rxjs'; // Import Observable
import { map } from 'rxjs/operators'; // Import map operator

@Component({
  selector: 'app-prediction-form',
  templateUrl: './prediction-form.component.html',
  styleUrls: ['./prediction-form.component.css'],
})
export class PredictionFormComponent implements OnInit {
  id: string = '';
  name: string = '';
  team: string = '';
  fd: FormData = { id: '', name: '', team: '' };
  fd1: FormData[] = [];

  constructor(private service: CarromServiceService,
    private location: Location) {}

  ngOnInit(): void {}

  addData() {
    const id = this.id;

    const regex = /^[0-9a-zA-Z]{6}$/;

    // if (regex.test(id)) {
    //     console.log('Valid id:', id);
    // } else {
    //     console.log('Invalid id:', id);
    // }
    if (this.id == '' || this.name == '' || this.team == '') {
      alert('Fill all the details Properly!!!');
    
    } else if (!regex.test(id)) {
      alert('Enter the correct UID!!');
    } else {
      this.fd.id = this.id;
      this.fd.name = this.name;
      this.fd.team = this.team;
      this.fd.id = this.fd.id.toUpperCase();
      console.log(this.fd);
      this.service.saveDataIfNotExists(this.fd).subscribe((value) => {
        if (value === 'exist') {
          alert(`UID : ${this.fd.id} already submitted the response!!`);
        } else {
          alert('submitted');
          this.location.back(); 
          this.resetForm();
        }
      });
    }
  }
  resetForm() {
    this.id = '';
    this.name = '';
    this.team = '';
  }
}
function res(res: any, arg1: any) {
  throw new Error('Function not implemented.');
}
