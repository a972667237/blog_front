import { Component, OnInit, Input } from '@angular/core';
import { Article_preview } from '../../../models/article_preview';

@Component({
  selector: 'app-recommend',
  templateUrl: './recommend.component.html',
  styleUrls: ['./recommend.component.css']
})
export class RecommendComponent implements OnInit {
  @Input()
  recommend: Article_preview[];
  constructor() { }

  ngOnInit() {
  }

}
