import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testing-structural-directive',
  templateUrl: './testing-structural-directive.component.html',
  styleUrls: ['./testing-structural-directive.component.css']
})
export class TestingStructuralDirectiveComponent implements OnInit {
  serverName = 'Test';
  serverCreated = false;
  constructor() { }

  ngOnInit(): void {
  }

  createServer() {
    this.serverCreated = true;
  }

}
