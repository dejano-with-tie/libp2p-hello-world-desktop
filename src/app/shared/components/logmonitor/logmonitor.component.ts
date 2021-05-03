import {Component} from '@angular/core';
import {LogMessage as NgxLogMessage} from "ngx-log-monitor/lib/models/log-message.model";
import {timer} from "rxjs";
import {map, take} from "rxjs/operators";
import {MatBottomSheet, MatBottomSheetConfig, MatBottomSheetRef} from "@angular/material/bottom-sheet";

@Component({
  selector: 'app-logmonitor',
  templateUrl: './logmonitor.component.html',
  styleUrls: ['./logmonitor.component.scss']
})
export class LogmonitorComponent {

  private open = false;

  constructor(private _bottomSheet: MatBottomSheet) {
  }

  openBottomSheet(): void {
    const options = new MatBottomSheetConfig();
    options.hasBackdrop = false;
    if (this.open) {
      this._bottomSheet.dismiss();
      this.open = false;
    } else {
      this._bottomSheet.open(BottomSheetOverviewExampleSheet, options).afterOpened().subscribe(() => {
        this.open = true;
      });
    }
  }

}

@Component({
  selector: 'bottom-sheet-overview-example-sheet',
  templateUrl: 'logmonitor-sheet.component.html',
})
export class BottomSheetOverviewExampleSheet {

  restoredLogs: NgxLogMessage[] = [
    {message: 'A simple restored log message'},
  ];

  logs: NgxLogMessage[] = [
    {message: 'A simple log message'},
    {message: 'A success message', type: 'SUCCESS'},
    {message: 'A warning message', type: 'WARN'},
    {message: 'An error message', type: 'ERR'},
    {message: 'An info message', type: 'INFO'},
  ];

  logStream$ = timer(0, 1000).pipe(
    take(this.logs.length),
    map(i => this.logs[i])
  );

  constructor(private _bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleSheet>) {
  }

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
