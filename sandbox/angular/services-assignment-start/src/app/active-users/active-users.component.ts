import {Component, OnInit} from '@angular/core';
import {UsersService} from '../shared/users.service';
import {CountService} from '../shared/count.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css'],
})
export class ActiveUsersComponent implements OnInit {
  users: string[];
  counter = 0;

  constructor(private usersService: UsersService,
              private countService: CountService) {
  }

  ngOnInit(): void {
    this.users = this.usersService.activeUsers;
    this.countService.activeToInactiveIncreased.subscribe((newValue) => {
      this.counter = newValue;
    });
  }

  onSetToInactive(id: number) {
    this.usersService.setToInactive(id);

  }
}
