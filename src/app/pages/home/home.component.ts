import { Component, Input } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";

@Component({
  selector: 'ui-home',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  infoLua(){
    alert("Lua es una perrita de la raza beagle, tiene 3 años y es muy juguetona");
  }

  infoJack(){
    alert("Jack es un perro de la raza Corgi, tiene 2 años y es muy cariñoso");
  }

  goToProducts(){
    window.location.href = "/products";
  }
}
