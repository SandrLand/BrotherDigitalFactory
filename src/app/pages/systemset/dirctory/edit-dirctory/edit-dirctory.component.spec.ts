import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDirctoryComponent } from './edit-dirctory.component';

describe('EditDirctoryComponent', () => {
  let component: EditDirctoryComponent;
  let fixture: ComponentFixture<EditDirctoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDirctoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditDirctoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
