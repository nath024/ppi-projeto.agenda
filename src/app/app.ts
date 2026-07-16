import { Component } from '@angular/core';
import { AdicionaContatoComponent } from './adiciona-contato/adiciona-contato';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AdicionaContatoComponent],
  templateUrl: './app.html'
})
export class App {

}