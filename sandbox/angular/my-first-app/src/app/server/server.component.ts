import {Component} from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
    .online {
      color: white
    }`, `
    offline {
      color: blue
    }`]
})
export class ServerComponent {
  serverId = 10;
  status;

  constructor() {
    this.status = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getStatus() {
    return this.status;
  }

  getColor() {
    return this.status === 'offline' ? 'red' : 'green';
  }
}
