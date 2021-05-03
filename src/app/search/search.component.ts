import {Component, OnInit, ViewChild} from '@angular/core';
import {RestApiService} from "../rest-api.service";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
import {FileProvider, SharedFile} from "../model/model";
import {Router} from "@angular/router";
import {SocketService} from "../socket.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public searchValue: string;
  public searchResults: SharedFile[] = [];
  public searchProviders: FileProvider[] = [];
  @ViewChild(MatSort) sort: MatSort;
  public displayedColumns: string[] = ['id', 'path', 'size', 'connection', 'actions'];
  public dataSource: MatTableDataSource<any>;

  constructor(
    private restApi: RestApiService,
    private socketService: SocketService,
    private downloadEventService: SocketService,
    private router: Router
  ) {
    this.dataSource = new MatTableDataSource(this.searchResults);
    this.dataSource.sort = this.sort;
    socketService._config.searchDetails.observable.subscribe((data) => {
      // means it's providers, don't add to search results
      if (data.length > 0 && data[0].multiaddrs) {
        return;
      }
      this.searchResults = [...this.searchResults, ...data];
    });

    // socketService.on().subscribe((data) => {
    //   this.searchResults = [...this.searchResults, ...data];
    //   console.log(this.searchResults);
    // });
  }

  ngOnInit(): void {
  }

  public onEnter(): void {
    this.searchResults = [];
    // this.socketService.searchProviders(this.searchValue);
    this.socketService.searchDetails(this.searchValue);
  }

  public searchResultsFmt(): string {
    return `(Peers: ${this.searchResults.length || '-'}, Total Files: ${this.searchResults.length || '-'})`;
  }

  public download(row: SharedFile): void {
    this.restApi.addDownload(row).subscribe(() => {
      this.router.navigate(['/', 'download']).then(() => {
      });
    });
    console.log(row);
  }

  public isDirectConnection(row: SharedFile) {
    return !row.provider.multiaddrs.find(addr => addr.indexOf('p2p-circuit') > -1);
  }

  public countPeers(searchResults: SharedFile[]) {
    return new Set(searchResults.map(r => r.provider.id.id)).size;
  }
}
