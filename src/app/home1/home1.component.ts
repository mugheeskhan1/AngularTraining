import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Observer, Subscription } from 'rxjs';

@Component({
  selector: 'app-home1',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.css'],
})
export class Home1Component implements OnInit, OnDestroy {
  private firstSubscription: Subscription;
  constructor() {}

  ngOnInit(): void {
    const customIntervalObserable = Observable.create((observer: any) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        count++;
      }, 1000);
    });

    this.firstSubscription = customIntervalObserable.subscribe((data: any) => {
      console.log(data);
    });
  }

  ngOnDestroy(): void {
    this.firstSubscription.unsubscribe();
  }
}
