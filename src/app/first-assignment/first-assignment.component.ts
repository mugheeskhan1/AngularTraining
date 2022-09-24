import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-assignment',
  templateUrl: './first-assignment.component.html',
  styleUrls: ['./first-assignment.component.css']
})
export class FirstAssignmentComponent implements OnInit {

  username = '';
  constructor() { }

  ngOnInit(): void {
  }

  resetUser() {
    this.username = "";
  }

}
