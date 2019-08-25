import { Component, OnInit } from '@angular/core';
import { AirportService, AirplaneService } from '../core/services';
import { FsupicService } from '../core/services/electron/fsupic.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  airports = [];
  airplanes = [];

  constructor(private airportService: AirportService, private airplaneService: AirplaneService, private fsuipcService: FsupicService) { }

  ngOnInit() {
    this.airports = this.airportService.airports;
    this.airplanes = this.airplaneService.airplanes;
    this.fsuipcService.connect();
  }

}
