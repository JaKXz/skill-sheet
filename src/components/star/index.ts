import {Attribute, Component, View, Inject, Input} from 'angular2/core';
import {NgClass} from 'angular2/common';

@Component({
  selector: 'star',
  directives: [NgClass],
  template: `
    <i class="fa"
        (click)="select(idx)" 
        [ngClass]="{'fa-star': on, 'fa-star-o': !on}"></i>
  `,
  styles: [`
    i {
      color: red;
      cursor: pointer;        
    }       
  `]
})

export default class Star {
   
  @Input() on;
  @Input() select;
  @Input() idx;

}
