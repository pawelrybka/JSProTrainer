import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewElementDialogComponent } from './new-element-dialog.component';

describe('NewElementDialogComponent', () => {
  let component: NewElementDialogComponent;
  let fixture: ComponentFixture<NewElementDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewElementDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewElementDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
