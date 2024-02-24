import { Component, Input } from '@angular/core';
import { Product } from 'src/app/interfaces/Product';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() product! : Product 
 
}
