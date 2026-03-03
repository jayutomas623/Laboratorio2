import { Component, signal, WritableSignal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './avatar.html',
  styleUrl: './avatar.scss',
})
export class AvatarComponent {

  colorFondo: WritableSignal<string> = signal<string>('#3498db');
  tamano: WritableSignal<number> = signal<number>(150);
  tieneLentes: WritableSignal<boolean> = signal<boolean>(false);
  tipoExpresion: WritableSignal<number> = signal<number>(1);

  nombre: WritableSignal<string> = signal<string>('');
  nombreVisible: WritableSignal<string> = signal<string>('');

  girando: WritableSignal<boolean> = signal<boolean>(false);


  cambiarColor(event: Event) {
    const input = event.target as HTMLInputElement;
    this.colorFondo.set(input.value);
  }

  cambiarTamano(event: Event) {
    const input = event.target as HTMLInputElement;

    this.tamano.set(Number(input.value));
  }

  toggleLentes() {
    this.tieneLentes.update(flag => !flag);
  }


  setExpresion(event: Event) {
    const input = event.target as HTMLSelectElement | HTMLInputElement;
    this.tipoExpresion.set(Number(input.value));
  }

  confirmarNombre() {
    this.nombreVisible.set(this.nombre());
  }

  actualizarNombre(event: Event) {
    const input = event.target as HTMLInputElement;
    this.nombre.set(input.value);
  }


  toggleGiro() {
    this.girando.update(estado => !estado);
  }

}