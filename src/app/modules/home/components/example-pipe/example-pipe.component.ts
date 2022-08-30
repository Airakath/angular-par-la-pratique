import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/interfaces/user.interface';

@Component({
  selector: 'example-pipe',
  templateUrl: './example-pipe.component.html',
  styleUrls: ['./example-pipe.component.scss']
})
export class ExamplePipeComponent implements OnInit {

  user?: User; 
 
  constructor() { }

  ngOnInit(): void {
    this.user = {
      firstname: 'nicolas',
      lastname: 'bernin',
      birthday: new Date(),
      phoneNumber: '0612345678'
    }
  }

}
