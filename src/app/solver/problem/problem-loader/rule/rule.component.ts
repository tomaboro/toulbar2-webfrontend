import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-rule',
  templateUrl: './rule.component.html',
  styleUrls: ['./rule.component.css']
})
export class RuleComponent implements OnInit {
  @Input() index: number;
  @Output() delete: EventEmitter<any> = new EventEmitter();

  functions = ['AND', 'OR', 'DIFF'];
  selectedFunction = 'AND';

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
