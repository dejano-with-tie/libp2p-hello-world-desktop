import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {RestApiService} from "../rest-api.service";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {SharedFile} from "../model/model";

@Component({
  selector: 'app-share',
  templateUrl: './share-file.component.html',
  styleUrls: ['./share-file.component.scss']
})
export class ShareFileComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  public displayedColumns: string[] = ['path', 'size', 'createdAt', 'checksum'];
  public dataSource: MatTableDataSource<SharedFile>;

  constructor(restApi: RestApiService) {
    (async () => {
      const publishedFiles = await restApi.published().toPromise();
      console.log(publishedFiles);
      this.dataSource = new MatTableDataSource(publishedFiles);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })();
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

}
