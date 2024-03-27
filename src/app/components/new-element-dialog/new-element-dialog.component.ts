import { Component, OnInit } from '@angular/core';
import { DialogService } from '../../services/new-element-dialog.service';

@Component({
  selector: 'app-new-element-dialog',
  standalone: true,
  imports: [],
  templateUrl: './new-element-dialog.component.html',
  styleUrl: './new-element-dialog.component.css'
})
export class NewElementDialogComponent implements OnInit  {
  public showDialog = false;

  constructor(private dialogService: DialogService) { }

  ngOnInit() {
    this.dialogService.showDialog$.subscribe(showDialog => {
      this.showDialog = showDialog;
    });
  }
}
