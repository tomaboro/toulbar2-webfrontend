import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-wcnf-rule',
  templateUrl: './wcnf-rule.component.html',
  styleUrls: ['./wcnf-rule.component.css']
})
export class WcnfRuleComponent implements OnInit {

  @Input() index: number;
  @Output() delete: EventEmitter<any> = new EventEmitter();

  content = '';
  weight = '';

  constructor() { }

  ngOnInit() {
  }

  onDelete() {
    this.delete.emit(this.index);
  }

}
