import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  selectedLink: string;

  onLinkSelectEvent(foo: string, link: string) {
    console.log(`foo: ${foo},  Event handled: ${link}, `);
    this.selectedLink = link;

  }
}


