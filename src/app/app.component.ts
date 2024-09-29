import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./pages/home/home.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  infoLua(){
    alert("Lua es una perrita de la raza beagle, tiene 3 años y es muy juguetona");
  }

  infoJack(){
    alert("Jack es un perro de la raza Corgi, tiene 2 años y es muy cariñoso");
  }
}
