import { TestBed } from '@angular/core/testing';
import {HttpClient, HttpClientModule} from '@angular/core/http';
import { Observable } from 'rxjs';

import { TestserviceService } from './testservice.service';

describe('TestserviceService', () => {
  let service: TestserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});