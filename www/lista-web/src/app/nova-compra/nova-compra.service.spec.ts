import { TestBed } from '@angular/core/testing';

import { NovaCompraService } from './nova-compra.service';

describe('NovaCompraService', () => {
  let service: NovaCompraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NovaCompraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
