import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeTestExampleComponent } from './code-test-example.component';

describe('CodeTestExampleComponent', () => {
  let component: CodeTestExampleComponent;
  let fixture: ComponentFixture<CodeTestExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CodeTestExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodeTestExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
