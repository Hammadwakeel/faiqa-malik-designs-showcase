
import { Project } from '../../types';
import { costumePerformanceProjects } from './costumePerformance';
import { designStudiesProjects } from './designStudies';
import { textileSamplesProjects } from './textileSamples';
import { psychologicalStudiesProjects } from './psychologicalStudies';

export const thesisProjects: Project[] = [
  ...costumePerformanceProjects,
  ...designStudiesProjects,
  ...textileSamplesProjects,
  ...psychologicalStudiesProjects
];
