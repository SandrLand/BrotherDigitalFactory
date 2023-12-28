import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerderNoticeComponent } from './herder-notice.component';

describe('HerderNoticeComponent', () => {
  let component: HerderNoticeComponent;
  let fixture: ComponentFixture<HerderNoticeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HerderNoticeComponent]
    });
    fixture = TestBed.createComponent(HerderNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
