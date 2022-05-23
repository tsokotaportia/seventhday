import { Component, OnInit } from '@angular/core';
import { faBookBible } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sermons',
  templateUrl: './sermons.component.html',
  styleUrls: ['./sermons.component.css']
})
export class SermonsComponent implements OnInit {
  faBookBible = faBookBible
 cards = [
  {
    image:"thays-orrico--YRfFm9IX_E-unsplash.jpg",
    cardTitle:"Holy communion",
    cardText:"Whoever eats my flesh and drinks my blood has eternal life, and I will raise him up at the last day. For my flesh is food indeed, and my blood is drink indeed. He who eats my flesh and drinks my blood abides in me, and I in him.” By receiving the spiritual flesh and blood, Christ lives in us and us in him."
  },

  {
    image:"evangelism.jpg",
    cardTitle:"Holy communion",
    cardText:"Whoever eats my flesh and drinks my blood has eternal life, and I will raise him up at the last day. For my flesh is food indeed, and my blood is drink indeed. He who eats my flesh and drinks my blood abides in me, and I in him.” By receiving the spiritual flesh and blood, Christ lives in us and us in him."
  },

  {
    image:"erika-giraud-7KhbREQPFD4-unsplash.jpg",
    cardTitle:"Holy communion",
    cardText:"Whoever eats my flesh and drinks my blood has eternal life, and I will raise him up at the last day. For my flesh is food indeed, and my blood is drink indeed. He who eats my flesh and drinks my blood abides in me, and I in him.” By receiving the spiritual flesh and blood, Christ lives in us and us in him."
  }
 ]




  constructor() { }

  ngOnInit(): void {
  }

}
