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
import { RouteExampleComponent } from './route-example/route-example.component';
import { ProductComponent } from './route-product-pages/product/product.component';
import { AngularFormsComponent } from './angular-forms/angular-forms.component';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';
import { ReactiveModelDrivenFormsComponent } from './reactive-model-driven-forms/reactive-model-driven-forms.component';
import { CommonPagesComponent } from './common-pages/common-pages.component';
import { PipesComponent } from './pipes/pipes.component';
import { HttpWebCommunicationComponent } from './http-web-communication/http-web-communication.component';
import { CustomDirectivesComponent } from './custom-directives/custom-directives.component';
import { PromisesComponent } from './promises/promises.component';
import { ObservablesComponent } from './observables/observables.component';
import { ObservableVsPromiseComponent } from './observable-vs-promise/observable-vs-promise.component';
import { ObservableVsSubjectComponent } from './observable-vs-subject/observable-vs-subject.component';
import { SubjectVsReplaySubjectVsBehaviorSubjectComponent } from './subject-vs-replay-subject-vs-behavior-subject/subject-vs-replay-subject-vs-behavior-subject.component';
import { InterceptorTestComponent } from './interceptor-test/interceptor-test.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'databinding', component: TypesOfDataBindingComponent },
  { path: 'structural-directives', component: StructuralDirectivesComponent },
  { path: 'attribute-directives', component: AttributeDirectivesComponent },
  { path: 'passing-data-between-components', component: ParentComponent },
  { path: 'template-reference-variable-and-viewchild', component: TemplateReferenceVariableAndViewchildComponent },
  { path: 'shared-service-example', component: SharedServiceExampleComponent },
  { path: 'route-example', component: RouteExampleComponent },
  { path: 'route-example/product/:id', component: ProductComponent },
  { path: 'route-example/product/apple', component: ProductComponent },
  { path: 'route-example/product/orange', component: ProductComponent },
  { path: 'route-example/product/banana', component: ProductComponent },
  { path: 'angular-forms', component: AngularFormsComponent },
  { path: 'template-driven', component: TemplateDrivenFormsComponent },
  { path: 'model-driven', component: ReactiveModelDrivenFormsComponent },
  { path: 'common-pages', component: CommonPagesComponent },
  { path: 'pipes', component: PipesComponent },
  { path: 'web-communication', component: HttpWebCommunicationComponent },
  { path: 'custom-directives', component: CustomDirectivesComponent },
  { path: 'promise', component: PromisesComponent },
  { path: 'observables', component: ObservablesComponent },
  { path: 'observables-vs-promises', component: ObservableVsPromiseComponent },
  { path: 'observables-vs-subjects', component: ObservableVsSubjectComponent },
  { path: 'subject-vs-replay-subject-vs-behavior-subject', component: SubjectVsReplaySubjectVsBehaviorSubjectComponent },
  { path: 'interceptor-test', component: InterceptorTestComponent },
  { path: 'code-test-example', component: CodeTestExampleComponent }
]
;
//route-example
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
