import { Component, OnInit } from '@angular/core';
import { Article_list } from '../../models/article_list';
import { Article_preview } from '../../models/article_preview';
import { ArticleListServiceService } from '../../services/article-list-service.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  art_list: Article_list;
  constructor( private articleListService: ArticleListServiceService ) { }

  ngOnInit() {
    this.art_list = this.articleListService.getArticleList(0);
  }

}
