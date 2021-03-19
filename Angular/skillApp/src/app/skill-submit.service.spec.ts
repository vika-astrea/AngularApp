import { TestBed } from '@angular/core/testing';

import { SkillSubmitService } from './skill-submit.service';

describe('SkillSubmitService', () => {
  let service: SkillSubmitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkillSubmitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
