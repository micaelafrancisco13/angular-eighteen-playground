import {Component} from '@angular/core';
import {SampleOneComponent} from './sample-one/sample-one.component';
import {SampleThreeComponent} from './sample-three/sample-three.component';
import {SampleFourComponent} from './sample-four/sample-four.component';
import {SampleTwoComponent} from './sample-two/sample-two.component';

@Component({
  selector: 'app-content-projection',
  standalone: true,
  imports: [
    SampleOneComponent,
    SampleThreeComponent,
    SampleFourComponent,
    SampleTwoComponent,
  ],
  templateUrl: './content-projection.component.html',
  styleUrl: './content-projection.component.css'
})
export class ContentProjectionComponent {

}
