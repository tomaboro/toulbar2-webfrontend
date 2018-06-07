import {AfterViewInit, Component, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {RuleComponent} from './rule/rule.component';

@Component({
  selector: 'app-problem-loader',
  templateUrl: './problem-loader.component.html',
  styleUrls: ['./problem-loader.component.css']
})
export class ProblemLoaderComponent implements OnInit, AfterViewInit {
  constructor() { }

  type = 'wcsp';

  onTypeChange(nType: string) {
    this.type = nType;
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
  }

}
