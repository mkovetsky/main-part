import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { ActivityEditionComponent } from './activity-edition/activity-edition.component';
import { Activity } from './activity';
import { EventBrokerService, IEventListener } from '../../../services/event-broker.service';
import { ProfileModalService } from '../../../services/profile-modal.service';

@Component({
  selector: 'profile-activity',
  templateUrl: './profile-activity.component.html',
  styleUrls: ['./profile-activity.component.scss']
})
export class ProfileActivityComponent implements OnInit {

  title = 'Activities';
  activity = Activity;
  eventListener: IEventListener;

  constructor(private dialogService: MatDialog,
              private service: ProfileModalService,
              private eventBroker: EventBrokerService) {
    this.eventListener = eventBroker.listen<string>('profile-edition-modal-checked-clicked', (value: string) => {
        if (this.title === value) {
          this.activity = JSON.parse(localStorage.getItem('profile-activity'));
        }
    });
  }

  ngOnInit() {
    this.activity = JSON.parse(localStorage.getItem('profile-activity'));
  }

  onEditClicked() {
    this.dialogService.open(ActivityEditionComponent, {
      panelClass: 'profile-edition-dialog'
    });
  }
}
