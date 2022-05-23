import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  imgUrl="assets/images/john-price-RAZQiZOX3mU-unsplash.jpg"

  constructor() { }

  ngOnInit(): void {
  }

}
