import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  paragraphShown = false;
  logs = [];

  onClick() {
    this.paragraphShown = !this.paragraphShown;
    this.logs.push('Log at ' + new Date());
  }

  getBackgroundColor(index) {
    console.log('Index:' + index);
    return index >= 4 ? 'blue' : 'white';
  }

}
