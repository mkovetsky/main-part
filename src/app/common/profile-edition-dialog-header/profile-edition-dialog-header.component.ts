import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EventBrokerService } from '../../services/event-broker.service';

@Component({
  selector: 'profile-edition-dialog-header',
  templateUrl: './profile-edition-dialog-header.component.html',
  styleUrls: ['./profile-edition-dialog-header.component.scss']
})
export class ProfileEditionDialogHeaderComponent implements OnInit {

  @Input()
  title: string;

  @Output()
  onArrowBackClicked = new EventEmitter<boolean>();

  @Output()
  onCheckedClicked = new EventEmitter<boolean>();

  constructor(private eventBroker: EventBrokerService) { }

  ngOnInit() {
  }

  arrowBackClicked() {
    this.onArrowBackClicked.emit(true);
    this.eventBroker.emit<string>('profile-edition-modal-arrow-back-clicked', this.title);
  }

  checkClicked() {
    this.onCheckedClicked.emit(true);
    this.eventBroker.emit<string>('profile-edition-modal-checked-clicked', this.title);
  }

}
