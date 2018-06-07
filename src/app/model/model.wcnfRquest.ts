import {WcnfFunction} from './model.wcnfFunction';

export class WcnfRequest {
  private variables: string[];
  private functions: WcnfFunction[];

  constructor() {
    this.variables = [];
    this.functions = [];
  }

  addVariable(vari: string) {
    this.variables.push(vari);
  }

  addFunction(func: WcnfFunction) {
    this.functions.push(func);
  }
}
