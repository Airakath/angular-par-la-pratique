import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  @Output() toggleSnav = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  toggleSidenav() {
    this.toggleSnav.emit();
  }

}
