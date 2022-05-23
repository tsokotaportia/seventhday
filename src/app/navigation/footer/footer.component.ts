import { Component, OnInit } from '@angular/core';
import { faFacebook, faSkype } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faRetweet } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  faFacebook = faFacebook;
  faInstagram =faInstagram;
  faRetweet = faRetweet;

  constructor() { }

  ngOnInit(): void {
  }

}
