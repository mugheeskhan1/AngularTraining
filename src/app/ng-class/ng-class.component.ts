import { Component, OnInit } from '@angular/core';
import { timeInterval } from 'rxjs';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css']
})
export class NgClassComponent implements OnInit {

  serverStatus = 'offline';
  constructor() {
    setTimeout(() => {
      this.serverStatus = 'online';
    }, 2000);
  }

  ngOnInit(): void {
  }

}
