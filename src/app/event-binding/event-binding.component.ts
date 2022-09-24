import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  serverCreationStatus = 'No server is created yet!';
  constructor() { }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreationStatus = "Server is created";
  }

}
