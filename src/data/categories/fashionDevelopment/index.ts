
import { Project } from '../../types';
import { conceptualDesigns } from './conceptualDesigns';
import { contemporaryDesigns } from './contemporaryDesigns';
import { structuralDesigns } from './structuralDesigns';
import { drapingStudies } from './drapingStudies';
import { artisticIllustrations } from './artisticIllustrations';

export const fashionDevelopmentProjects: Project[] = [
  ...conceptualDesigns,
  ...contemporaryDesigns,
  ...structuralDesigns,
  ...drapingStudies,
  ...artisticIllustrations
];
