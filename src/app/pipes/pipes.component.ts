import { Component } from '@angular/core';
@Component({
  selector: 'app-pipes',
  standalone: false,
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {
  amount = 223.4567;
  channelName = "WebTechTalk";
  mark = 0.8945;
  today = new Date();
  name = "Surender Neelakantan";
}
