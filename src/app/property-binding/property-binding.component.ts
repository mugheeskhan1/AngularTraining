import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

  allowNewUser = false;
  constructor() {
    setTimeout(() => {
      this.allowNewUser = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

}
