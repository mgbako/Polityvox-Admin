import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AwardPointPageComponent } from './award-point-page.component';

describe('AwardPointPageComponent', () => {
  let component: AwardPointPageComponent;
  let fixture: ComponentFixture<AwardPointPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AwardPointPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwardPointPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
