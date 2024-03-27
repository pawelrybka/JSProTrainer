import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { DialogService } from '../../services/new-element-dialog.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  dialogToggle() {
    this.dialogService.dialogToggle()
  }

  constructor(private dialogService: DialogService) { }
}
