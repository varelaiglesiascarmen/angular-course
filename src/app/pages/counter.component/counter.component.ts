import { Component } from '@angular/core';

@Component({
  selector: 'app-counter.component',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {

  counter = 10;

  // this function resets the counter to its initial state when clicked
  resetCounter(){
    this.counter = 10;
  }

  // this function increases or decreases the counter by the value passed as an argument when clicked
  incraseBy(value: number){
    this.counter += value;
  }

}
