import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  collapsed = true;
  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }

// tslint:disable-next-line:member-ordering
//   @Output() feautureSelected = new EventEmitter<string>();
//   OnSelect(feauture: string) {
//     console.log('clicked me!');
//     this.feautureSelected.emit(feauture);
// }

  constructor() { }

  ngOnInit() {
  }

}

