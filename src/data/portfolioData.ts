
import { Project } from './types';
import { jacketDesignsProjects } from './categories/jacketDesigns';
import { boujeeCollectionProjects } from './categories/boujeeCollection';
import { sportsProjects } from './categories/sports';
import { technicalProjects } from './categories/technical';
import { textileProjects } from './categories/textile';
import { dressMakingProjects } from './categories/dressMaking';

export type { Project };

export const portfolioProjects: Project[] = [
  ...jacketDesignsProjects,
  ...boujeeCollectionProjects,
  ...sportsProjects,
  ...technicalProjects,
  ...textileProjects,
  ...dressMakingProjects
];

export const portfolioCategories = ['All Work', 'Jacket Designs', 'Boujee Collection', 'Sports', 'Technical', 'Textile', 'Dress Making'];
