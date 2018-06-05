import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'circle-button',
  templateUrl: './circle-button.component.html',
  styleUrls: ['./circle-button.component.scss']
})
export class CircleButtonComponent implements OnInit {

  @Input()
  matIcon: string;

  constructor() { }

  ngOnInit() {
  }

}
