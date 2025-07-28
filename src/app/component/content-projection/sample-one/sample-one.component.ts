import {Component, ElementRef, inject} from '@angular/core';

@Component({
  selector: 'app-sample-one',
  standalone: true,
  imports: [],
  templateUrl: './sample-one.component.html',
  styleUrl: './sample-one.component.css',
  host: {
    '(click)': 'onClick()'
  }
})
export class SampleOneComponent {
  private el = inject(ElementRef);

  onClick() {
    console.log('clicked', this.el);
    console.log(this.el.nativeElement)
  }
}
