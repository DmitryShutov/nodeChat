import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../services/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit {

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.getUsersList();
  }

  getUsersList() {
    this.usersService.getUsersList().subscribe(
      data => console.log(data),
      error => console.log(error),
      () => console.log('complete'),
    );
  }

}
