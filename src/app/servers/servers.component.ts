import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server has been created';
  serverName = 'dffffffff';
  constructor() { }
  ngOnInit(): void {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 5000);
  }
  onCreateServer() {
    this.serverCreationStatus = "server was created!";
  }
  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
