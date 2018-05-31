import {AfterViewInit, Component, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {RuleComponent} from './rule/rule.component';

@Component({
  selector: 'app-problem-loader',
  templateUrl: './problem-loader.component.html',
  styleUrls: ['./problem-loader.component.css']
})
export class ProblemLoaderComponent implements OnInit, AfterViewInit {
  constructor() { }

  @ViewChildren(RuleComponent)
  private components: QueryList<RuleComponent>  ;

  rules = [0];
  variables = [1, 1, 1];

  onAddRule() {
    this.rules.push(this.rules.length);
  }

  onSend() {
  }

  onRemoveVariable() {
    if (this.variables.length > 1) {
      this.variables.splice(this.variables.length - 1,  1);
    }
  }

  onAddVariable() {
    this.variables.push(1);
  }
  onVariablesAmountChange(event) {
    if (event.srcElement.value < this.variables.length) {
      this.variables.splice(0, this.variables.length - event.srcElement.value);
    } else {
      for (let _i = 0; _i <= event.srcElement.value - this.variables.length; _i++) {
        this.variables.push(1);
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

  ngOnInit() {
  }

  ngAfterViewInit(): void {
  }

}
