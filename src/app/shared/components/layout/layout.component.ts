import {Component} from '@angular/core';

@Component({
  selector: 'sidebar',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  public isExpanded = false;

  constructor() {
  }

}
