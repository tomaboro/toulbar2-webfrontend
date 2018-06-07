import {Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import {WcnfRuleComponent} from './wcnf-rule/wcnf-rule.component';
import {RuleComponent} from '../rule/rule.component';
import {WcnVariableComponent} from './wcn-variable/wcn-variable.component';
import {WscpRequest} from '../../../../model/model.wscpRequest';
import {WscpVariable} from '../../../../model/model.wscpVariable';
import {WscpFunction} from '../../../../model/model.wscpFunction';
import {WcnfFunction} from '../../../../model/model.wcnfFunction';
import {ServerService} from '../../../../services/server.service';
import {WcnfRequest} from '../../../../model/model.wcnfRquest';

@Component({
  selector: 'app-wcnf',
  templateUrl: './wcnf.component.html',
  styleUrls: ['./wcnf.component.css']
})
export class WcnfComponent implements OnInit {

  constructor(private serverService: ServerService) {
  }

  @ViewChildren(WcnfRuleComponent)
  private components: QueryList<WcnfRuleComponent>  ;

  @ViewChildren(WcnVariableComponent)
  private components2: QueryList<WcnVariableComponent>  ;

  rules = [0];
  variables = ['x1', 'x2', 'x3'];

  onAddRule() {
    this.rules.push(this.rules.length);
  }

  onRemoveVariable() {
    if (this.variables.length > 1) {
      this.variables.splice(this.variables.length - 1,  1);
    }
  }

  onAddVariable() {
    this.variables.push('x');
  }
  onVariablesAmountChange(event) {
    if (event.srcElement.value < this.variables.length) {
      this.variables.splice(0, this.variables.length - event.srcElement.value);
    } else {
      for (let _i = 0; _i <= event.srcElement.value - this.variables.length; _i++) {
        this.variables.push('x');
      }
    }
    console.log(event.srcElement.value);
    console.log(this.variables.length);
  }

  onRuleDelete(index: number) {
    if (this.rules.length > 1) {
      this.rules.splice(this.rules.indexOf(index), 1);
    }
  }

  onDownload() {
  }

  onSend() {
    const wscp = new WcnfRequest();
    for (const ruleComponent of this.components.toArray()) {
      wscp.addFunction(new WcnfFunction(ruleComponent.content, ruleComponent.weight));
    }
    for (const variableComponent of this.components2.toArray()) {
      wscp.addVariable(variableComponent.name);
    }
    console.log(JSON.stringify(wscp));
    this.serverService.sendSolveWcnfRequest(JSON.stringify(wscp));
  }

  ngOnInit() {
  }

}
