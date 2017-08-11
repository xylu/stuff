import {
  AfterContentInit, AfterViewInit, Component, ContentChild, ElementRef, Input, OnInit,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-app-even',
  templateUrl: './app-even.component.html',
  styleUrls: ['./app-even.component.css']
})
// JUST TO play with local references and hooks
export class AppEvenComponent implements AfterContentInit {

  @ContentChild('number') numberFromLocalRef: ElementRef;

  number: number;

  ngAfterContentInit(): void {
    this.number = this.numberFromLocalRef.nativeElement.textContent;
  }


}
