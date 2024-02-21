import { Component,Input } from '@angular/core';
import { Productlist } from '../productlist';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  @Input() productlistsearch! : Productlist;
}
