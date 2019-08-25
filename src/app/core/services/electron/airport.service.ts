import { Injectable } from '@angular/core';
import { ElectronService } from './electron.service';
import { Airport } from '../../interfaces/airport';
const csv = require('csvtojson')
var parser = require('fast-xml-parser');

@Injectable({
  providedIn: 'root'
})
export class AirportService extends ElectronService {

  fileLocation = 'C:/Program Files (x86)/Lockheed Martin/Prepar3D v2/'
  airports: Array<Airport> = [];

  constructor() {
    super();
    // this.init();
  }

  async init() {
    const xmlData = this.fs.readFileSync(this.fileLocation + 'runways.xml', 'utf-8');
    if (parser.validate(xmlData) === true) { //optional (it'll return an object in case it's not valid)
      var jsonObj = parser.parse(xmlData, { ignoreAttributes: false, attributeNamePrefix: '' });
      this.airports = jsonObj.data.ICAO
    } else {
      console.log('error');
    }
  }

  async getAirportList() {
    return ['a', 'b']
  }
}
