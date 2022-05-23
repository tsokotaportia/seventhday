import { Component, OnInit } from '@angular/core';
import { faAdd } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-donations',
  templateUrl: './donations.component.html',
  styleUrls: ['./donations.component.css']
})
export class DonationsComponent implements OnInit {
  faAdd = faAdd;
  title = "Joshua needs a new Heart";
  donations=[
    {
      imgUrl: "hannah-busing-Zyx1bK9mqmA-unsplash.jpg"
    },
    {
      imgUrl : "donations.jpg"
    },
    {
      imgUrl : "donations1.jpg"
    }
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
