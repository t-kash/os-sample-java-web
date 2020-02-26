import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css', '../common/common.css']
})
export class MessagesComponent implements OnInit {

  constructor(private _messageService: MessageService) { }

  ngOnInit(): void {
  }

  get messageService() {
    return this._messageService;
  }
}
