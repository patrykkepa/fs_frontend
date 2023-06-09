import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-example-feature-page',
  templateUrl: './example-feature-page.component.html',
  styleUrls: ['./example-feature-page.component.css',
  '../../../app.component.css']
})
export class ExampleFeaturePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() exampleData: any
  @Input() userData: any


}
