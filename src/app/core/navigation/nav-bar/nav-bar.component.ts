import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { map, Observable, shareReplay } from 'rxjs';
import { BREAKPOINTS } from 'src/constants';



@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  @Output() toggleSnav = new EventEmitter();

  isHandSet?: boolean;

  constructor(
    private breakpointObserver: BreakpointObserver,

  ) { }

  ngOnInit(): void {
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(BREAKPOINTS.mobile)
    .pipe(
      map(result => {
        this.isHandSet = result.matches;
        return result.matches;
      }),
      shareReplay()
    );

  toggleSidenav() {
    this.toggleSnav.emit();
  }

}
