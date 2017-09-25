import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MePage } from './me';
// import * as moment from 'moment';

@NgModule({
  declarations: [
    MePage,
  ],
  imports: [
    IonicPageModule.forChild(MePage),
  ],
})
export class MePageModule {}
