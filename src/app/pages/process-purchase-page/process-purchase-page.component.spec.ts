import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessPurchasePageComponent } from './process-purchase-page.component';

describe('ProcessPurchasePageComponent', () => {
  let component: ProcessPurchasePageComponent;
  let fixture: ComponentFixture<ProcessPurchasePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessPurchasePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessPurchasePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
