import { Component } from '@angular/core';

@Component({
  selector: 'app-too-long-to-load',
  standalone: true,
  imports: [],
  templateUrl: './too-long-to-load.component.html',
  styleUrl: './too-long-to-load.component.css'
})
export class TooLongToLoadComponent {
  items: string[] = [];

  constructor(){
    console.time('castor')
    for (let i = 0; i < 250000; i++) {
      this.items.push('PasLoutre');
    }
    console.timeEnd('castor')
  }
}
