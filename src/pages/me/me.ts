import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, AlertController  } from 'ionic-angular';
import { MyeventsPage} from '../myevents/myevents';
import * as moment from 'moment';

@IonicPage()
@Component({
  selector: 'page-me',
  templateUrl: 'me.html',
})
export class MePage {

  eventSource = [];
  viewTitle: string;
  selectedDay = new Date();
 
  calendar = {
    mode: 'month',
    currentDate: new Date()
  };

  me:string;

  items = [
    { id: '1', event: 'Pasar Malam', desc: 'Awesome Food', loc: 'Tampines St 21', startDate: '13 Sep 2017', startTime: '2:30pm', endDate: '14 Sep 2017', endTime: '2:30pm', likes: '10'},
    { id: '1', event: 'Pasar Malam', desc: 'Awesome Food', loc: 'Tampines St 21', startDate: '13 Sep 2017', startTime: '2:30pm', endDate: '14 Sep 2017', endTime: '2:30pm', likes: '10'},
    { id: '1', event: 'Pasar Malam', desc: 'Awesome Food', loc: 'Tampines St 21', startDate: '13 Sep 2017', startTime: '2:30pm', endDate: '14 Sep 2017', endTime: '2:30pm', likes: '10'},
    { id: '1', event: 'Pasar Malam', desc: 'Awesome Food', loc: 'Tampines St 21', startDate: '13 Sep 2017', startTime: '2:30pm', endDate: '14 Sep 2017', endTime: '2:30pm', likes: '10'}
  ];

  itemSelected(item: string) {
    console.log("Selected Item", item);
    this.navCtrl.push(MyeventsPage);    
  }

  constructor(public navCtrl: NavController, private modalCtrl: ModalController, private alertCtrl: AlertController){ 
    this.me="myevents";
  }

  addEvent() {
    let modal = this.modalCtrl.create('EventModalPage', {selectedDay: this.selectedDay});
    modal.present();
    modal.onDidDismiss(data => {
      if (data) {
        let eventData = data;
 
        eventData.startTime = new Date(data.startTime);
        eventData.endTime = new Date(data.endTime);
 
        let events = this.eventSource;
        events.push(eventData);
        this.eventSource = [];
        setTimeout(() => {
          this.eventSource = events;
        });
      }
    });
  }
 
  onViewTitleChanged(title) {
    this.viewTitle = title;
  }
 
  onEventSelected(event) {
    let start = moment(event.startTime).format('LLLL');
    let end = moment(event.endTime).format('LLLL');
    
    let alert = this.alertCtrl.create({
      title: '' + event.title,
      subTitle: 'From: ' + start + '<br>To: ' + end,
      buttons: ['OK']
    })
    alert.present();
  }
 
  onTimeSelected(ev) {
    this.selectedDay = ev.selectedTime;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MePage');
  }

}
