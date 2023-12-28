import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDirctoryTypeComponent } from './add-dirctory-type.component';

describe('AddDirctoryTypeComponent', () => {
  let component: AddDirctoryTypeComponent;
  let fixture: ComponentFixture<AddDirctoryTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDirctoryTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDirctoryTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
