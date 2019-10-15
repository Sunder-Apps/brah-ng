import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiseOfLocusComponent } from './rise-of-locus.component';

describe('RiseOfLocusComponent', () => {
  let component: RiseOfLocusComponent;
  let fixture: ComponentFixture<RiseOfLocusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiseOfLocusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiseOfLocusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
