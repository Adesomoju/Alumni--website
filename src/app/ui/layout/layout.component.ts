import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {



  // tslint:disable-next-line:member-ordering
  public Excos = [
    // tslint:disable-next-line:max-line-length
    {image: '/assets/achievement-adult-african-1035598.jpg', name: 'Brenden Legros', position: 'Quas alias incidunt', set: 'Fugiat laborum et'},
    {image: '/assets/intro-bg.jpg', name: 'Cole Emmerich', position: 'Fugiat laborum et', set: 'Fugiat laborum et'},
    // tslint:disable-next-line:max-line-length
    {image: '/assets/black-background-bulb-close-up-52910.jpg', name: 'Jack Christiansen', position: 'Debitis iure vero', set: 'Fugiat laborum et'},
    // tslint:disable-next-line:max-line-length
    {image: '/assets/black-background-bulb-close-up-52910.jpg', name: 'Hubert Hirthe', position: 'Consequuntur odio aut', set: 'Fugiat laborum et'},
    // tslint:disable-next-line:max-line-length
    {image: '/assets/achievement-adult-african-1035598.jpg', name: 'Alejandrin Littel', position: 'Qui molestiae natus', set: 'Fugiat laborum et'},
    {image: '/assets/intro-bg.jpg', name: 'Willow Trantow', position: 'Non autem dicta', set: 'Fugiat laborum et'}
  ];

  public Speechs = [
    // tslint:disable-next-line:max-line-length
    'You are welcome to St. Louis Grammar School Owo Alumni website. This page provides information about the old girls of the school and their activities in the school.',
    // tslint:disable-next-line:max-line-length
    'The Old girls Association was established in 1993, but gathered greater momentum at the establishment of its WhatsApp group in 2016. The membership has risen and the level of enthusiasm has risen.',
    // tslint:disable-next-line:max-line-length
    'We are however congnisant of the fact that we still have many Old girls scattered all over the world and we are eager to have them join us.',
// tslint:disable-next-line: max-line-length
    'So if you are an Old girl just visiting this site, kindly register your name and join this happy family. Many of your school mates are eager to link up with you.',
    'God bless you.'
  ];

  constructor() { }

  ngOnInit() {
  }
}
