import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpWebCommunicationComponent } from './http-web-communication.component';

describe('HttpWebCommunicationComponent', () => {
  let component: HttpWebCommunicationComponent;
  let fixture: ComponentFixture<HttpWebCommunicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HttpWebCommunicationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HttpWebCommunicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
