import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gmp-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title = 'Angular GMP';
  
  constructor() { }

  ngOnInit() {
  }

}
