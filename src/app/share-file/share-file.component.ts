import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {RestApiService} from "../rest-api.service";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {SharedFile} from "../model/model";

export interface UploadElement {
  path: string;
  name: string;
  date: Date;
  checksum: string;
}

const ELEMENT_DATA: UploadElement[] = [
  {path: "/path/to/file", name: 'Hydrogen.txt', date: new Date(), checksum: 'H'},
  {path: "/path/to/file", name: 'Helium.txt', date: new Date(), checksum: 'He'},
  {path: "/path/to/file", name: 'Lithium.txt', date: new Date(), checksum: 'Li'},
  {path: "/path/to/file", name: 'Beryllium.txt', date: new Date(), checksum: 'Be'},
  {path: "/path/to/file", name: 'Boron.txt', date: new Date(), checksum: 'B'},
  {path: "/path/to/file", name: 'Carbon.txt', date: new Date(), checksum: 'C'},
  {path: "/path/to/file", name: 'Nitrogen.txt', date: new Date(), checksum: 'N'},
  {path: "/path/to/file", name: 'Oxygen.txt', date: new Date(), checksum: 'O'},
  {path: "/path/to/file", name: 'Fluorine.txt', date: new Date(), checksum: 'F'},
  {path: "/path/to/file", name: 'Neon.txt', date: new Date(), checksum: 'Ne'},
];

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
