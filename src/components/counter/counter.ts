
import {Attribute, Component, View, Injectable, Inject, Input} from 'angular2/core';
@Component({
  selector: 'counter',
  properties: [
    'increment',
    'decrement',
    'incrementIfOdd',
    'incrementAsync'
  ]
})
@View({
  template: `
  <p>
    Clicked: {{ counter }} times
    <button (click)="increment()">+</button>
    <button (click)="decrement()">-</button>
    <button (click)="incrementIfOdd()">Increment if odd</button>
    <button (click)="incrementAsync()">Increment async</button>
  </p>
  `
})

export class Counter {
  @Input() counter;
  constructor() {
    console.log('wtf', this.counter);
  }
}
