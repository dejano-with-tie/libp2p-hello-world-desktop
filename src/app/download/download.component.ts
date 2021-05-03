import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
import {RestApiService} from "../rest-api.service";
import {SocketService} from "../socket.service";
import {DownloadState, DownloadStatus} from "../model/model";

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss']
})
export class DownloadComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  public displayedColumns: string[] = ['path', 'progress', 'size', 'status', 'actions'];
  public dataSource: MatTableDataSource<any>;
  public Statuses = DownloadStatus;
  private data: any[];

  constructor(
    private restApi: RestApiService,
    private socketService: SocketService,
    private changeDetectorRefs: ChangeDetectorRef
  ) {
    this.refreshTable();

    this.socketService._config.download.observable.subscribe((updates) => {
      if (!this.data) {
        return;
      }
      updates.forEach(update => {
        const row = this.data.find(d => d.id === update.id);
        if (row) {
          row.progress = update.percentage;
          row.status = update.status;
        }
      });
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnInit(): void {
  }

  rowClicked(row) {
    console.log(row);
  }

  async pause(row) {
    const state: DownloadState = await this.restApi.action(row.id, 'PAUSE').toPromise();
    row.status = state.status;
    row.progress = state.percentage;
  }

  async delete(row) {
    try {
      await this.restApi.delete(row.id, true).toPromise();
      this.refreshTable();
    } catch (e) {
      // TODO: Failed to delete
    }
  }

  async resume(row) {
    const state: DownloadState = await this.restApi.action(row.id, 'RESUME').toPromise();
    row.status = state.status;
    row.progress = state.percentage;
  }

  replay(row) {
    console.log('replay');
  }

  private refreshTable() {
    this.restApi.getDownloads().subscribe(downloads => {
      downloads.forEach(download => {
        if (download.status == DownloadStatus.IN_PROGRESS) {
          download.progress = null;
        }
      });
      this.data = downloads;
      this.dataSource = new MatTableDataSource(this.data);
      this.changeDetectorRefs.detectChanges();
      this.dataSource.sort = this.sort;
    });
  }
}
