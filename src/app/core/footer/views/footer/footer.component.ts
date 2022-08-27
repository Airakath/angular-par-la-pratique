import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'footer-bar',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  domaineName: string = 'domainName.fr';
  currentDate: Date = new Date();
  currentYear?: number;

  constructor() { }

  ngOnInit(): void {
    this.currentYear = this.currentDate.getFullYear();
  }

}
