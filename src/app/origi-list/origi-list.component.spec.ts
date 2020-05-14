import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrigiListComponent } from './origi-list.component';

describe('OrigiListComponent', () => {
  let component: OrigiListComponent;
  let fixture: ComponentFixture<OrigiListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrigiListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrigiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
