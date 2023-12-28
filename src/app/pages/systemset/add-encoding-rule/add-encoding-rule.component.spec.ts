import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEncodingRuleComponent } from './add-encoding-rule.component';

describe('AddEncodingRuleComponent', () => {
  let component: AddEncodingRuleComponent;
  let fixture: ComponentFixture<AddEncodingRuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEncodingRuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEncodingRuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
