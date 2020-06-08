import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularDefaultPageComponent } from './angular-default-page.component';

describe('AngularDefaultPageComponent', () => {
  let component: AngularDefaultPageComponent;
  let fixture: ComponentFixture<AngularDefaultPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularDefaultPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularDefaultPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
