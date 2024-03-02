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
  email: string='';
  account:string=''
  fd: FormData = {
    id: '', name: '', team: '',
    email: '',
    account: ''
  };
  fd1: FormData[] = [];

  constructor(private service: CarromServiceService,
    private location: Location) {}

  ngOnInit(): void {}

  public goBack()
  {
    this.location.back(); 
    this.resetForm();
  }

  public addData() {
    const id = this.id;
    const name = this.name;
    const email = this.email;
    // /^[0-9a-zA-Z]{6}$/;
    const regexId =  /^(?:\d{6}|[a-zA-Z][0-9]{5})$/;
    const regexName = /^[a-zA-Z\s]+$/;
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    // if (regex.test(id)) {
    //     console.log('Valid id:', id);
    // } else {
    //     console.log('Invalid id:', id);
    // }
    if (this.id == '' || this.name == '' || this.team == '' || this.email == '' || this.account == '') {
      alert('Fill all the details Properly!!!');
    
    } else if (!regexId.test(id)) {
      alert('Enter the correct UID!!!');
    } 
    else if (!regexName.test(name)) {
      alert('Enter name properly!!!');
    }
    else if (!regexEmail.test(email)) {
      alert('Enter the correct email id!!!');
    }
     
    else {
      this.fd.id = this.id;
      this.fd.name = this.name;
      this.fd.team = this.team;
      this.fd.account = this.account;
      this.fd.email = this.email;
      this.fd.id = this.fd.id.toUpperCase();
      // console.log(this.fd);
      this.service.saveDataIfNotExists(this.fd).subscribe((value) => {
        if (value === 'exist') {
          alert(`UID : ${this.fd.id} already submitted the response!!!`);
        } else {
          alert(' Successfully submitted the response!!!');
          this.location.back(); 
          this.resetForm();
        }
      });
    }
  }
  public resetForm() {
    this.id = '';
    this.name = '';
    this.team = '';
    this.email = '';
    this.account = '';
  }
}

