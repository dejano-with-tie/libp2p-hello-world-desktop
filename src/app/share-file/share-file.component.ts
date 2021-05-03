import {Component, OnInit, ViewChild} from '@angular/core';
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
export class ShareFileComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  public displayedColumns: string[] = ['path', 'advertisedPath', 'size', 'checksum'];
  public dataSource: MatTableDataSource<SharedFile>;

  constructor(private restApi: RestApiService) {
    (async () => {
      const publishedFiles = await restApi.shared().toPromise();
      this.dataSource = new MatTableDataSource(publishedFiles);
      this.dataSource.sort = this.sort;
    })();
  }

  iconByFileType(mime: string) {
    if (mime && mime.startsWith('image/')) {
      return 'image';
    }

    return 'article';
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
