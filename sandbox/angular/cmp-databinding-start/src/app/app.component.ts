import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  serverElements = [{name: 'Test Server #1', type: 'server', content: 'Just a test! '}];


  onServerAdded(serverData: { name: string, content: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.name,
      content: serverData.content
    });
  }

  onBlueprintAdded(blueprintData: { name: string, content: string }) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.name,
      content: blueprintData.content
    });
  }

  onChangeFirst() {
    console.log('onChangeFirst');
    this.serverElements[0].name = 'Changed';
  }

  onDestroyFirst() {
    this.serverElements.splice(0, 1);
  }
}
