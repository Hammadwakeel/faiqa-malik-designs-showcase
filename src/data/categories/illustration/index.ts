
import { Project } from '../../types';
import { victorianGothicProjects } from './victorianGothic';
import { contemporaryUrbanProjects } from './contemporaryUrban';
import { avantGardeProjects } from './avantGarde';
import { technicalDevelopmentProjects } from './technicalDevelopment';

export const illustrationProjects: Project[] = [
  ...victorianGothicProjects,
  ...contemporaryUrbanProjects,
  ...avantGardeProjects,
  ...technicalDevelopmentProjects
];
