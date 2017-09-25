import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { AddEventPage } from '../add-event/add-event';
import { EventModalPage } from '../event-modal/event-modal';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  events:string;

  categories = [
    { id: '1', name: 'Food', url: 'http://lorempixel.com/700/300/food', listing: '50'},
    { id: '2', name: 'Food', url: 'http://lorempixel.com/700/300/animals', listing: '50'},
    { id: '1', name: 'Food', url: 'http://lorempixel.com/700/300/abstract', listing: '50'},
    { id: '2', name: 'Food', url: 'http://lorempixel.com/700/300/city', listing: '50'},
    { id: '1', name: 'Food', url: 'http://lorempixel.com/700/300/people', listing: '50'},
    { id: '2', name: 'Food', url: 'http://lorempixel.com/700/300/nature', listing: '50'},
    { id: '1', name: 'Food', url: 'http://lorempixel.com/700/300/transport', listing: '50'},
    { id: '2', name: 'Food', url: 'http://lorempixel.com/700/300/sports', listing: '50'},
    { id: '1', name: 'Food', url: 'http://lorempixel.com/700/300/technics', listing: '50'},
    { id: '2', name: 'Food', url: 'http://lorempixel.com/700/300/fashion', listing: '50'}
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
 
    this.events="categories";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  addEvent()
  {
	 this.navCtrl.push(EventModalPage);
	 //this.MyApp.getRootNav().push(AddEventPage);
  }
  
}
