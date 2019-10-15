import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterTheMothershipComponent } from './enter-the-mothership.component';

describe('EnterTheMothershipComponent', () => {
  let component: EnterTheMothershipComponent;
  let fixture: ComponentFixture<EnterTheMothershipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterTheMothershipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterTheMothershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
