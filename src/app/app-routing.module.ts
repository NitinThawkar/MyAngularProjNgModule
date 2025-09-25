import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TypesOfDataBindingComponent } from './types-of-data-binding/types-of-data-binding.component';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { AttributeDirectivesComponent } from './attribute-directives/attribute-directives.component';
import { ParentComponent } from './passing-data-between-components/parent.component';
import { TemplateReferenceVariableAndViewchildComponent } from './template-reference-variable-and-viewchild/template-reference-variable-and-viewchild.component';
import { CodeTestExampleComponent } from './code-test-example/code-test-example.component';
import { SharedServiceExampleComponent } from './shared-service-example/shared-service-example/shared-service-example.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'databinding',
    component: TypesOfDataBindingComponent,
  },
  {
    path: 'structural-directives',
    component: StructuralDirectivesComponent,
  },
  {
    path: 'attribute-directives',
    component: AttributeDirectivesComponent,
  },
  {
    path: 'passing-data-between-components',
    component: ParentComponent,
  },
  {
    path: 'template-reference-variable-and-viewchild',
    component: TemplateReferenceVariableAndViewchildComponent,
  },
    {
    path: 'shared-service-example',
    component: SharedServiceExampleComponent,
  },
  {
    path: 'code-test-example',
    component: CodeTestExampleComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
