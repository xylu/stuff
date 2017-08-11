import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-app-even',
  templateUrl: './app-even.component.html',
  styleUrls: ['./app-even.component.css']
})
export class AppEvenComponent implements OnInit {

  @Input() number;

  constructor() {
  }

  ngOnInit() {
  }

}
