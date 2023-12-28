import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEncodeingRulesComponent } from './edit-encodeing-rules.component';

describe('EditEncodeingRulesComponent', () => {
  let component: EditEncodeingRulesComponent;
  let fixture: ComponentFixture<EditEncodeingRulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditEncodeingRulesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditEncodeingRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
