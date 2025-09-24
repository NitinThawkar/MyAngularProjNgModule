import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TypesOfDataBindingComponent } from './types-of-data-binding/types-of-data-binding.component';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { CodeTestExampleComponent } from './code-test-example/code-test-example.component';
import { AttributeDirectivesComponent } from './attribute-directives/attribute-directives.component';
import { ParentComponent } from './passing-data-between-components/parent.component';
import { ChildComponent } from './passing-data-between-components/child.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TypesOfDataBindingComponent,
    StructuralDirectivesComponent,
    CodeTestExampleComponent,
    AttributeDirectivesComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
