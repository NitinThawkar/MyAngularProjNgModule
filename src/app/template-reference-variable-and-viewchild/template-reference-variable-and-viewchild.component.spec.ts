import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateReferenceVariableAndViewchildComponent } from './template-reference-variable-and-viewchild.component';

describe('TemplateReferenceVariableAndViewchildComponent', () => {
  let component: TemplateReferenceVariableAndViewchildComponent;
  let fixture: ComponentFixture<TemplateReferenceVariableAndViewchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TemplateReferenceVariableAndViewchildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateReferenceVariableAndViewchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
