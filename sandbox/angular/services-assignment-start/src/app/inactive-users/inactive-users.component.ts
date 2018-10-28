import {Component, OnInit} from '@angular/core';
import {UsersService} from '../shared/users.service';
import {CountService} from '../shared/count.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  users: string[];
  counter = 0;

  constructor(private usersService: UsersService,
              private countService: CountService) {
  }

  ngOnInit(): void {
    this.users = this.usersService.inactiveUsers;
    this.countService.inactiveToActiveIncreased.subscribe((newValue) => {
      this.counter = newValue;
    });
  }


  onSetToActive(id: number) {
    this.usersService.setToActive(id);
  }
}
