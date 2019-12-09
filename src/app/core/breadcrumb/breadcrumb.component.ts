import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gmp-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  @Input() currentPage: any = { url: '', title: ''};

  constructor() { }

  ngOnInit() {
  }

}
