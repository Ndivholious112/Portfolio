import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectIdeasComponent } from './project-ideas.component';

describe('ProjectIdeasComponent', () => {
  let component: ProjectIdeasComponent;
  let fixture: ComponentFixture<ProjectIdeasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectIdeasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectIdeasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
