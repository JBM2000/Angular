
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';


@Component({
  selector: 'app-octavo',
  imports: [FormsModule],
  templateUrl: './octavo.component.html',
  styleUrl: './octavo.component.css'
})
export class OctavoComponent {
onSubmit(f:NgForm) {
  console.log('Formulario enviado');
  console.log(f.value);
}
}

