import { Injectable } from '@angular/core';
import { Article } from '../models/article';
import { Article_getter } from './localTestArticle';

@Injectable()
export class ArticleGetServiceService {

  constructor() { }
  getArticle(id: number): Article{
    let getter = new Article_getter;
    return getter.get(id);
  }
}
