import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-web',
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.css'],
  
})
export class WebComponent{
  constructor(private router: Router) {}

    newChange(): void {
        this.router.navigateByUrl('login');
        
    }
    
  title = 'Web Argentina Programa';
}
