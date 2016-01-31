import {Attribute, Component, View, Inject, Input} from 'angular2/core';
import {NgClass} from 'angular2/common';
import Star from '../../components/star';
const R = require('ramda');

@Component({
  selector: 'skill-bar',
  directives: [Star],
  template: `
    Skill: 
      <star 
        *ngFor="#star of stars; #idx = index" 
        [idx]="idx + 1"
        [on]="star" 
        [select]="select"></star>
  `,
  styles: [`
    i {
      color: red;
      cursor: pointer;        
    }       
  `]
})

export default class SkillBar {
   
  private on: any;
  private rating: number;
  private stars: boolean[];
  
  ngOnInit() {
    this.rating = 7;
    this.buildState();
  }
  
  select = (index) => {
    this.rating = index;
    this.buildState();
  }
  
  buildState() {
    this.stars = R.concat(
      R.repeat(true, this.rating), 
      R.repeat(false, 10 - this.rating)
    );
  }
 
}
