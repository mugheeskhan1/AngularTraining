import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  //we want other component to have our interval value from this component
  @Output() intervalFired = new EventEmitter<number>();
  
  interval: any;
  count = 0;
  constructor() { }

  ngOnInit(): void {
  }
  onStartGame() {
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.count + 1);
      this.count++;
    }, 1000);
  }
  onPauseGame() {
    clearInterval(this.interval);
  }
}
