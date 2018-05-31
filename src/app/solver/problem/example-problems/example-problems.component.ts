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
    'Praesent vel convallis ipsum, quis tincidunt purus. Vivamus leo mi, finibus ac nunc vitae, porttitor laoreet magna. Donec tincidunt pharetra lorem, a pharetra sem accumsan ac. Quisque in nibh nec ipsum dictum lacinia at eget urna. Pellentesque dapibus mollis pretium. Duis eu laoreet ante, ut tincidunt libero. Quisque interdum lorem vitae mauris pretium, nec faucibus enim auctor. Nullam ultricies pulvinar rhoncus. Fusce felis dolor, vestibulum a aliquam eu, imperdiet eget augue. Fusce tristique mauris faucibus egestas congue. Cras molestie est ut est aliquam, non accumsan ante pharetra. Nullam iaculis ipsum sed turpis auctor efficitur. Sed vel purus velit.',
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
