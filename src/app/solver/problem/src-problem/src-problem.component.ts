import { Component, OnInit } from '@angular/core';
import {ReadFile, ReadMode} from 'ngx-file-helpers';
import {ServerService} from '../../../services/server.service';

@Component({
  selector: 'app-src-problem',
  templateUrl: './src-problem.component.html',
  styleUrls: ['./src-problem.component.css']
})
export class SrcProblemComponent implements OnInit {
  readMode = ReadMode.text;
  selectedFile = '';
  selectedFileContent = '';

  constructor(private serverService: ServerService) {
  }

  onSolve() {
    this.serverService.sendSolveFileRequest(this.selectedFileContent);
  }

  onFilePicked(file: ReadFile) {
    this.selectedFile = file.name;
    this.selectedFileContent = String(file.content);
  }

  ngOnInit() {
  }

}
