import { Component, OnInit } from '@angular/core';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { faCancel } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  faEye = faEye;
  faPencil = faPencil;
  faCancel = faCancel;
  imgUrl = "assets/images/tshirt.jpg";
  galleries = [
    {
      description :"This card has supporting text below as a natural lead-in to additional content.",
      imgUrl: "assets/images/tshirt.jpg",
      cardTitle: "T-shirt fundraising"

    },
    {
      description :"This card has supporting text below as a natural lead-in to additional content.",
      imgUrl: "assets/images/chirairo.jpeg",
      cardTitle: "Holy communion"
    },
    {
      description:"This card has supporting text below as a natural lead-in to additional content.",
      imgUrl : "assets/images/baptism.jpg",
      cardTitle: "Baptism"
    }
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
