import { Component, OnDestroy, OnInit } from '@angular/core';
import { map, Observable, Observer, Subscription } from 'rxjs';

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
        if (count == 2) {
          observer.complete();
        }
        if (count > 3) {
          observer.error(new Error('Count is greater than 3'));
        }
        count++;
      }, 1000);
    });

    this.firstSubscription = customIntervalObserable
      .pipe(
        map((data: number) => {
          return 'Round ' + (data + 1);
        })
      )
      .subscribe(
        (data: any) => {
          console.log(data);
        },
        (error: any) => {
          alert(error.message);
          console.log(error);
        },
        () => {
          console.log('Completed!!!');
        }
      );
  }

  ngOnDestroy(): void {
    this.firstSubscription.unsubscribe();
  }
}
