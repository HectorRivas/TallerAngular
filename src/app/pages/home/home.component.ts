import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  @Input() title!: string;
  @Input() description!: string;
  @Input() image!: string;
  @Input() text_btn!: string;
  @Input() clickEvent!: () => void;

  showAlert() {
    this.clickEvent();
  }
}
