import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './avatar.html',
  styleUrl: './avatar.scss',
})
export class AvatarComponent {
  colorFondo = signal<string>('#3498db');
  tamano = signal<number>(150);
  tieneLentes = signal<boolean>(false);
  tipoExpresion = signal<number>(1);
  
  nombre = signal<string>('Mi Avatar');


  colorTexto = computed(() => {
    const hex = this.colorFondo().replace('#', '');
    if (hex.length !== 6) return '#000000'; 
    

    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    
    const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
    
    return (yiq >= 128) ? '#000000' : '#ffffff';
  });

  cambiarColor(event: Event){
    const input = event.target as HTMLInputElement;
    this.colorFondo.set(input.value);
  }
  
  cambiarTamano(event: Event){
    const input = event.target as HTMLInputElement;
    this.tamano.set(parseInt(input.value));
  }
  
  toggleLentes(){
    this.tieneLentes.update(flag => !flag);
  }
  
  setExpresion(tipo: number){
    this.tipoExpresion.set(tipo);
  }

  cambiarNombre(event: Event){
    const input = event.target as HTMLInputElement;
    this.nombre.set(input.value);
  }
}