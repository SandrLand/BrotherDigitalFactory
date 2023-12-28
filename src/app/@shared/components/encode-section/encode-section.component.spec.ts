import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncodeSectionComponent } from './encode-section.component';

describe('EncodeSectionComponent', () => {
  let component: EncodeSectionComponent;
  let fixture: ComponentFixture<EncodeSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncodeSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncodeSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
