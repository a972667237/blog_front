import { TestBed, inject } from '@angular/core/testing';

import { ArticleGetServiceService } from './article-get-service.service';

describe('ArticleGetServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArticleGetServiceService]
    });
  });

  it('should ...', inject([ArticleGetServiceService], (service: ArticleGetServiceService) => {
    expect(service).toBeTruthy();
  }));
});
