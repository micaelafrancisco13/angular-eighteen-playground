import {Component} from '@angular/core';
import {TailwindComponentComponent} from './component/tailwind-component/tailwind-component.component';
import {SampleComponent} from './component/sample/sample.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TailwindComponentComponent, SampleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-eighteen-playground';
  videoEl = document.querySelector("video");

  ngOnInit() {
    const video = document.querySelector("video");

    // if (this.videoEl) {
    //   this.videoEl.play();
    //
    // }
  }
}
