import {Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import {RuleComponent} from '../rule/rule.component';
import {WscpRuleComponent} from './wscp-rule/wscp-rule.component';
import {WscpVariableComponent} from './wscp-variable/wscp-variable.component';
import {WscpRequest} from '../../../../model/model.wscpRequest';
import {WscpFunction} from '../../../../model/model.wscpFunction';
import {WscpVariable} from '../../../../model/model.wscpVariable';
import {ServerService} from '../../../../services/server.service';

@Component({
  selector: 'app-wscp',
  templateUrl: './wscp.component.html',
  styleUrls: ['./wscp.component.css']
})
export class WscpComponent implements OnInit {
  rules = [0];
  variables = [1, 1, 1];
  upperBound = 10;

  constructor(private serverService: ServerService) {
  }

  ngOnInit() {
  }

  @ViewChildren(WscpRuleComponent)
  private rulesComponents: QueryList<WscpRuleComponent>;

  @ViewChildren(WscpVariableComponent)
  private variablesComponents: QueryList<WscpVariableComponent>;

  onAddRule() {
    this.rules.push(this.rules.length);
  }

  onRemoveVariable() {
    if (this.variables.length > 1) {
      this.variables.splice(this.variables.length - 1,  1);
    }
  }

  onAddVariable() {
    this.variables.push(1);
  }

  onRuleDelete(index: number) {
    if (this.rules.length > 1) {
      this.rules.splice(this.rules.indexOf(index), 1);
    }
  }

  onDownload() {
  }

  onSend() {
    const wscp = new WscpRequest();
    for (const ruleComponent of this.rulesComponents.toArray()) {
      wscp.addFunction(new WscpFunction(ruleComponent.selectedFunction, ruleComponent.content, ruleComponent.weight));
    }
    for (const variableComponent of this.variablesComponents.toArray()) {
      wscp.addVariable(new WscpVariable(variableComponent.name, variableComponent.domainSize, variableComponent.extreme));
    }
    wscp.setUpperBound(this.upperBound);
    console.log(JSON.stringify(wscp));
    this.serverService.sendSolveWscpRequest(JSON.stringify(wscp));
  }

  incrementUpperBound() {
    this.upperBound += 1;
  }

  decrementUpperBound() {
    if(this.upperBound > 1) {
      this.upperBound -= 1;
    }
  }
}
