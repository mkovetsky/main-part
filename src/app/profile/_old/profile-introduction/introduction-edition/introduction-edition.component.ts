import { Component, OnInit, Input, Inject, Output, EventEmitter } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { ProfileService } from '../../../../services/profile.service';
import { EventBrokerService } from '../../../../services/event-broker.service';

@Component({
  selector: 'introduction-edition',
  templateUrl: './introduction-edition.component.html',
  styleUrls: ['./introduction-edition.component.scss']
})
export class IntroductionEditionComponent implements OnInit {

  @Output() onTextChange = new EventEmitter<string>();

  text: string;
  videoUrl: string;

  constructor(private dialogRef: MatDialogRef<IntroductionEditionComponent>,
              private profileService: ProfileService,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private eventBroker: EventBrokerService,
              private sanitizer: DomSanitizer) {
    this.text = data.text;
    this.videoUrl = data.videoUrl;
  }

  ngOnInit() {
  }

  // TODO: what happens if we have more than 1000 words?
  onCheckedClicked(text: string, videoUrl: string) {

    // TODO: verify first that a change was made
    if (true) {
      this.profileService.saveProfileIntroduction(
        {
          text: text,
          videoUrl: videoUrl
        }
      );
      this.eventBroker.emit<string>('profile-introduction-text-changed', text);
      this.eventBroker.emit<string>('profile-introduction-videoUrl-changed', videoUrl);
    }

    this.closeDialog();
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
