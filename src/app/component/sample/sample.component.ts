import { Component } from '@angular/core';
import {
  CustomDialogOverviewTogglerComponent
} from './custom-dialog-overview-toggler/custom-dialog-overview-toggler.component';

@Component({
  selector: 'app-sample',
  standalone: true,
  imports: [
    CustomDialogOverviewTogglerComponent
  ],
  templateUrl: './sample.component.html',
  styleUrl: './sample.component.scss'
})
export class SampleComponent {

}
