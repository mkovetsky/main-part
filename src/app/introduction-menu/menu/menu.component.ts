import { Component, Input, OnInit } from '@angular/core';
import { SortEvent } from '../draggable/sortable-list.directive';
import { ProfileCategory } from '../services/profile.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {
  @Input() sections: ProfileCategory[];
  @Input() sortable = false;

  constructor() {
  }

  ngOnInit() {
  }

  sort(event: SortEvent) {
    if (!this.sortable) {
      return false;
    }
    const current = this.sections[event.currentIndex];
    const swapWith = this.sections[event.newIndex];
    this.sections[event.newIndex] = current;
    this.sections[event.currentIndex] = swapWith;
  }

  sortNested(event: SortEvent, categoryIndex: number) {
    if (!this.sortable) {
      return false;
    }
    const current = this.sections[categoryIndex].records[event.currentIndex];
    const swapWith = this.sections[categoryIndex].records[event.newIndex];
    this.sections[categoryIndex].records[event.newIndex] = current;
    this.sections[categoryIndex].records[event.currentIndex] = swapWith;
  }

}
