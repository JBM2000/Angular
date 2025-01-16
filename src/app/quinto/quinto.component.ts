import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-quinto',
  imports: [NgFor],
  templateUrl: './quinto.component.html',
  styleUrl: './quinto.component.css'
})
export class QuintoComponent {

  constructor(private servicio:DataService) { }
  data:any[] = [];
  ngOnInit() {
    this.servicio.getData().subscribe((data) => {
      this.data = data;
      console.log(this.data);
    });
  }
}
