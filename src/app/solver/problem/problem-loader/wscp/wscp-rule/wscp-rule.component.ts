import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-wscp-rule',
  templateUrl: './wscp-rule.component.html',
  styleUrls: ['./wscp-rule.component.css']
})
export class WscpRuleComponent implements OnInit {

  @Input() index: number;
  @Output() delete: EventEmitter<any> = new EventEmitter();

  functions = ['>=','>','<=','<','=','disj','sdisj','salldiff','sgcc','ssame','sregular'];
  selectedFunction = 'disj';
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
