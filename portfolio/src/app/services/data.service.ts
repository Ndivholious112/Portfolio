import { Injectable, signal } from '@angular/core';
import { Project } from '../models/project.model';
import { Education } from '../models/education.model';

@Injectable({ providedIn: 'root' })
export class DataService {
  name = signal('Ndivho Nemutshili');
  jobTitle = signal('Full Stack Developer & UI/UX Designer');
  profilePic = signal('https://placehold.co/256x256/1f2937/d1d5db?text=NN');

  projects = signal<Project[]>([
    {
      title: 'Web Application: CookPad',
      description: 'A responsive recipe sharing application ',
      thumbnail: 'https://placehold.co/600x400/2D3748/A0AEC0?text=Web+App+Dashboard',
      tags: ['Angular', 'TypeScript', 'Node.js', 'Express', 'MongoDB'],
      type: 'web',
      // liveLink: '#',
      sourceLink: 'https://github.com/Ndivholious112/CookPad'
    },
    // ... other projects
  ]);

  education = signal<Education[]>([
    {
      degree: 'Bachelor of Science (Honours) in Bioinformatic and Computational Biology',
      institution: 'Stellenbosch University ',
      years: '2024 - 2024',
      details: ['Specialization in ']
    },
    {
      degree: 'Bachelor of Science in Biotechnology',
      institution: 'University of the Western Cape',
      years: '2019 - 2023',
      details: ['']
    }
  ]);
}
