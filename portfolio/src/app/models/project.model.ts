export interface Project {
  title: string;
  description: string;
  thumbnail: string;
  tags: string[];
  type: 'web' | 'figma';
  liveLink?: string;
  sourceLink?: string;
}
