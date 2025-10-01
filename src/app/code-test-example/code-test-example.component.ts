import { Component } from '@angular/core';

@Component({
  selector: 'app-code-test-example',
  standalone: false,
  templateUrl: './code-test-example.component.html',
  styleUrl: './code-test-example.component.css'
})
export class CodeTestExampleComponent {
title = 'MyAngularProjNgModule';
  myname :string ="Nitin T";
  titleCase : string = "This is Title Case";

  isVisible : boolean = true;
  txtValue : string = "Hello";

  helloAlert(){
    alert(this.txtValue);
  }
}
