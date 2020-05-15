import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfstoreComponent } from './afstore.component';

describe('AfstoreComponent', () => {
  let component: AfstoreComponent;
  let fixture: ComponentFixture<AfstoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfstoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfstoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
