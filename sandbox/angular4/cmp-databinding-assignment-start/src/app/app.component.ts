import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  events: Array<{ counter: number }> = [];

  onEventEmitted(event: { counter: number }) {
    console.log(`Handling event: #${event.counter}`);
    this.events.push(event);
    console.log(this.events);
  }
}

