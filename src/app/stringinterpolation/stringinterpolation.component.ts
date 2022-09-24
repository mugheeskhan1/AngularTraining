import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stringinterpolation',
  templateUrl: './stringinterpolation.component.html',
  styleUrls: ['./stringinterpolation.component.css']
})
export class StringinterpolationComponent implements OnInit {
  serverId: number = 10;
  serverStatus: string  = "offline";
    
  constructor() { }

  getServerStatus(){
    return this.serverStatus;
  }

  ngOnInit(): void {
  }

}
