import { Component,ViewChild } from '@angular/core';

@Component({
  selector: 'app-template-reference-variable-and-viewchild',
  standalone: false,
  templateUrl: './template-reference-variable-and-viewchild.component.html',
  styleUrl: './template-reference-variable-and-viewchild.component.css',
})
export class TemplateReferenceVariableAndViewchildComponent {

@ViewChild('myinputElement', {static: true}) myCustomInput:any;

ngOnInit() {
this.myCustomInput.nativeElement. focus();

}

  sendInput(inputElement: any, paragraph: any) {
    console.log(inputElement);
    console.log(inputElement.value);
    console.log(paragraph);
    console.log(paragraph.innerText);
    //paragraph.innerText = inputElement.value;
  }
}
