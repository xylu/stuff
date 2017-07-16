import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverName = '';

  constructor() {
    setTimeout(() => {
      console.log('Timeout fires!');
      this.allowNewServer = true;
      console.log('this.allowNewServer = ' + this.allowNewServer);
    }, 3000)
  }

  ngOnInit() {
  }

  onCreateNewServer() {
    console.log('New server added');
  }

  onServerNameInput($event: Event) {
    this.serverName = (<HTMLInputElement>$event.target).value;

  }

}
