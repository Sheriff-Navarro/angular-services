import { TestBed, inject } from '@angular/core/testing';
import { ContactServiceService } from './contact-service.service';
import * as _ from 'underscore';

describe('ContactServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContactServiceService]
    });
  });

  it('should be created', inject([ContactServiceService], (service: ContactServiceService) => {
    expect(service).toBeTruthy();
  }));
});
