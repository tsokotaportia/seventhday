import { Component, OnInit } from '@angular/core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  faEnvelope = faEnvelope;
  title = "Contact-Us";
  email = "mandaraseventhdayadventist@gmail.com"
  churchTitle = "Seventhday Adventist"
  constructor() { }

  ngOnInit(): void {
  }

}
