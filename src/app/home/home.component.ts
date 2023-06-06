import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public name = "Quang Ha";
  public age = 23;
  public companies = ['123job', 'adamo', 'bibabo']

  constructor() {

  }

  ngOnInit(): void {
    
  }
}
