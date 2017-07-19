import { Injectable } from '@angular/core';
import { Article_list } from '../models/article_list';
import { Article_preview } from '../models/article_preview';
import { all_article_preview, recommend } from './localTestArticle';

@Injectable()
export class ArticleListServiceService {

  constructor() { }
  getArticleList(page: number):Article_list{
    // 此处由于没有分页器，就暂且不用page了
    let art_list:Article_list = {
      article_all: all_article_preview,
      recommend: recommend
    };
    return art_list;
  }
}
