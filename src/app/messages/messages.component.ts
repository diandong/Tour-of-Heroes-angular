import { Component, OnInit } from '@angular/core';
// 导入MessageService, 并注入构造函数。
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  // 该messageService属性必须是公共的，因为您将在模板中将其绑定
  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }

}
