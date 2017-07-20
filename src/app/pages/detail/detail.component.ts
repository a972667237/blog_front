import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ArticleGetServiceService } from '../../services/article-get-service.service';

import { Article } from '../../models/article';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  article: Article;
  constructor(
    private articleService: ArticleGetServiceService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe( res => {
      this.article = this.articleService.getArticle(+res['id']);
      console.log(this.article);
    })
  }

}
