import { TestBed } from '@angular/core/testing';

import { NewElementDialogService } from './new-element-dialog.service';

describe('NewElementDialogService', () => {
  let service: NewElementDialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewElementDialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
