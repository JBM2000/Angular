
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-contacto-td',
  imports: [FormsModule],
  templateUrl: './contacto-td.component.html',
  styleUrl: './contacto-td.component.css'
})
export class ContactoTDComponent {
    contacto = {
      email: '',
      asunto: '',
      mensaje: '',
      privacidad: false,
    };
  
    onSubmit(form: any) {
      if (form.valid) {
        // Mostrar un mensaje emergente de confirmación
        alert('Los datos han sido enviados correctamente.');
  
        // Imprimir los datos en la consola
        console.log('Datos enviados:', this.contacto);
  
        // Resetear el formulario
        form.reset();
      }
    }
  }