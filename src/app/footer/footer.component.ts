import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
  standalone: true,
  host: { ngSkipHydration: 'true' } // Adiciona esta linha para pular hidratação
})
export class FooterComponent {

}
