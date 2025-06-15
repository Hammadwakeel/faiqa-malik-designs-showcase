
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
import { thesisProjects } from './categories/thesis';

export type { Project };

export const portfolioProjects: Project[] = [
  ...dressMakingProjects,
  ...textileProjects,
  ...technicalProjects,
  ...thesisProjects,
  ...patternMakingProjects,
  ...techpacksProjects,
  ...fashionDevelopmentProjects,
  ...illustrationProjects,
  ...boardsProjects,
  ...workProjects
];

export const portfolioCategories = ['All Work', 'Dress making ( pattern+ draping)', 'Textile', 'Technical', 'Thesis', 'Pattern Making', 'Techpacks', 'Fashion Development', 'Illustration', 'Boards', 'Work'];
