import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Detail } from '../profile.component';
import { Title } from '@angular/platform-browser';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'empty-profile-card',
  templateUrl: './empty-profile-card.component.html',
  styleUrls: ['./empty-profile-card.component.scss']
})
export class EmptyProfileCardComponent implements OnInit {

  @Input()
  details: Detail[];

  @Input()
  title: string;

  @Output()
  onEditClicked = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  editProfileCard() {
    this.onEditClicked.emit(true);
  }

}
