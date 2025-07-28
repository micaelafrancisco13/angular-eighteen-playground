import {Component, inject, model, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatDialog,} from '@angular/material/dialog';
import {MatFormFieldModule, MatLabel} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {CustomDialogOverviewComponent} from '../custom-dialog-overview/custom-dialog-overview.component';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-custom-dialog-overview-toggler',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatLabel, FormsModule, MatButtonModule],
  templateUrl: './custom-dialog-overview-toggler.component.html',
  styleUrl: './custom-dialog-overview-toggler.component.scss'
})
export class CustomDialogOverviewTogglerComponent {
  readonly animal = signal('');
  readonly name = model('');
  readonly dialog = inject(MatDialog);

  openDialog(): void {
    const dialogRef = this.dialog.open(CustomDialogOverviewComponent, {
      data: {name: this.name(), animal: this.animal()},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result !== undefined) {
        this.animal.set(result);
      }
    });
  }
}
