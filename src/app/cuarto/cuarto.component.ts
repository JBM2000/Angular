import { NgFor, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Cliente } from '../cliente';


@Component({
  selector: 'app-cuarto',
  imports: [FormsModule,NgStyle,NgFor],
  templateUrl: './cuarto.component.html',
  styleUrl: './cuarto.component.css'
})
export class CuartoComponent {
mensaje: string = 'Hola mundo';
currentStyles: Record<string, string> = {
  'font-style': 'italic',
  'font-weight': 'bold',
  'font-size': '24px'
};
productos = ['camisa', 'pantalon', 'zapatos', 'gorra'];
clientes: Cliente[] = [
  {id: 1, nombre: 'Juan', ciudad: 'Madrid', facturacion: 1000},
  {id: 2, nombre: 'Ana', ciudad: 'Barcelona', facturacion: 2000},
  {id: 3, nombre: 'Pedro', ciudad: 'Valencia', facturacion: 3000},
  {id: 4, nombre: 'Luis', ciudad: 'Sevilla', facturacion: 4000}
];
}
 
