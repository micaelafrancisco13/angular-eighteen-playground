import {Component} from '@angular/core';
import {LandingPageComponent} from './landing-page/landing-page.component';

@Component({
  selector: 'app-tailwind-component',
  standalone: true,
  imports: [
    LandingPageComponent
  ],
  templateUrl: './tailwind-component.component.html',
  styleUrl: './tailwind-component.component.css'
})
export class TailwindComponentComponent {

}
