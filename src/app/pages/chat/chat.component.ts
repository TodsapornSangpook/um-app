import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { io, Socket } from 'socket.io-client';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit {
  //@ts-ignore
  @ViewChild('chatbox') private myScrollContainer: ElementRef;
  private socket: Socket;
  message: string = '';
  messageList: Array<{ userID: string; message: string }> = [];
  userID: string;

  constructor() {
    const socketUrl = 'http://localhost:3000/chat-1';
    // const socketUrl = 'https://node-type-api.herokuapp.com'

    this.socket = io(socketUrl, {
      query: { room: 'r-1' },
    });
    this.userID = Math.random().toString();
  }

  ngOnInit(): void {
    this.socket.on('receive', (data) => this.receiveMessage(data));
  }

  receiveMessage(data: any) {
    this.messageList.push(data);

    setTimeout(() => {
      this.myScrollContainer.nativeElement.scrollTop =
        this.myScrollContainer.nativeElement.scrollHeight;
    }, 10);
  }

  sendMessage() {
    this.socket.emit('sendMessage', {
      userID: this.userID,
      message: this.message,
    });
    this.message = '';
  }
}
