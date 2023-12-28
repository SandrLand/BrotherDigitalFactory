import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderOperationComponent } from './header-operation.component';

describe('HeaderOperationComponent', () => {
  let component: HeaderOperationComponent;
  let fixture: ComponentFixture<HeaderOperationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderOperationComponent]
    });
    fixture = TestBed.createComponent(HeaderOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
