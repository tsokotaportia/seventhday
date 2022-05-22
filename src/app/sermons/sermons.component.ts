import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sermons',
  templateUrl: './sermons.component.html',
  styleUrls: ['./sermons.component.css']
})
export class SermonsComponent implements OnInit {
  images = [
    "thays-orrico--YRfFm9IX_E-unsplash.jpg",
    "evangelism.jpg",
    "erika-giraud-7KhbREQPFD4-unsplash.jpg"

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
