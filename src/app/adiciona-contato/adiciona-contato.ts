import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  Validators
} from '@angular/forms';

import { Contato, TipoContato } from './contato';

@Component({
  selector: 'app-adiciona-contato',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './adiciona-contato.html',
  styleUrl: './adiciona-contato.scss'
})
export class AdicionaContatoComponent {

  contatos: Contato[] = [];

  tipos = Object.values(TipoContato);

  formulario;

  constructor(private fb: FormBuilder){

    this.formulario = this.fb.group({

      nome:['', Validators.required],

      telefone:['', Validators.required],

      email:['', [Validators.required, Validators.email]],

      aniversario:['', Validators.required],

      tipo:[TipoContato.AMIGO, Validators.required]

    });

  }

  cadastrar(){

    if(this.formulario.invalid){

      this.formulario.markAllAsTouched();

      return;

    }

    const valor = this.formulario.value;

    const contato = new Contato(

      valor.nome!,
      valor.telefone!,
      valor.email!,
      valor.aniversario!,
      valor.tipo!

    );

    this.contatos.push(contato);

    this.formulario.reset({

      tipo: TipoContato.AMIGO

    });

  }

}