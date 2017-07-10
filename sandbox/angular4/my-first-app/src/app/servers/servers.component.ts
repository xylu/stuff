import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-servers',
  template: `Servers:<br>
  <app-server></app-server><br>
  <app-server></app-server><br>
  <app-server></app-server><br>`,
})
export class ServersComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
