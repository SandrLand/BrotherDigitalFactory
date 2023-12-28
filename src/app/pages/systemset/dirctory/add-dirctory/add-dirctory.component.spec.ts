import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDirctoryComponent } from './add-dirctory.component';

describe('AddDirctoryComponent', () => {
  let component: AddDirctoryComponent;
  let fixture: ComponentFixture<AddDirctoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDirctoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDirctoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
