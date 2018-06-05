import { Component, OnInit, Input } from '@angular/core';
import { Media } from '../profile.component';

@Component({
  selector: 'basic-media-card',
  templateUrl: './basic-media-card.component.html',
  styleUrls: ['./basic-media-card.component.scss']
})
export class BasicMediaCardComponent implements OnInit {

  @Input()
  title: string;

  // TODO: export this outside of profile
  @Input()
  media: Media[];

  constructor() { }

  ngOnInit() {
  }

}
