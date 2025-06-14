
import { Project } from './types';
import { workProjects } from './categories/work';
import { technicalProjects } from './categories/technical';
import { textileProjects } from './categories/textile';
import { dressMakingProjects } from './categories/dressMaking';
import { techpacksProjects } from './categories/techpacks';
import { fashionDevelopmentProjects } from './categories/fashionDevelopment';
import { illustrationProjects } from './categories/illustration';

export type { Project };

export const portfolioProjects: Project[] = [
  ...workProjects,
  ...technicalProjects,
  ...textileProjects,
  ...dressMakingProjects,
  ...techpacksProjects,
  ...fashionDevelopmentProjects,
  ...illustrationProjects
];

export const portfolioCategories = ['All Work', 'Work', 'Technical', 'Textile', 'Dress making ( pattern+ draping)', 'Techpacks', 'Fashion Development', 'Illustration'];
