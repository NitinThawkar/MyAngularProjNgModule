import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  standalone: false,
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  channelNameInParent = 'nitin  News';
  messageFromChild = '';

  // 4. Method to receive message from child component
  reciveMsgFrmChild(msg: any) {
    console.log("Message received from child component: " + msg);
    //this.channelNameInParent = msg;
    this.messageFromChild = msg;
  }
} 

