import {Injectable} from '@angular/core';
import {NgProgress} from "ngx-progressbar";
import {map} from "rxjs/operators";
import {Socket} from "ngx-socket-io";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  public _config = {
    download: {
      namespace: 'download:progress',
      subject: new BehaviorSubject([]),
      observable: undefined
    },
    searchDetails: {
      namespace: 'search:details',
      subject: new BehaviorSubject([]),
      observable: undefined
    },
    context: {
      namespace: 'context',
      subject: new BehaviorSubject([]),
      observable: undefined
    },
  };

  constructor(private socket: Socket, private spinnerService: NgProgress) {
    this.socket.on(this._config.searchDetails.namespace, (data: any) => {
      data.done ? spinnerService.ref().complete() : spinnerService.ref().start();
    });

    for (const key in this._config) {
      this._config[key].observable = this._config[key].subject.asObservable();
      const namespace = this._config[key].namespace;
      const subject = this._config[key].subject;

      this.socket.fromEvent(namespace)
        .pipe(map((data: any) => {
          console.log(data);
          // ignore done
          if (data.done) {
            return [];
          }
          return [...data.content];
        }))
        .subscribe(data => subject.next(data));
    }
  }

  public searchDetails(query: string): void {
    this.socket.emit(this._config.searchDetails.namespace, {query});
  }

}
