import { Component, OnInit } from '@angular/core';
import { ExampleService } from '../../data-access/example.service';
import { StorageService } from 'src/app/shared/storage/storage.service';

@Component({
  selector: 'app-example-feature',
  templateUrl: './example-feature.component.html',
  styleUrls: ['./example-feature.component.css']
})
export class ExampleFeatureComponent implements OnInit {

  constructor(
    private exampleService: ExampleService,
    private storageService: StorageService,
  ) { }

  ngOnInit(): void {
    // Use data-access service to fetch data from db, and then subscribe to this data
    this.exampleService.getExampleData()
    this.exampleService.exampleData.subscribe(exampleData => this.exampleData = exampleData)

    // Use data stored in localhost
    this.storageService.user.subscribe(authUser => this.userData = authUser)
    this.storageService.getLocalUser()
  }

  // Menu variables
  menuSignOutRoute : any = "/"
  menuButtonText: any = "Sign out"

  // Data variables
  exampleData: any = 'Data that should be fetched directly from database.'
  userData: any;

}
