import { Component } from '@angular/core';
import { Roles, Usuario } from '../../models/test';
import { CardComponent } from "../../components/card/card.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  usuarios:Usuario[] = [
    {
      id: 1,
      name: 'Hector Rivas',
      description: 'Administrador de la app',
      rol: {
        rol: 'ADMIN'
      }
    },
    {
      id: 2,
      name: 'Juan Perez',
      description: 'Vendedor de la app',
      rol: {
        rol: 'VENDEDOR'
      }
    },
    {
      id: 3,
      name: 'Maria Gomez',
      description: 'Cliente de la app',
      rol: {
        rol: 'CLIENTE'
      }
    },
  ]
}
