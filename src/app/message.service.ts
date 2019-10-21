import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: string[] = [];

  constructor() { }
  // 该服务公开其缓存的messages方法有两种：
  // 一种add()是向缓存中的消息发送，另一种是clear()向缓存中的消息发送。

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }
}
