import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  public History = [
    // tslint:disable-next-line:max-line-length
    'It is with great pleasure and gratitude to the almighty God that I welcome you all to this august occasion in January. What culminated in today’s meeting is a journey of a little over a year. It started as an idea in the mind of an alumnus, Mrs. Monisola Esan (Akinrosotu), which she shared with her friend Simi Asekun and some other friends.',
// tslint:disable-next-line: max-line-length
    'Having seen the willingness of some of these friends, she started a WhatsApp group for St. Louis Owo (SLO) old girls, they reached out to some members of the older generation who were on the Facebook platform of the school earlier created by Mrs Aderinsola Oloye Ogunleye.'
  ];

  constructor() { }

  ngOnInit() {
  }

}
