import { TestBed } from '@angular/core/testing';

import { DialogService } from './new-element-dialog.service';

describe('NewElementDialogService', () => {
  let service: DialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
