import { Component, signal, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-counter.component',
  imports: [],
  templateUrl: './counter.component.html',
  /* styleUrl: './counter.component.css', */
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterComponent {

  counter = 10;
  counterSignal = signal(10);
  // Zoneless > The way to work with Zoneless is via Signals.
  constructor() {
    /*setInterval(() => {
      this.counter += 1; > This form is no longer supported in the version of Angular
      I am using, but it is supported in versions 14-15.
      The current way to implement it would be:
      this.counterSignal.update( (v) => v + 1);
      console.log('Tick'); }, 2000);
    },*/
  }

  // this function increases or decreases the counter by the value passed as an argument when clicked
  incraseBy(value: number){
    this.counter += value;
    // this.counterSignal.set(this.counterSignal() + value); > this is the same as the line below but more concise
    this.counterSignal.update( (current) => current + value);
  }

  // this function resets the counter to its initial state when clicked
  resetCounter(){
    this.counter = 0;
    this.counterSignal.set(0);
  }

}
