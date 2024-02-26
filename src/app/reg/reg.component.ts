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
 
  navigateToHome(): void {
    this.router.navigate(['/']); // navigate to the root/home route
  }

}
