import { Component, Injectable } from '@angular/core';
import { EventBrokerService, IEventListener } from './services/event-broker.service';

@Component({
  selector: 'root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
@Injectable()
export class AppComponent {
  title = 'app';
  eventListener: IEventListener;
  openLeftSidenav = false;
  openRightSidenav = false;

  constructor(private eventBroker: EventBrokerService) {
    this.eventListener = eventBroker.listen<boolean>('system-bar-profile-clicked', (value: boolean) => {
         this.openRightSidenav = value;
    });
    this.eventListener = eventBroker.listen<boolean>('system-bar-notification-clicked', (value: boolean) => {
         this.openLeftSidenav = value;
    });
  }
}
