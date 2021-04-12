import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
import {RestApiService} from "../rest-api.service";

const SOURCE = [
  {path: '...', progress: 23, size: 10232, status: 'downloading'},
  {path: '...', progress: 73, size: 10232, status: 'downloading'},
  {path: '...', progress: 100, size: 10232, status: 'completed'},
  {path: '...', progress: 0, size: 10232, status: 'starting'},
];

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

  constructor(restApi: RestApiService) {
    const publishedFiles = SOURCE;
    console.log(publishedFiles);
    this.dataSource = new MatTableDataSource(publishedFiles);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngAfterViewInit() {

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

  pause(row) {
    console.log('pause');
  }

  stop(row) {
    console.log('stop');
  }

  continue(row) {
    console.log('continue');
  }
}
