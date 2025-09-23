import { Injectable } from '@angular/core';

export interface Project {
  title: string;
  description: string;
  thumbnail: string;
  tags: string[];
  type: 'web' | 'figma';
  liveLink?: string;
  sourceLink?: string;
}

export interface EducationEntry {
  degree: string;
  institution: string;
  years: string;
  details?: string[];
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private _name = 'Ndivho Nemutshili';
  private _jobTitle = 'Full Stack Developer & UI/UX Designer';
  private _profilePic = 'https://media.licdn.com/dms/image/v2/D4D03AQG-HINfV8rREQ/profile-displayphoto-shrink_800_800/B4DZPegBREHcAc-/0/1734604757828?e=1761177600&v=beta&t=v0RO23rjgpt9yqnAhBVGK241i6tQjJbj_RTdaVqMZwo';

  private _projects: Project[] = [
    {
      title: 'SimpleBank',
      description: 'A minimalist expense tracker with secure authentication, transaction management, and a clean, responsive UI.',
      thumbnail: '/assets/homepage2.png', // Corrected path
      tags: ['React', 'Vite', 'Node.js', 'Express', 'MongoDB', 'JWT'],
      type: 'web',
      // liveLink: '#', // add if deployed
      sourceLink: 'https://github.com/Ndivholious112/SimpleBank.git'
    },
    {
      "title": "Figma Design: YouTube Clone",
      "description": "A UI/UX design for a YouTube-style web platform, including a home feed, sidebar navigation, and search functionality.",
      "thumbnail": "/assets/youtubeclone.png",
      "tags": ["Figma", "UI/UX", "Web Design", "Responsive", "Prototyping"],
      "type": "figma",
      "liveLink": "https://www.figma.com/proto/O4lejqEUd6v8JxsXFnz0qm/Portfolio?node-id=24-187&p=f&t=FVUq2545yVrCJHFN-1&scaling=scale-down&content-scaling=fixed&page-id=123%3A2&starting-point-node-id=24%3A187",
      "sourceLink": "https://www.figma.com/design/O4lejqEUd6v8JxsXFnz0qm/Portfolio?node-id=123-2"
    },
    {
      title: 'CookPad',
      description: 'A full-stack recipe sharing app where users can browse, add, edit, and delete recipes with secure authentication.',
      thumbnail: '/assets/home2.png',
      tags: ['Angular', 'Node.js', 'Express', 'MongoDB', 'JWT', 'REST API'],
      type: 'web',
      // liveLink: '#',
      sourceLink: 'https://github.com/Ndivholious112/CookPad.git'
    },
    {
      "title": "Figma Design: Music Streaming App",
      "description": "A UI/UX design for a mobile music streaming application with features like personalized playlists, now playing view, and 'My Music' section.",
      "thumbnail": "/assets/musicappui.png",
      "tags": ["Figma", "UI/UX", "Mobile App", "Music", "Prototyping"],
      "type": "figma",
      "liveLink": "https://www.figma.com/proto/O4lejqEUd6v8JxsXFnz0qm/Portfolio?node-id=44-5&t=55KuB0QhTqtgmE4q-1&scaling=scale-down&content-scaling=fixed&page-id=123%3A4",
      "sourceLink": "https://www.figma.com/design/O4lejqEUd6v8JxsXFnz0qm/Portfolio?node-id=123-4"
    },
    {
      "title": "QuizHelix - Java Console App",
      "description": "A Java console application that quizzes users on South African general knowledge. It features randomized questions and answers, and calculates a final score and grade.",
      "thumbnail": "https://placehold.co/600x400/2D3748/A0AEC0?text=Java+Console+App",
      "tags": ["Java", "Console Application", "OOP", "Quiz", "Terminal"],
      "type": "web",
      // "liveLink": "",
      "sourceLink": "https://github.com/Ndivholious112/QuizHelix.git"
    },
    {
      "title": "Figma Design: Job Portal App",
      "description": "A comprehensive UI/UX design for a mobile job portal application, focusing on user onboarding, job search, and application tracking.",
      "thumbnail": "/assets/job-portal-ui.png",
      "tags": ["Figma", "UI/UX", "Mobile App", "Job Search", "Prototyping"],
      "type": "figma",
      "liveLink": "https://www.figma.com/proto/O4lejqEUd6v8JxsXFnz0qm/Portfolio?node-id=46-131&t=JGPLHBMZiSdYuKZU-1&scaling=min-zoom&content-scaling=fixed&page-id=123%3A6",
      "sourceLink": "https://www.figma.com/design/O4lejqEUd6v8JxsXFnz0qm/Portfolio?node-id=123-6"
    }
  ];

  private _education: EducationEntry[] = [
    {
      degree: "Bachelor of Science (Honours) in Bioinformatics and Computational Biology",
      institution: "Stellenbosch University",
      years: "Feb 2024 - Dec 2024",
      details: [
        "Passionate BSc (Hons) Bioinformatics and Computational Biology graduate with a keen interest in leveraging computational techniques to unravel biological mysteries.",
        "Proficient in data analysis, programming languages, and bioinformatics tools.",
        "Eager to contribute to innovative research projects and advance the understanding of complex biological systems.",
        "Open to collaborations and networking with like-minded professionals."
      ]
    },
    {
      degree: "Bachelor's Degree in Biotechnology",
      institution: "University of the Western Cape",
      years: "Feb 2019 - Dec 2023",
      details: [
        "Passionate BSc Biotechnology graduate with a deep understanding of cutting-edge biotechnological principles and methodologies.",
        "Skilled in molecular biology, genetic engineering, and bioinformatics.",
        "Proficient in laboratory techniques, data analysis, and project management.",
        "Committed to leveraging biotechnology for sustainable solutions in healthcare, agriculture, and environmental conservation.",
        "Eager to contribute expertise to innovative research teams or biotech companies driving positive impact."
      ]
    }
  ];

  constructor() {}

  name(): string {
    return this._name;
  }

  jobTitle(): string {
    return this._jobTitle;
  }

  profilePic(): string {
    return this._profilePic;
  }

  projects(): Project[] {
    return this._projects;
  }

  education(): EducationEntry[] {
    return this._education;
  }

  slugify(value: string): string {
    return value
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .trim()
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
  }

  getProjectBySlug(slug: string): Project | undefined {
    return this._projects.find(p => this.slugify(p.title) === slug);
  }
}
