import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeAheadExamplePageComponent } from './type-ahead-example-page.component';

describe('TypeAheadExamplePageComponent', () => {
  let component: TypeAheadExamplePageComponent;
  let fixture: ComponentFixture<TypeAheadExamplePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeAheadExamplePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeAheadExamplePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
