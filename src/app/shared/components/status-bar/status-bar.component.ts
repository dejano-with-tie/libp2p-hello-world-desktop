import { Component, OnInit } from '@angular/core';
import {SocketService} from "../../../socket.service";

@Component({
  selector: 'app-status-bar',
  templateUrl: './status-bar.component.html',
  styleUrls: ['./status-bar.component.scss']
})
export class StatusBarComponent implements OnInit {

  public status = 'offline';
  public id = '';
  public connections = 0;
  public nat = '';
  constructor(
    private socketService: SocketService
  ) { }

  ngOnInit(): void {
    this.socketService._config.context.observable.subscribe((data) => {
      data.forEach(update => {
        if (update.status) {
          this.status = update.status;
        }
        if (update.id) {
          this.id = update.id;
        }
        if (update.connections != undefined) {
          this.connections = update.connections;
        }
        if (update.nat) {
          this.nat = update.nat;
        }
      });
    });
  }

}
