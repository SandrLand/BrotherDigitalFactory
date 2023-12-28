import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDirctoryTypeComponent } from './edit-dirctory-type.component';

describe('EditDirctoryTypeComponent', () => {
  let component: EditDirctoryTypeComponent;
  let fixture: ComponentFixture<EditDirctoryTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDirctoryTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditDirctoryTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
