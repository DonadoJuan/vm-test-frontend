import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteContComponent } from './quote-cont.component';

describe('QuoteContComponent', () => {
  let component: QuoteContComponent;
  let fixture: ComponentFixture<QuoteContComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuoteContComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteContComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
