import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudContComponent } from './crud-cont.component';

describe('CrudContComponent', () => {
  let component: CrudContComponent;
  let fixture: ComponentFixture<CrudContComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudContComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudContComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
