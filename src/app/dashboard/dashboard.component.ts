import { Component, OnInit } from '@angular/core';
import { Social } from '../Models/social';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss','responsive.scss']
})
export class DashboardComponent implements OnInit {
  social:Social=new Social;
  // isLightMode:boolean=false;
  isLightMode:boolean=false;
  
  constructor() { 
    this.social=new Social();
  }

  ngOnInit(): void {
  }
  ChangeTheme(){
     this.isLightMode=(this.isLightMode)?false:true;
    
  }
}
