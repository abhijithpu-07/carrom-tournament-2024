import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.css']
})
export class RulesComponent implements OnInit {

  constructor(private router:Router,
    private location:Location) { }

  ngOnInit(): void {
  }
  navigateToHome(): void {
    this.location.back() 
  }

}
