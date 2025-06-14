
import { Project } from './types';
import { jacketDesignsProjects } from './categories/jacketDesigns';
import { boujeeCollectionProjects } from './categories/boujeeCollection';
import { sportsProjects } from './categories/sports';
import { technicalProjects } from './categories/technical';
import { textileProjects } from './categories/textile';

export type { Project };

export const portfolioProjects: Project[] = [
  ...jacketDesignsProjects,
  ...boujeeCollectionProjects,
  ...sportsProjects,
  ...technicalProjects,
  ...textileProjects
];

export const portfolioCategories = ['All Work', 'Jacket Designs', 'Boujee Collection', 'Sports', 'Technical', 'Textile'];
