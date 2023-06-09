import { Component, OnInit, Input } from '@angular/core';
import { StorageService } from '../storage/storage.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: [
    './menu.component.css',
    '../../app.component.css']
})
export class MenuComponent implements OnInit {

  constructor(
    private storageService: StorageService,
  ) { }

  ngOnInit(): void {
  }

  @Input() route: any = "/";
  @Input() buttonText: any;
  
  signOut(){
    this.storageService.clear()
  }

}
