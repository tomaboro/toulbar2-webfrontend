import {Component, OnInit} from '@angular/core';
import {ServerService} from '../../../services/server.service';

@Component({
  selector: 'app-example-problems',
  templateUrl: './example-problems.component.html',
  styleUrls: ['./example-problems.component.css']
})
export class ExampleProblemsComponent implements OnInit {

  constructor(private serverService: ServerService) {
    this.onReloadExample(1);
  }

  selectedItem = 0;
  exampleDescrition = '';
  exampleTitle = '';
  exampleHref = '';
  descriptipns = [
    'Sudoku (数独 sūdoku, digit-single) (/suːˈdoʊkuː/, /-ˈdɒk-/, /sə-/, originally called Number Plate)[1] is a logic-based,[2][3] combinatorial[4] number-placement puzzle. The objective is to fill a 9×9 grid with digits so that each column, each row, and each of the nine 3×3 subgrids that compose the grid (also called "boxes", "blocks", or "regions") contains all of the digits from 1 to 9. The puzzle setter provides a partially completed grid, which for a well-posed puzzle has a single solution.\n' +
    '\n' +
    'Completed games are always a type of Latin square with an additional constraint on the contents of individual regions. For example, the same single integer may not appear twice in the same row, column, or any of the nine 3×3 subregions of the 9x9 playing board.',
    'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce ut ex aliquam dui hendrerit hendrerit quis laoreet mi. Ut a ligula nec quam condimentum suscipit. Ut hendrerit molestie rhoncus. Ut sollicitudin malesuada metus, ac placerat libero fringilla sit amet. In sodales molestie orci sed pulvinar. Pellentesque vel nibh sem. Sed ultricies dignissim nulla sed faucibus.',
    'Nunc eget mi semper, molestie nisi sit amet, bibendum nulla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam in venenatis turpis, a convallis dui. Nunc commodo sapien sit amet metus congue pharetra. Vivamus dolor elit, finibus a ullamcorper ac, tempus ac tellus. Aenean quis arcu ligula. Aenean sed nisl nec purus faucibus gravida. Pellentesque laoreet vel neque a mattis. Etiam porttitor scelerisque mauris nec luctus. Etiam mollis et augue vel congue. Cras id vehicula diam, eu sagittis nibh.'
];
  titles = [
    'Sudoku',
    'Example 2',
    'Example 3'
  ];

  hrefs = [
    'http://i.iplsc.com/zdj-ilustracyjne/0006DVXSTLL51M5U-C122-F4.jpg',
    'http://i.iplsc.com/zdj-ilustracyjne/0006DVXSTLL51M5U-C122-F4.jpg',
    'http://i.iplsc.com/zdj-ilustracyjne/0006DVXSTLL51M5U-C122-F4.jpg'
  ];

  ngOnInit() {

  }

  onReloadExample(num) {
    this.selectedItem = num;
    this.exampleTitle = this.titles[num - 1];
    this.exampleHref = this.hrefs[num - 1];
    this.exampleDescrition = this.descriptipns[num - 1];
  }

  onSend() {
    this.serverService.sendSolveExampleRequest(this.selectedItem);
  }

  onDownload() {}
}
