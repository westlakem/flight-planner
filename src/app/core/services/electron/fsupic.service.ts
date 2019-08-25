import { Injectable } from '@angular/core';
const fsuipc = require('node-loader!../../fsuipc/fsuipc.node')

@Injectable({
  providedIn: 'root'
})
export class FsupicService {

  constructor() {

  }

  connect() {
    fsuipc.FSUIPC_Open('SIM_ANY')
  }

  disconnect() {
    fsuipc.FSUIPC_Close();
  }
}
