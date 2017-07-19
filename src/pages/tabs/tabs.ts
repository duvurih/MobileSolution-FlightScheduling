import { Component } from '@angular/core';
import { Modal, ModalOptions, NavController, ModalController } from 'ionic-angular';

import { HomePage } from '../home/home';
import { SettingsPage } from '../settings/settings';
import { MenuPage } from '../menu/menu';

@Component({
  selector: 'tabs-home',
  templateUrl: 'tabs.html'
})
export class TabsPage {


  tab1Root = HomePage;
  // tab2Root = MenuPage;
  tab3Root = SettingsPage;

  constructor(
    public navCtrl: NavController,
    public modalController: ModalController
  ) {

  }

  openModal() {
    //modal options
    const myModalOptions: ModalOptions={
      showBackdrop: true,
      enableBackdropDismiss: false,
      cssClass: '$modal-inset-min-height-small'
    };    

    // passing data 
    const myData=[
      {
        menuName: "Menu1",
        menuDescription: "View Flights",
      },
      {
        menuName: "Menu2",
        menuDescription: "Re-Schedule Flights",
      },
      {
        menuName: "Menu3",
        menuDescription: "Cancelled Flights",
      }
    ];

    const popupModal : Modal = this.modalController.create(MenuPage,{data: myData}, myModalOptions);
    popupModal.present();
    //retured data
    popupModal.onDidDismiss((data)=>{
      console.log('I have dismissed');
      console.log(data);
    })

    popupModal.onWillDismiss((data)=>{
      console.log('I am about to dismissed');
      console.log(data);
    })
  }
}