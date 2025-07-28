import {Component} from '@angular/core';
import {MatList, MatListItem} from '@angular/material/list';
import {MatLine} from '@angular/material/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    MatListItem,
    MatList,
    MatLine
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
