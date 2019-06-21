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
    {image: '/assets/Fadaka.jpg', name: 'Yemi Jimi Salami (Fadaka)', position: 'President (2018 to date)', set: '1981 set'},
// tslint:disable-next-line: max-line-length
    {image: '/assets/Aderinsola_Ogunleye.jpg', name: 'Aderinsola Oloye Ogunleye', position: 'Vice President (2018 to date)', set: '1985 Set'},
    // tslint:disable-next-line:max-line-length
    {image: '/assets/Morayo.jpg', name: 'Simisola Morayo Asekun', position: 'General Secretary (2018 to date)', set: '1993 set'},
    // tslint:disable-next-line:max-line-length
    {image: '/assets/toyin.jpg', name: 'Toyin Bello nee Adeniyi', position: 'Public Relations Officer (2018 to date)', set: '1996 set'},
    // tslint:disable-next-line:max-line-length
   {image: '/assets/monisola.jpg', name: 'Monisola Akinrosotu Esan', position: 'Treasurer (2018 to date)', set: '1993 set'},
// tslint:disable-next-line: max-line-length
   {image: '/assets/IMG_20171005_080744047_BURST001.jpg', name: 'Olubunmi T Eyelade', position: 'Assistant General Secretary (2018 to date)', set: '1995 set'},
// tslint:disable-next-line: max-line-length
   {image: '/assets/Bola_Adebayo.jpg', name: 'Bolanle Adebayo Odukoya', position: 'Financial Secretary (2018 to date)', set: '1993 set'}

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
