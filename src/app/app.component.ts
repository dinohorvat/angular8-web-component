import {Component, OnInit} from '@angular/core';
import {MyserviceService} from './myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular8';

  constructor(private myService: MyserviceService) {
  }

  ngOnInit(): void {
    this.myService.getData().subscribe();
    this.myService.myData.subscribe((res) => {
      console.log(res);
    });
  }
}
