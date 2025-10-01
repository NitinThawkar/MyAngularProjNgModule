import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: false,
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent {
  @Input()
  channelName = 'Angular News';

  // 2. decaring an EventEmitter to send data to parent component
  @Output()
  sendMessageEmitter = new EventEmitter();
  //sendMessageEmitter = new EventEmitter<string>(); // to specify the type of data being emitted

  // 2.1 Method to send message to parent component
  sendMessageToParent(evnt: any) {
    console.log(evnt.target.value);
    // Emit the message to the parent component
    this.sendMessageEmitter.emit(evnt.target.value);
  }
}
