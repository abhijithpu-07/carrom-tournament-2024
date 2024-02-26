import { Component, OnInit } from '@angular/core';
import { CarromServiceService } from '../carrom-service.service';
import { FormData } from '../common/formData';
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

  constructor(private service: CarromServiceService) {}

  ngOnInit(): void {}

  addData() {
    try {
      if (this.id == '' || this.name == '' || this.team == '') {
        alert('Fill all the details Properly!!!');
      } else {
        this.fd.id = this.id;
        this.fd.name = this.name;
        this.fd.team = this.team;
        this.fd.id = this.fd.id.toUpperCase();
        console.log(this.fd);
        this.service.saveDataIfNotExists(this.fd).subscribe((value) => {
          if (value === 'exist') {
            alert(`${this.fd.id} already exist`);
          } else {
            alert('submitted');
            this.resetForm();
          }
        });
      }
    } catch (err) {}
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
