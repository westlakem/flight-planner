import { Injectable } from '@angular/core';
import { ElectronService } from './electron.service';

const { join } = require("path")

@Injectable({
  providedIn: 'root'
})
export class AirplaneService extends ElectronService {

  fileLocation = 'C:/Program Files (x86)/Lockheed Martin/Prepar3D v2/'
  airplanesLocation = 'SimObjects/Airplanes/'
  airplanes = [];


  constructor() {
    super();
    // this.init();
  }

  init() {
    const dirs = this.fs.readdirSync(this.fileLocation + this.airplanesLocation).filter(f => this.fs.statSync(join(this.fileLocation + this.airplanesLocation, f)).isDirectory())
    dirs.forEach(directory => {
      let fc = null;
      if (this.fs.existsSync(this.fileLocation + this.airplanesLocation + directory + '/aircraft.cfg')) {
        fc = this.fs.readFileSync(this.fileLocation + this.airplanesLocation + directory + '/aircraft.cfg', 'utf-8').split('\n')
      } else if (this.fs.existsSync(this.fileLocation + this.airplanesLocation + directory + '/Aircraft.cfg')) {
        fc = this.fs.readFileSync(this.fileLocation + this.airplanesLocation + directory + '/Aircraft.cfg', 'utf-8').split('\n')
      }
      if (fc) { this.convertConfigToJson(fc); }

    });
  }

  private convertConfigToJson(data: Array<string>) {
    const jsonData = {};
    let lineNum = 0
    for (lineNum; lineNum < data.length; lineNum++) {
      const line = data[lineNum];
      if (line.match(/^\[/)) {
        const key = line.replace('[', '').replace(']', '');
        jsonData[key] = {}
        lineNum++;
        while (data[lineNum] && data[lineNum].match(/\=+/)) {
          const kvPair: Array<string> = data[lineNum].split('=');
          const k = kvPair[0].trim();
          jsonData[key][k] = kvPair[1].trim();
          lineNum++;
        }
      }
    }
    return jsonData;
  }

}
