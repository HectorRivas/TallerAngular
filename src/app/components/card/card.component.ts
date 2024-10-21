import { Component, Input, signal } from '@angular/core';
import { Productos, Usuario } from '../../models/test';

type Data = {
  datos: Productos | Usuario
}

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  text = signal('')
  @Input() data!:Data
  @Input() clickEvent!: () => void;

  onChanges(event: any) {
    this.text.set(event.target.value)
    this.data.datos.description = this.text()
  }

  showAlert() {
    console.log(this.data.datos)
  }
}
