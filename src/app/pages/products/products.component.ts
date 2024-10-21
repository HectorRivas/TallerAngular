import { Component } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { Productos } from '../../models/test';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  productos:Productos[] = [
    {
      name: 'Producto 1',
      description: 'Descripción del producto 1',
      price: 100,
      image: 'https://via.placeholder.com/150'
    },
    {
      name: 'Producto 2',
      description: 'Descripción del producto 2',
      price: 200,
      image: 'https://via.placeholder.com/150'
    },
    {
      name: 'Producto 3',
      description: 'Descripción del producto 3',
      price: 300,
      image: 'https://via.placeholder.com/150'
    }
  ]
}
