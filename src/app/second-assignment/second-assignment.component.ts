import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-assignment',
  templateUrl: './second-assignment.component.html',
  styleUrls: ['./second-assignment.component.css']
})
export class SecondAssignmentComponent implements OnInit {

  showParagraph = false;
  log = [1];
  constructor() { }

  ngOnInit(): void {
  }

  setshowParagraph(event: Event) {
    this.log.push(this.log.length + 1);
    this.showParagraph = true;
  }

}
