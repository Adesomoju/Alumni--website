import { Component, OnInit } from '@angular/core';
import { ServeService } from '../serve.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  item: Item = {
    firstname: '',
    lastname: '',
    set: '',
  };

  constructor(private serveservice: ServeService) { }

  ngOnInit() {
  }
  onSubmit() {
    if (this.item.firstname !== '' && this.item.lastname !== '') {
      this.serveservice.addItem(this.item);
    }
  }

}
interface Item {
  firstname?: string;
  lastname?: string;
  set?: string;
}
