import { TestBed } from '@angular/core/testing';

import { KafkaserviceService } from './kafkaservice.service';

describe('KafkaserviceService', () => {
  let service: KafkaserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KafkaserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
