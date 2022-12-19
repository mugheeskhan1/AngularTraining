import { Component, OnInit } from '@angular/core';
import { UserService1 } from './user.service';
import { UserService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  activatedUser = false;
  constructor(private userService: UserService1) {}
  ngOnInit(): void {
    this.userService.activatedEmitter.subscribe((didActivate) => {
      this.activatedUser = didActivate;
    });
  }
}
