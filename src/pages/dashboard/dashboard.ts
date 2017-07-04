import { Component, Input } from '@angular/core';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html'
})
export class DashboardPage {

  @Input() gates: any[];
  @Input() flights: any[];
  
  constructor(
    public notifications: NotificationService
  ) {

  }

  ngOnInit(){
    this.notifications.showNotification("Application Loaded");
  }

  returnCount(filterCondition:string,filterValue:string):number{
    if(this.flights){
      return this.flights.filter((item)=>item[filterCondition]==filterValue).length;
    }else{
      return 0;
    }

  }

}
