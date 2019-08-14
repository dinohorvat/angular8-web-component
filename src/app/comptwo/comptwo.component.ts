import { Component, OnInit } from '@angular/core';
import {MyserviceService} from '../myservice.service';

@Component({
  selector: 'app-comptwo',
  templateUrl: './comptwo.component.html',
  styleUrls: ['./comptwo.component.css']
})
export class ComptwoComponent implements OnInit {

  constructor(private myService: MyserviceService) { }

  ngOnInit() {
    this.myService.myData.subscribe((res) => console.log(res));
    this.myService.getData().subscribe();
    this.myService.myData.unsubscribe();
  }

}
