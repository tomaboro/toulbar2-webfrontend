import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-wscp-rule',
  templateUrl: './wscp-rule.component.html',
  styleUrls: ['./wscp-rule.component.css']
})
export class WscpRuleComponent implements OnInit {

  @Input() index: number;
  @Output() delete: EventEmitter<any> = new EventEmitter();

  functions = ['AND', 'OR', 'DIFF'];
  selectedFunction = 'AND';
  content = '';
  weight = 1;

  constructor() { }

  ngOnInit() {
  }

  onDelete() {
    this.delete.emit(this.index);
  }

  onFunctionSelected(fun) {
    this.selectedFunction = fun;
  }
}
