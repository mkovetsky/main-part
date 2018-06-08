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
        {img: '../../../assets/introduction-menu/newfound.png', title: 'Geographic Information System', description: 'Undergraduate'},
        {img: '../../../assets/introduction-menu/concordia.png', title: 'Industrial Design', description: 'Undergraduate'}
      ],
    },
    {
      categoryTitle: 'Work Experiences',
      icon: 'work',
      records: [
        {img: '../../../assets/introduction-menu/autodesk.png', title: 'Junior Business Analyst', description: 'Since 2010'},
        {img: '../../../assets/introduction-menu/lixar.png', title: 'Junior Business Analyst', description: 'Since 2010'}
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
        {img: '../../../assets/introduction-menu/soccer.png', title: 'Soccer', description: 'Since 2010'},
        {img: '../../../assets/introduction-menu/game.png', title: 'Video Game', description: 'Since 2010'}
      ],
    },
    {
      categoryTitle: 'Travels',
      icon: 'flight',
      records: [
        {img: '../../../assets/introduction-menu/cambodia.png', title: 'Cambodia', description: 'July 2010'},
        {img: '../../../assets/introduction-menu/usa.png', title: 'Usa', description: 'March 2010'}
      ],
    }
  ];

  constructor() { }


}
