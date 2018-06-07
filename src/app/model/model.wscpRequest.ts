import {WscpVariable} from './model.wscpVariable';
import {WscpFunction} from './model.wscpFunction';

export class WscpRequest {
  private variables: WscpVariable[];
  private functions: WscpFunction[];
  private upperBound;

  constructor() {
    this.variables = [] as WscpVariable[];
    this.functions = [] as WscpFunction[];
  }

  setUpperBound(bound) {
    this.upperBound = bound;
  }

  addVariable(variable: WscpVariable) {
    this.variables.push(variable);
  }
  addFunction(wscpFunction: WscpFunction) {
    this.functions.push(wscpFunction);
  }
}
