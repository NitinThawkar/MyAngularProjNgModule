import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveModelDrivenFormsComponent } from './reactive-model-driven-forms.component';

describe('ReactiveModelDrivenFormsComponent', () => {
  let component: ReactiveModelDrivenFormsComponent;
  let fixture: ComponentFixture<ReactiveModelDrivenFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReactiveModelDrivenFormsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveModelDrivenFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
