import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-consumir-imagen',
  imports: [CommonModule],
  templateUrl: './consumir-imagen.component.html',
  styleUrl: './consumir-imagen.component.css'
})
export class ConsumirImagenComponent {
  carts: any[] = []; 

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Consumir los datos desde el servicio
    this.http.get<any>('https://dummyjson.com/carts').subscribe((data:any) => {
      this.carts = data.carts;
    });
  }
}
