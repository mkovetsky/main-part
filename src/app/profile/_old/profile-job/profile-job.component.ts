import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { EventBrokerService, IEventListener } from '../../../services/event-broker.service';
import { ProfileModalService } from '../../../services/profile-modal.service';

@Component({
  selector: 'profile-job',
  templateUrl: './profile-job.component.html',
  styleUrls: ['./profile-job.component.scss']
})
export class ProfileJobComponent implements OnInit {

  title = 'Jobs';

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
    this.editionModalLayoutData = this.service.getData();
    this.editionModalLayout = this.service.getLayouts();
  }

  onEditClicked() {
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
