import { TestBed } from '@angular/core/testing';

import { ProjectIdeaService } from './project-idea.service';

describe('ProjectIdeaService', () => {
  let service: ProjectIdeaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectIdeaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
