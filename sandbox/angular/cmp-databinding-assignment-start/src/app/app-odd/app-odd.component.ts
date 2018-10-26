import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-app-odd',
  templateUrl: './app-odd.component.html',
  styleUrls: ['./app-odd.component.css']
})
export class AppOddComponent implements OnInit {

  @Input() number;

  constructor() { }


  ngOnInit() {
  }

}
