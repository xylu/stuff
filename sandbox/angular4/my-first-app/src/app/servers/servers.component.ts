import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',


})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverName = '';
  serverAdded = false;
  servers = ['server1'];

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
    this.serverAdded = true;
    console.log('New server added');
    this.servers.push(this.serverName);
  }

  onServerNameInput($event: Event) {
    this.serverName = (<HTMLInputElement>$event.target).value;

  }

}
