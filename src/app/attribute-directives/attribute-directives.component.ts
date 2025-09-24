import { Component } from '@angular/core';

@Component({
  selector: 'app-attribute-directives',
  standalone: false,
  templateUrl: './attribute-directives.component.html',
  styleUrl: './attribute-directives.component.css',
})
export class AttributeDirectivesComponent {
  highlightColor = 'yellow';
  isStyleApplied = false;
  isHighlight = false;
  isBold = false;
  isItalic = false;
  fontSize = 14;

  toggleHighlight() {
    this.isHighlight = !this.isHighlight;
  }
  highlight(color: string) {
    this.highlightColor = color;
  }

  toggleStyle() {
    this.isStyleApplied = !this.isStyleApplied;
  }
}
