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
    'Aboriosam inventore dolorem inventore nam est esse. Aperiam voluptatem nisi molestias laborum ut. Porro dignissimos eum. Tempore dolores minus unde est voluptatum incidunt ut aperiam.',
    // tslint:disable-next-line:max-line-length
    'Voluptatem perferendis sed assumenda voluptatibus. Laudantium molestiae sint. Doloremque odio dolore dolore sit. Quae labore alias ea omnis ex expedita sapiente molestias atque. Optio voluptas et.',
    // tslint:disable-next-line:max-line-length
    'Et dolore blanditiis officiis non quod id possimus. Optio non commodi alias sint culpa sapiente nihil ipsa magnam. Qui eum alias provident omnis incidunt aut. Eius et officia corrupti omnis error vel quia omnis velit. In qui debitis',
    'autem aperiam voluptates unde sunt et facilis'
  ];

  constructor() { }

  ngOnInit() {
  }
}
