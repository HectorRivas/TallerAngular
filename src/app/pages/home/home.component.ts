import { Component, NgModule } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'ui-home',
  standalone: true,
  imports: [CardComponent, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  email: string = '';
  password: string = '';

  login(user: string, password: string): boolean {
    console.log(`Usuario: ${user} - Contraseña: ${password}`);
    return true; // or return false based on your logic
  }
}
