import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedServiceExampleComponent } from './shared-service-example.component';

describe('SharedServiceExampleComponent', () => {
  let component: SharedServiceExampleComponent;
  let fixture: ComponentFixture<SharedServiceExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SharedServiceExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharedServiceExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
