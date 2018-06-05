import { Component, OnInit } from '@angular/core';

import { User } from '../model/user';
import { UserService } from '../services/user.service';
import { trigger, transition, style, animate, group } from '@angular/animations';
import * as FakeDashboardData from '../mock/dashboard-data';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']})
export class DashboardComponent implements OnInit {
  currentUser: User;
  users: User[] = [];
  data: any[];

  view: any[];

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#A80C28', '#C7FF2C', '#E30A28', '#C7B777']
  };

  constructor(private userService: UserService) {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
      this.data = FakeDashboardData.bubbleData;
      const tmpData = this.data;
      Object.assign(this, {tmpData});
  }

  ngOnInit() {
      this.loadAllUsers();
      // TODO: remove the height of the system-bar
      this.view = [window.innerWidth, window.innerHeight - 75];
  }

  deleteUser(id: number) {
      this.userService.delete(id).subscribe(() => { this.loadAllUsers(); });
  }

  private loadAllUsers() {
      this.userService.getAll().subscribe(users => { this.users = users; });
  }
}
