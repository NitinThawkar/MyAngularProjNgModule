import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypesOfDataBindingComponent } from './types-of-data-binding.component';

describe('TypesOfDataBindingComponent', () => {
  let component: TypesOfDataBindingComponent;
  let fixture: ComponentFixture<TypesOfDataBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TypesOfDataBindingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypesOfDataBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
