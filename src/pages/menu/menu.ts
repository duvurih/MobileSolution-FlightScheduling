import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})
export class MenuPage {

  
  constructor(private view: ViewController, private navParams: NavParams) {}

  ionViewWillLoad(){
    const myMenu = this.navParams.get('data');
  }
  closeModal(){
    const returnData = {
      clickedMenu: 'Menu1'
    };
    this.view.dismiss(returnData);
  }
}
