import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { IntroductionEditionComponent } from './introduction-edition/introduction-edition.component';
import { DomSanitizer } from '@angular/platform-browser';
import { EventBrokerService, IEventListener } from '../../../services/event-broker.service';
import { ProfileService } from '../../../services/profile.service';

@Component({
  selector: 'profile-introduction',
  templateUrl: './profile-introduction.component.html',
  styleUrls: ['./profile-introduction.component.scss']
})
export class ProfileIntroductionComponent implements OnInit {

  eventListener: IEventListener;

  text: string;
  videoUrl: string;

  title = 'Introduction';

  constructor(private dialogService: MatDialog,
              private profileService: ProfileService,
              private eventBroker: EventBrokerService,
              private sanitizer: DomSanitizer) {
    this.eventListener = eventBroker.listen<string>('profile-introduction-text-changed', (value: string) => {
      this.text = value;
    });
    this.eventListener = eventBroker.listen<string>('profile-introduction-videoUrl-changed', (value: string) => {
      this.videoUrl = value;
    });
  }

  ngOnInit() {
    const intro = this.profileService.getProfileIntroduction();

    if (intro) {
      this.text = intro.text;
      this.videoUrl = intro.videoUrl;
    }
  }

  onEditClicked() {
    this.dialogService.open(IntroductionEditionComponent, {
      panelClass: 'profile-edition-dialog',
      data: {
        text: this.text,
        videoUrl: this.videoUrl
      }
    });
  }
}
