import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wscp-variable',
  templateUrl: './wscp-variable.component.html',
  styleUrls: ['./wscp-variable.component.css']
})
export class WscpVariableComponent implements OnInit {
  domainSize = 1;
  name = '';
  extreme = false;
  constructor() { }

  ngOnInit() {
  }

  incrementDomainSize() {
    this.domainSize += 1;
  }

  decrementDomainSize() {
    if (this.domainSize > 0) {
      this.domainSize -= 1;
    }
  }
}
