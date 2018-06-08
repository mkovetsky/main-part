import { Injectable } from '@angular/core';


export interface ProfileRecord {
  img: string;
  title: string;
  description: string;
}

export interface ProfileCategory {
  categoryTitle: string;
  icon: string;
  link?: string;
  records: ProfileRecord[];
}


@Injectable()
export class ProfileService {

  profileSections: ProfileCategory[] = [
    {
      categoryTitle: 'Academics',
      icon: 'school',
      records: [
        {img: '../../assets/img/newfound.png', title: 'Geographic Information System', description: 'Undergraduate'},
        {img: '../../assets/img/concordia.png', title: 'Industrial Design', description: 'Undergraduate'}
      ],
    },
    {
      categoryTitle: 'Work Experiences',
      icon: 'work',
      records: [
        {img: '../../assets/img/autodesk.png', title: 'Junior Business Analyst', description: 'Since 2010'},
        {img: '../../assets/img/lixar.png', title: 'Junior Business Analyst', description: 'Since 2010'}
      ],
    },
    {
      categoryTitle: 'Skill Sets',
      icon: 'home',
      records: [
      ],
    },
    {
      categoryTitle: 'Activities',
      icon: 'group',
      records: [
        {img: '../../assets/img/soccer.png', title: 'Soccer', description: 'Since 2010'},
        {img: '../../assets/img/game.png', title: 'Video Game', description: 'Since 2010'}
      ],
    },
    {
      categoryTitle: 'Travels',
      icon: 'flight',
      records: [
        {img: '../../assets/img/cambodia.png', title: 'Cambodia', description: 'July 2010'},
        {img: '../../assets/img/usa.png', title: 'Usa', description: 'March 2010'}
      ],
    }
  ];

  constructor() { }


}
