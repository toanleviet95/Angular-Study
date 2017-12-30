import { IpService } from './ip.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ip',
  template: 'Example Http service: <h3>{{ ip }}</h3>'
})

export class IpComponent implements OnInit {
  ip: String;
  constructor(private ipService: IpService) {}

  ngOnInit(): void{
    this.ipService.getIp().then(ip => this.ip = ip).catch(err => console.log(err));
  }
}
