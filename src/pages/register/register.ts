import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from "../../models/user";
import { LoginPage } from "../login/login";
import { HomePage } from "../home/home";
// import { TabsPage} from 'tabs/tabs/';
import { AngularFireAuth } from "angularfire2/auth";
import { ToastController, ToastOptions } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  user = {} as User;
  toastOptions: ToastOptions;
  toastMessage: string;

  constructor(private toast: ToastController, private afAuth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  async register(user: User){
    try{
      const result = await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
      console.log(result);

      this.navCtrl.push(HomePage, {}, {animate: false});
    }
    catch(e){
      console.error(e);
    }

  }

  back(){
    this.navCtrl.push(LoginPage, {}, {animate: false});
  }

  showToast(){
    this.toastOptions = {
      message: this.toastMessage,
      duration: 3000
    }          
    this.toast.create(this.toastOptions).present();
  }


}
