import { Component, OnInit } from '@angular/core';
import { faEye } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  faEye = faEye;
  title = "Events";
  events = [
            {
              image:"assets/images/city-church-christchurch-ynF4v8W7MIw-unsplash.jpg",
              cardTitle:"Big Sabbath",
              description:"A world without a Sabbath would be like a man without a smile, like a summer without flowers, and like a homestead without a garden. It is the most joyous day of the week."

            },
            {
              image:"assets/images/city-church-christchurch-ynF4v8W7MIw-unsplash.jpg",
              cardTitle:"Revival",
              description:"The law of the Lord is perfect, refreshing the soul. The statutes of the Lord are trustworthy, making wise the simple."
            },
            {
              image:"assets/images/city-church-christchurch-ynF4v8W7MIw-unsplash.jpg",
              cardTitle:"Evangelism",
              description:"To me, it has been a source of great comfort and strength in the day of battle, just to remember that the secret of steadfastness, and indeed, of victory, is the recognition that the Lord is at hand."
            }
          ];

  constructor() { }

  ngOnInit(): void {
  }

}
