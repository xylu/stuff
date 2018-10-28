import {EventEmitter} from '@angular/core';
export class CountService {

  activeToInactive = 0;
  inactiveToActive = 0;

  activeToInactiveIncreased = new EventEmitter<number>();
  inactiveToActiveIncreased = new EventEmitter<number>();

  incActiveToInactive() {
    this.activeToInactive++;
    this.activeToInactiveIncreased.emit(this.activeToInactive);
  }

  incInactiveToActive() {
    this.inactiveToActive++;
    this.inactiveToActiveIncreased.emit(this.inactiveToActive);
  }
}
