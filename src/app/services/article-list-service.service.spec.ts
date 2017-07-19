import { TestBed, inject } from '@angular/core/testing';

import { ArticleListServiceService } from './article-list-service.service';

describe('ArticleListServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArticleListServiceService]
    });
  });

  it('should ...', inject([ArticleListServiceService], (service: ArticleListServiceService) => {
    expect(service).toBeTruthy();
  }));
});
