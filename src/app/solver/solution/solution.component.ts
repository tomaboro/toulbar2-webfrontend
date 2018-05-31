import { Component, OnInit } from '@angular/core';
import {ServerService} from '../../services/server.service';

@Component({
  selector: 'app-solution',
  templateUrl: './solution.component.html',
  styleUrls: ['./solution.component.css']
})
export class SolutionComponent implements OnInit {
  responseContent = null;
  failed = false;

  constructor(private serverService: ServerService) {
    this.serverService.getMessage().subscribe(
      (response) => {
        this.responseContent = response.text;
        this.failed = false;
      },
          (error) => {
            this.responseContent = error;
            this.failed = true;
            console.log(error);
          }
    );
  }

  ngOnInit() {}
}
