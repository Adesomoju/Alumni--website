import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

@Injectable()
export class ServeService {
  itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;

  constructor(private afs: AngularFirestore) {
    this.itemsCollection = this.afs.collection('Items', ref => ref.orderBy('set', 'asc'));
    this.items = this.itemsCollection.valueChanges();
   }

   getItems() {
     return this.items;
   }

   addItem(item: Item) {
     this.itemsCollection.add(item);
     console.log(item);
   }

}

interface Item {
  firstname?: string;
  lastname?: string;
  set?: string;
}
