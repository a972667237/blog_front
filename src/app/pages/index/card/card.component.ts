import { Component, OnInit, Input } from '@angular/core';
import { Article_preview } from '../../../models/article_preview';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input()
  article: Article_preview;
  constructor() { }

  ngOnInit() {
  }

}
