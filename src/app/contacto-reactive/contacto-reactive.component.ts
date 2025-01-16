import { Component } from '@angular/core';
import { FormBuilder, FormGroup,  ReactiveFormsModule,  Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto-reactive',
  imports: [ReactiveFormsModule],
  templateUrl: './contacto-reactive.component.html',
  styleUrl: './contacto-reactive.component.css'
})
export class ContactoReactiveComponent {
  formularioContacto: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    // Configurar el formulario reactivo
    this.formularioContacto = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      asunto: ['', Validators.required],
      mensaje: ['', Validators.required],
      privacidad: [false, Validators.requiredTrue],
    });
  }

  // Getters para acceder fácilmente a los controles
  get email() {
    return this.formularioContacto.get('email');
  }

  get asunto() {
    return this.formularioContacto.get('asunto');
  }

  get mensaje() {
    return this.formularioContacto.get('mensaje');
  }

  get privacidad() {
    return this.formularioContacto.get('privacidad');
  }

  // Método para enviar el formulario
  enviarFormulario() {
    if (this.formularioContacto.valid) {
      // Mostrar mensaje emergente
      alert('Los datos han sido enviados correctamente.');

      // Imprimir datos en la consola
      console.log('Datos del formulario:', this.formularioContacto.value);

      // Resetear el formulario
      this.formularioContacto.reset();
    }
  }
}
