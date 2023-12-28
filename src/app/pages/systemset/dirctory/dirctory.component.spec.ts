import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirctoryComponent } from './dirctory.component';

describe('DirctoryComponent', () => {
  let component: DirctoryComponent;
  let fixture: ComponentFixture<DirctoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirctoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirctoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
