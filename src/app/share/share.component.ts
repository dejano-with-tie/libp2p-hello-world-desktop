import {Component, OnInit} from '@angular/core';

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
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss']
})
export class ShareComponent implements OnInit {
  public displayedColumns: string[] = ['path', 'name', 'date', 'checksum'];
  public dataSource = ELEMENT_DATA;

  constructor() {
  }

  ngOnInit(): void {
  }

}
