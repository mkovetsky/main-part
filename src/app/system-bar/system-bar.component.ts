import { Component, OnInit, OnDestroy, Injectable } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Observable } from 'rxjs/Observable';
import { trigger, transition, style, animate } from '@angular/animations';
import { EventBrokerService, IEventListener } from '../services/event-broker.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { NavigationMenuComponent } from '../navigation-menu/navigation-menu.component';
import { ProfileCategory, ProfileService } from '../introduction-menu/services/profile.service';

@Component({
  selector: 'system-bar',
  templateUrl: './system-bar.component.html',
  styleUrls: ['./system-bar.component.scss'],
  animations: [
    trigger('buttons', [
      transition(':enter', [
        style({ transform: 'scale(0.5)', opacity: 0 }),  // initial
        animate('0.7s cubic-bezier(.8, -0.6, 0.26, 1.6)',
          style({ transform: 'scale(1)', opacity: 1 }))  // final
      ]),
      transition(':leave', [
        style({ transform: 'scale(1)', opacity: 1, height: '*' }),
        animate('0.6s cubic-bezier(.8, -0.6, 0.2, 1.5)',
          style({
            transform: 'scale(0.5)', opacity: 0,
            height: '0px', margin: '0px'
          }))
      ])
    ])
  ]
})
@Injectable()
export class SystemBarComponent implements OnInit, OnDestroy {

  currentProfile: string;
  isLoggedIn$: Observable<boolean>;
  eventListener: IEventListener;

  menuShown = false;
  editShown = false;
  profileSections = [];
  editMenu: ProfileCategory[] = [{
    categoryTitle: 'Rearrange Profile Sections',
    icon: 'school',
    link: '/rearrange',
    records: []
  }, {
    categoryTitle: 'Add media',
    icon: 'media',
    link: '/blog/articles',
    records: []
  }];

  constructor(private dialogService: MatDialog,
              private profileService: ProfileService,
              private authenticationService: AuthenticationService,
              private eventBroker: EventBrokerService, private router: Router) {
      // this.eventListener = eventBroker.listen<string>('profile-section-changed', (value: string) => {
      //      this.currentProfile = value;
      // });
  }

  public ngOnDestroy() {
      this.eventListener.ignore();
  }

  ngOnInit() {
    this.profileSections = this.profileService.profileSections;
    // this.isLoggedIn$ = this.authenticationService.isLoggedIn;
  }

  onLogout() {
    this.authenticationService.logout();
  }

  onProfileClicked() {
    this.eventBroker.emit<boolean>('system-bar-profile-clicked', true);
  }

  onNotificationClicked() {
    this.eventBroker.emit<boolean>('system-bar-notification-clicked', true);
  }

  isCurrentRouteProfile() {
    return this.router.url.startsWith('/profile');
  }

  openNavigationMenu() {
    this.dialogService.open(NavigationMenuComponent, {
      panelClass: 'navigation-menu-dialog'
    });
  }

  private openSideNavigator(routeToSidenav: string) {
    this.router.navigate([routeToSidenav]);
  }
}
