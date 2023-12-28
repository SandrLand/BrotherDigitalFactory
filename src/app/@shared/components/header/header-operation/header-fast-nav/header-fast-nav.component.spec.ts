import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderFastNavComponent } from './header-fast-nav.component';

describe('HeaderFastNavComponent', () => {
  let component: HeaderFastNavComponent;
  let fixture: ComponentFixture<HeaderFastNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderFastNavComponent]
    });
    fixture = TestBed.createComponent(HeaderFastNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
