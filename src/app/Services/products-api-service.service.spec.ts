import { TestBed } from '@angular/core/testing';

import { ProductsApiServiceService } from './products-api-service.service';

describe('ProductsApiServiceService', () => {
  let service: ProductsApiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsApiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
