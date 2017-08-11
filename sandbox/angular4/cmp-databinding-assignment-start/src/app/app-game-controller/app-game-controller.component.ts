import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import Timer = NodeJS.Timer;

@Component({
  selector: 'app-app-game-controller',
  templateUrl: './app-game-controller.component.html',
  styleUrls: ['./app-game-controller.component.css']
})
export class AppGameControllerComponent implements OnInit {

  timer: Timer;
  counter: number;

  @Output() eventEmitted = new EventEmitter<{ counter: number }>();

  constructor() {
  }

  ngOnInit() {
  }

  startGame() {
    console.log('startGame');
    this.counter = 0;
    this.timer = setInterval(() => {
      ++this.counter;
      console.log(`Emit event: #${this.counter}`);
      this.eventEmitted.emit({counter: this.counter});
    }, 1000);
  }

  stopGame() {
    console.log('stopGame');
    clearInterval(this.timer);
  }
}
