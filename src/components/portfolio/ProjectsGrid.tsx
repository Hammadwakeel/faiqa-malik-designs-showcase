
import ProjectCard from './ProjectCard';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  tools: string[];
  year: string;
}

interface ProjectsGridProps {
  projects: Project[];
}

const ProjectsGrid = ({ projects }: ProjectsGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectsGrid;
