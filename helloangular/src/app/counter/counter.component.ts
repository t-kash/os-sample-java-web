import { Component, OnInit } from '@angular/core';
import { Count } from './count';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css', '../common/common.css']
})
export class CounterComponent implements OnInit {

  count: Count = {
    value: 1
  }

  constructor() { }

  ngOnInit(): void {
  }

  addCount(): void {
    this.count.value = this.count.value + 1;
  }
}
