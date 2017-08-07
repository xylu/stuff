import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() serverAdded = new EventEmitter<{ name: string, content: string }>();
  @Output('bpCreated') blueprintAdded = new EventEmitter<{ name: string, content: string }>();


  // newServerName = '';
  // newServerContent = '';

  @ViewChild('newServerContent') newServerContent: ElementRef;

  constructor() {
  }

  ngOnInit() {
  }

  onAddServer(serverNameInput: HTMLInputElement) {
    this.serverAdded.emit({name: serverNameInput.value, content: this.newServerContent.nativeElement.value});
  }

  onAddBlueprint(serverNameInput: HTMLInputElement) {
    this.blueprintAdded.emit({name: serverNameInput.value, content: this.newServerContent.nativeElement.value});
  }
}
