import {Component, View, Inject, OnDestroy, OnInit} from 'angular2/core';
import {bindActionCreators} from 'redux';
import {Counter} from '../components/counter/counter';
import SkillBar from '../components/skill-bar';
import * as CounterActions from '../actions/counter';

require('font-awesome-webpack');

@Component({
  selector: 'root'
})
@View({
  directives: [SkillBar],
  template: `
  <skill-bar></skill-bar>
  `
})
export default class App implements OnDestroy, OnInit {

  protected unsubscribe: Function;

  constructor( @Inject('ngRedux') private ngRedux) {

  }

  ngOnInit() {
    this.unsubscribe = this.ngRedux.connect(
      this.mapStateToThis,
      this.mapDispatchToThis)(this);
  }

  ngOnDestroy() {
    this.unsubscribe();
  }

  mapStateToThis(state) {
    return {
      counter: state.counter
    };
  }

  mapDispatchToThis(dispatch) {
    return bindActionCreators(CounterActions, dispatch);
  }
}
