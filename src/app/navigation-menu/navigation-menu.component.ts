import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss']
})
export class NavigationMenuComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<NavigationMenuComponent>, private router: Router) { }

  ngOnInit() {
  }

  logout() {
    this.closeDialog();
    localStorage.removeItem('currentUser');
    this.router.navigateByUrl('/login');
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
