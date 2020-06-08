import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComponentListsComponent } from './my-component-lists.component';

describe('MyComponentListsComponent', () => {
  let component: MyComponentListsComponent;
  let fixture: ComponentFixture<MyComponentListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComponentListsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComponentListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
