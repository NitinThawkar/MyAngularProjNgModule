import { Component, EventEmitter, Input,Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: false,
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent {
  @Input() channelName = 'Angular News';

  @Output() sendMessageEmitter = new EventEmitter();
  //sendMessageEmitter = new EventEmitter<string>(); // to specify the type of data being emitted


  // Method to send message to parent component

  sendMessageToParent(evnt: any) {
    console.log(evnt.target.value);
    this.sendMessageEmitter.emit(evnt.target.value);
  }
}
