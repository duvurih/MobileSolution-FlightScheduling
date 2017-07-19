import { Component, Input } from '@angular/core';

@Component({
  selector: 'flight-status-slide',
  templateUrl: 'flightstatusslide.html'
})
export class FlightStatusSlide {

  @Input() flights: any[];
 
  constructor() {}

}
