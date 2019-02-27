import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-usage',
  templateUrl: './example-usage.component.html'
})
export class ExampleUsageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
