import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() serverAdded = new EventEmitter<{ name: string, content: string }>();
  @Output('bpCreated') blueprintAdded = new EventEmitter<{ name: string, content: string }>();


  newServerName = '';
  newServerContent = '';


  constructor() {
  }

  ngOnInit() {
  }

  onAddServer() {
    this.serverAdded.emit({name: this.newServerName, content: this.newServerContent});
  }

  onAddBlueprint() {
    this.blueprintAdded.emit({name: this.newServerName, content: this.newServerContent});
  }
}
