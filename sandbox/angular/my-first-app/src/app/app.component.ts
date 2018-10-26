import {Component} from '@angular/core';

@Component({
  // ELEMENT selector:
  selector: 'app-root',
  // ATTRIBUTE selector:
  // selector: '[app-root]',
  // CLASS selector
  // selector: '.app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My App 2';
  name = '';
}
