import { Component, OnInit, EventEmitter, HostListener, Input, Output, Injectable, AfterViewInit } from '@angular/core';
import { EventBrokerService, IEventListener } from '../services/event-broker.service';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from '../services/profile.service';

export interface Media {
  subtitle: string;
  imgUrl: string;
  createdBy: string;
  createdAt: Date;
}

export interface Detail {
  title: string;
  summary: string;
}

export interface Profile {
  title: string;
  details: Detail[];
  media: Media[];
  simplifiedTitle: string;
}

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
@Injectable()
export class ProfileComponent implements OnInit {

  emptyMedia: Media[] = [];

  introductionMedia: Media[] = [
  ];

  powersMedia: Media[] = [
    {
      subtitle: 'Sour Olive In mouth Power | Not talking at all',
      imgUrl: 'http://cdn.edgecast.steamstatic.com/steamcommunity/public/images/' +
        'avatars/d9/d9a0c2f87a753227530118bbe5fdf9dd8ff30bfc_full.jpg',
      createdBy: 'Jaime Landlorder',
      createdAt: new Date()
    },
    {
      subtitle: 'Spongy reader. Absorbe like never before',
      imgUrl: 'http://s3.amazonaws.com/images.thereadingroom.com/img/posts/madysanavenue/spongebob.gif',
      createdBy: 'Jaime Landlorder',
      createdAt: new Date()
    }
  ];

  travellingMedia: Media[] = [
  ];

  activityMedia: Media[] = [
    {
      subtitle: 'If you search beauty, you will end up admiring Women',
      imgUrl: 'https://images.unsplash.com/photo-1518531239288-4d309801a07e?' +
        'ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8a251b9e0dfe48b27d571728f1029d77&w=1000&q=80',
      createdBy: 'Jaime Landlorder',
      createdAt: new Date()
    }
  ];

  // TODO: export this outside of profile
  @Input()
  media: Media[];

  title: string;

  private fragment: string;

  eventListener: IEventListener;

  constructor(private route: ActivatedRoute, private eventBroker: EventBrokerService, private profileService: ProfileService) {
    this.eventListener = eventBroker.listen<string>('profile-section-changed', (value: string) => {
      this.updateLeftPage(value);
    });
  }

  ngOnInit() {
    this.whereAreWe();
  }

  onBookScroll($event) {
    this.whereAreWe();
  }

  updateLeftPage(profileSection: string) {
    this.title = profileSection;

    // TODO: Inject the media properly please :)
    if (profileSection.toLowerCase() === 'introduction') {
      this.media = this.introductionMedia;
    } else if (profileSection.toLowerCase() === 'skills') {
      this.media = this.emptyMedia;
    } else if (profileSection.toLowerCase() === 'activities') {
      this.media = this.activityMedia;
    } else if (profileSection.toLowerCase() === 'jobs') {
      this.media = this.emptyMedia;
    } else if (profileSection.toLowerCase() === 'super powers') {
      this.media = this.powersMedia;
    } else if (profileSection.toLowerCase() === 'academics') {
      this.media = this.emptyMedia;
    } else if (profileSection.toLowerCase() === 'travelling info') {
      this.media = this.travellingMedia;
    }
  }

  whereAreWe() {
    // Change the title
    const rightPage = document.querySelector('.right-page');
    const card = document.elementFromPoint(
        rightPage.getBoundingClientRect().left + 10,
        (rightPage.getBoundingClientRect().bottom - rightPage.getBoundingClientRect().top) / 3);

    const cardTitle = card.querySelector('.title');

    // Emit to everyone the change of profile section
    if (cardTitle) {
      this.eventBroker.emit<string>('profile-section-changed', cardTitle.innerHTML);
    }
  }
}
