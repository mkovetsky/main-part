import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { EventBrokerService, IEventListener } from '../../../services/event-broker.service';
import { ProfileModalService } from '../../../services/profile-modal.service';

@Component({
  selector: 'profile-super-power',
  templateUrl: './profile-super-power.component.html',
  styleUrls: ['./profile-super-power.component.scss']
})
export class ProfileSuperPowerComponent implements OnInit {

  title = 'Super Powers';

  editionModalLayoutData = null;
  editionModalLayout = null;

  dialogRef: MatDialogRef<any>;
  eventListener: IEventListener;

  constructor(public dialog: MatDialog,
              private service: ProfileModalService,
              private eventBroker: EventBrokerService) {
    this.eventListener = eventBroker.listen<string>('profile-edition-modal-arrow-back-clicked', (value: string) => {
      this.onArrowBackClicked(value);
    });
    this.eventListener = eventBroker.listen<string>('profile-edition-modal-checked-clicked', (value: string) => {
      this.onCheckedClicked(value);
    });
  }

  ngOnInit() {
  }

  onArrowBackClicked(title: string) {
    if (title.toLowerCase() === this.title.toLowerCase()) {
      this.dialogRef.close();
    }
  }

  onCheckedClicked(title: string) {
    if (title.toLowerCase() === this.title.toLowerCase()) {
      this.dialogRef.close();
    }
  }
}
