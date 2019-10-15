import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectronicPressKitComponent } from './electronic-press-kit.component';

describe('ElectronicPressKitComponent', () => {
  let component: ElectronicPressKitComponent;
  let fixture: ComponentFixture<ElectronicPressKitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectronicPressKitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectronicPressKitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
