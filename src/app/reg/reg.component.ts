import { Component, OnInit ,Renderer2,ElementRef} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {
  ngOnInit() {
   
  }
  constructor(private router: Router) {}
 
  navigateToPredict(): void {
    this.router.navigate(['/predictionForms']); // navigate to the root/home route
  }
  navigateToCurrent(): void {
    this.router.navigate(['/semi']); // navigate to the root/home route
  }

}
