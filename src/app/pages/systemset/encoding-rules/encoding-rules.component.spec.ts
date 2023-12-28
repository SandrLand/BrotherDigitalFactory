import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncodingRulesComponent } from './encoding-rules.component';

describe('EncodingRulesComponent', () => {
  let component: EncodingRulesComponent;
  let fixture: ComponentFixture<EncodingRulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncodingRulesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncodingRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
