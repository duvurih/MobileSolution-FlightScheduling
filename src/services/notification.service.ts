import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';

@Injectable()
export class NotificationService {

  constructor(
    public toastCtrl: ToastController
  ) {}

  showNotification(notificationMessage: string) {
    let toast = this.toastCtrl.create({
      message: notificationMessage,
      duration: 3000
    });
    toast.present();
  }

}
