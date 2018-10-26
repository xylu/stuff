import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  numbers: Array<number> = [];

  onEventEmitted(counter: number) {
    console.log(`Handling event: #${counter}`);
    this.numbers.push(counter);
    console.log(counter);
  }
}

