import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http, Response } from '@angular/http';

import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  public gates: any[];
  public flights: any[];

  private baseUrl: string = 'http://13.59.69.242/api/';
  // private baseUrl: string = 'http://localhost:55031/api/';
  public isSelected: string = "1";
  
  constructor(
    public navCtrl: NavController,
    private http: Http,
    public notifications: NotificationService
  ) {

  }

  ngOnInit(){
    this.retrieveGates();
    this.retrieveFlights();
    // this.notifications.showNotification("Application Loaded");
  }

  retrieveGates() {
    return this.http.get( this.baseUrl + 'GateService/GetAllGates')
      .subscribe((res:Response)=> this.gates= res.json());   
  }

  retrieveFlights() {
    return this.http.get( this.baseUrl + 'FlightService/GetAllFlights')
      .subscribe((res:Response)=> this.flights= res.json());
  }

}
