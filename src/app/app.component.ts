import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'realProject';

  constructor(public router: Router){}

  onClick(action: boolean){
    sessionStorage.setItem("authenticated", action? "true": "false")
    if(action === false){
      this.router.navigate(['/']);
    }
  }

}
