import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css']
})
export class NgStyleComponent implements OnInit {

  serverStatus = 'offline';
  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  ngOnInit(): void {
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }

}
