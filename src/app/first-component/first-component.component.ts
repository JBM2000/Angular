import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-first-component',
  imports: [],
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.css'
})
export class FirstComponentComponent {
contador = signal(0);
doblecontador = computed(()=>this.contador()*2);
incrementar() {
  this.contador.update(contador=>contador+1);
}
}
