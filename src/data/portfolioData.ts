
import { Project } from './types';
import { workProjects } from './categories/work';
import { technicalProjects } from './categories/technical';
import { textileProjects } from './categories/textile';
import { dressMakingProjects } from './categories/dressMaking';
import { patternMakingProjects } from './categories/patternMaking';
import { techpacksProjects } from './categories/techpacks';
import { fashionDevelopmentProjects } from './categories/fashionDevelopment';
import { illustrationProjects } from './categories/illustration';
import { boardsProjects } from './categories/boards';

export type { Project };

export const portfolioProjects: Project[] = [
  ...workProjects,
  ...technicalProjects,
  ...textileProjects,
  ...dressMakingProjects,
  ...patternMakingProjects,
  ...techpacksProjects,
  ...fashionDevelopmentProjects,
  ...illustrationProjects,
  ...boardsProjects
];

export const portfolioCategories = ['All Work', 'Work', 'Technical', 'Textile', 'Dress making ( pattern+ draping)', 'Pattern Making', 'Techpacks', 'Fashion Development', 'Illustration', 'Boards'];
