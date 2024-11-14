import { Component } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { FormsModule } from '@angular/forms';
import { ReqresApiService } from '../../services/reqres-api.service';

@Component({
  selector: 'ui-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  email: string = '';
  password: string = '';

  constructor(private apiReqres: ReqresApiService) {}

  login(user: string, password: string) {
    console.log(`Usuario: ${user} - Contraseña: ${password}`);
    this.apiReqres.login(user, password).subscribe(
      res => {
        alert("Login exitoso: " + res.token)
        console.log('Login correcto');
        console.log(res.token);
      },
      err => {
        console.log('Error en el login');
        console.error(err);
      }
    );
  }
}