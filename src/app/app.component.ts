import { Component, ViewChild } from '@angular/core';
import { NavBarComponent } from './core/navigation/nav-bar/nav-bar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  //@ViewChild(NavBarComponent) navBarComponent: NavBarComponent;
  
  title = 'angular-par-la-pratique';

  constructor() { }

  ngOnInit(): void {

  }

  public toggleSidenav(sidenav: any) {
    sidenav.toggle();
  }

}
