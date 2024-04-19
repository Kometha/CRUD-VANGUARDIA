import { Component } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-dialog-modal',
  templateUrl: './dialog-modal.component.html',
  styleUrl: './dialog-modal.component.scss',
})
export class DialogModalView {
  ref!: DynamicDialogRef;
  constructor() {}

}
