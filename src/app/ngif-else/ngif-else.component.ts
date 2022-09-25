import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif-else',
  templateUrl: './ngif-else.component.html',
  styleUrls: ['./ngif-else.component.css']
})
export class NgifElseComponent implements OnInit {

  serverName = 'Test';
  serverCreated = false;
  constructor() { }

  ngOnInit(): void {
  }

  createServer() {
    this.serverCreated = true;
  }
}
