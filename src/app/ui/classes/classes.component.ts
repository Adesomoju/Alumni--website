import { Component, OnInit } from '@angular/core';
import { ServeService } from '../serve.service';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent implements OnInit {
  Items: Item[];

  constructor(private serveservice: ServeService) { }

  ngOnInit() {
    this.serveservice.getItems().subscribe(Items => {
      this.Items = Items;
    });
  }

}

interface Item {
  firstname?: string;
  lastname?: string;
  set?: string;
}
