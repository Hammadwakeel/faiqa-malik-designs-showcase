
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

// Function to ensure unique IDs across all categories
const ensureUniqueIds = (projects: Project[], startId: number): Project[] => {
  return projects.map((project, index) => ({
    ...project,
    id: startId + index
  }));
};

// Assign unique ID ranges to each category
const uniqueDressMakingProjects = ensureUniqueIds(dressMakingProjects, 1000);
const uniqueTextileProjects = ensureUniqueIds(textileProjects, 2000);
const uniqueTechnicalProjects = ensureUniqueIds(technicalProjects, 3000);
const uniquePatternMakingProjects = ensureUniqueIds(patternMakingProjects, 4000);
const uniqueFashionDevelopmentProjects = ensureUniqueIds(fashionDevelopmentProjects, 5000);
const uniqueThesisProjects = ensureUniqueIds(thesisProjects, 6000);
const uniqueIllustrationProjects = ensureUniqueIds(illustrationProjects, 7000);
const uniqueBoardsProjects = ensureUniqueIds(boardsProjects, 8000);
const uniqueTechpacksProjects = ensureUniqueIds(techpacksProjects, 9000);
const uniqueWorkProjects = ensureUniqueIds(workProjects, 10000);

export const portfolioProjects: Project[] = [
  ...uniqueDressMakingProjects,
  ...uniqueTextileProjects,
  ...uniqueTechnicalProjects,
  ...uniquePatternMakingProjects,
  ...uniqueFashionDevelopmentProjects,
  ...uniqueThesisProjects,
  ...uniqueIllustrationProjects,
  ...uniqueBoardsProjects,
  ...uniqueTechpacksProjects,
  ...uniqueWorkProjects
];

export const portfolioCategories = ['All Work', 'Dress making ( pattern+ draping)', 'Textile', 'Technical', 'Pattern Making', 'Techpacks', 'Fashion Development', 'Thesis', 'Illustration', 'Boards', 'Work'];
