import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donations',
  templateUrl: './donations.component.html',
  styleUrls: ['./donations.component.css']
})
export class DonationsComponent implements OnInit {
  title = "Joshua needs a new Heart";
  src = "hannah-busing-Zyx1bK9mqmA-unsplash.jpg"

  constructor() { }

  ngOnInit(): void {
  }

}
