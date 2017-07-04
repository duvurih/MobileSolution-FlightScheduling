import { Component, OnInit, Input } from '@angular/core';

import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'page-flight-schedule',
  templateUrl: 'flightschedule.html'
})
export class FlightSchedulePage implements OnInit {

  @Input() gates: any[];
  @Input() flights: any[];

  flightsOriginal:any[];

  public isSelected: string = "1";
  
  constructor(
    public notifications: NotificationService
  ) {

  }

  ngOnInit(){
    // this.notifications.showNotification("Application Loaded");
    this.flightsOriginal=this.flights;
  }

  flightStatusChange(flight){
    flight.CancellationStatus=!flight.CancellationStatus;
    this.notifications.showNotification("Flight Status Changed...");
  }

  getItems(ev: any) {
    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.flights = this.flights.filter((item) => {
        return (item["FlightName"].toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}
