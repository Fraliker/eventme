import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-add-event',
  templateUrl: 'add-event.html',
})
export class AddEventPage {

  public event = {
    month: '1990-02-19',
    timeStarts: '07:43',
    timeEnds: '1990-02-20'
  }

  constructor(public popoverCtrl: PopoverController, public navCtrl: NavController, public navParams: NavParams) {
  }

  presentPopover() {
    let popover = this.popoverCtrl.create(HomePage);
    popover.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddEventPage');
  }

}
