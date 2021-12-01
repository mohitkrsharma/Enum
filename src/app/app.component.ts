import { Component, OnInit } from '@angular/core';
export enum Info {
  name = 'Mohit Kumar Sharma',
  age = 30,
  qualification = 'B.Tech',
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Enum';
  details: any = {
    name: 'Jim',
    age: 30,
    place: 'Faridabad',
  };
  public info = Info;
  constructor() {}
  ngOnInit(): void {
    // Object.freeze(this.details); /* To freeze the object so as to lock the properties and make it unchangable */
    this.details.name = 'Jimmy';
    console.log(this.details);
    console.log(this.info.name);
  }
}
