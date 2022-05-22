import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  title = "Events";
  images = [
            {
              image:"assets/images/city-church-christchurch-ynF4v8W7MIw-unsplash.jpg",
              cardTitle:"Card Title",
              description:"This is a wider card with supporting text below as a natural lead-in to additional"

            },
            {
              image:"assets/images/city-church-christchurch-ynF4v8W7MIw-unsplash.jpg",
              cardTitle:"Card Title",
              description:"This is a wider card with supporting text below as a natural lead-in to additional"
            },
            {
              image:"assets/images/city-church-christchurch-ynF4v8W7MIw-unsplash.jpg",
              cardTitle:"Card Title",
              description:"This is a wider card with supporting text below as a natural lead-in to additional"
            }
          ];

  constructor() { }

  ngOnInit(): void {
  }

}
