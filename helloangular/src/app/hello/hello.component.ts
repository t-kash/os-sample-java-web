import { Component, OnInit } from '@angular/core';
import { Someone } from '../someone';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css', '../common/common.css']
})
export class HelloComponent implements OnInit {

  someone: Someone = {
    id: 1,
    name: 'Angular-San'
  };

  constructor() { }

  ngOnInit(): void {
    this.someone.id = 2;
    this.someone.name = 'Who r u?';
  }

}
