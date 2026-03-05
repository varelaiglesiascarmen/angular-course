import { Component } from "@angular/core";

@Component({
  template:`
    <h1>Contador: {{ counter }}</h1>
    <button (click)="incraseBy(1)">+1</button>
`,
})
export class CounterPageComponent {

  counter = 10;

  incraseBy(value: number){
    this.counter += value;
  }
}
