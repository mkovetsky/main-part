import { Component, OnInit } from '@angular/core';
import { EventBrokerService } from '../../../services/event-broker.service';

@Component({
  selector: 'profile-side-menu',
  templateUrl: './profile-side-menu.component.html',
  styleUrls: ['./profile-side-menu.component.scss']
})
export class ProfileSideMenuComponent implements OnInit {

  constructor( private eventBroker: EventBrokerService ) { }

  ngOnInit() {
  }

  notifyLandedSection(section: string) {
    this.eventBroker.emit<string>('profile-section-changed', section);
  }

}
