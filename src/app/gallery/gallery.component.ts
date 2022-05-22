import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  title = "Gallery"
  gallery = [
    {
      description :"This card has supporting text below as a natural lead-in to additional content.",
      imgUrl: "assets/images/tshirt.jpg",
      cardTitle: "Card Title"

    },
    {
      description :"This card has supporting text below as a natural lead-in to additional content.",
      imgUrl: "assets/images/chirairo.jpeg"
    },
    {
      description:"This card has supporting text below as a natural lead-in to additional content.",
      imgUrl : "assets/images/baptism.jpg"
    }
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
