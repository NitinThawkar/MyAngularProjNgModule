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
import { FirstComponent } from './shared-service-example/first/first.component';
import { SecondComponent } from './shared-service-example/second/second.component';
import { TemplateReferenceVariableAndViewchildComponent } from './template-reference-variable-and-viewchild/template-reference-variable-and-viewchild.component';
import { HeaderNavBarComponent } from './header-nav-bar/header-nav-bar.component';
import { SharedServiceExampleComponent } from './shared-service-example/shared-service-example/shared-service-example.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TypesOfDataBindingComponent,
    StructuralDirectivesComponent,
    CodeTestExampleComponent,
    AttributeDirectivesComponent,
    ParentComponent,
    ChildComponent,
    FirstComponent,
    SecondComponent,
    TemplateReferenceVariableAndViewchildComponent,
    HeaderNavBarComponent,
    SharedServiceExampleComponent
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
