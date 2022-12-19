import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService1 } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  activatedUser = false;
  private activatedSubscription: Subscription;
  constructor(private userService: UserService1) {}

  ngOnInit(): void {
    this.activatedSubscription = this.userService.activatedEmitter.subscribe(
      (didActivate) => {
        this.activatedUser = didActivate;
      }
    );
  }

  ngOnDestroy(): void {
    this.activatedSubscription.unsubscribe();
  }
}
