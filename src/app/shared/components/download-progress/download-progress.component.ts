import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-download-progress',
  templateUrl: './download-progress.component.html',
  styleUrls: ['./download-progress.component.scss']
})
export class DownloadProgressComponent implements OnInit {
  @Input() value: number;

  constructor() { }

  ngOnInit(): void {
  }

}
