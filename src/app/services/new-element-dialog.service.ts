import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  private _showDialogSubject = new BehaviorSubject<boolean>(false);
  public showDialog$ = this._showDialogSubject.asObservable();

  dialogToggle(){
    this._showDialogSubject.next(!this._showDialogSubject.value);
  }
}