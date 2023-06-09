import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExampleService {

  constructor(
    private http: HttpClient,
  ) { }

  exampleData = new Subject<any>()
  setExampleData(newValue: any){
    this.exampleData.next(newValue)
  }

  getExampleData(){
    // PLACE FOR GET REQUEST
  }

}
