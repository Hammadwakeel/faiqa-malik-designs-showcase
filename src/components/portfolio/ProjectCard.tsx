
import { Eye } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  tools: string[];
  year: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="group bg-gradient-to-br from-white/80 to-dusty-lavender/10 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105 border border-dusty-lavender/20">
      <div className="relative h-64 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-contain bg-gradient-to-br from-gray-50 to-white group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight-navy/0 via-transparent to-transparent group-hover:from-midnight-navy/30 transition-all duration-300"></div>
        <div className="absolute top-4 right-4 bg-gradient-secondary text-white px-3 py-1 rounded-full text-sm font-inter font-medium shadow-lg">
          {project.year}
        </div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="bg-gradient-to-r from-white/90 to-dusty-lavender/20 backdrop-blur-sm text-midnight-navy p-3 rounded-full shadow-xl hover:bg-gradient-primary hover:text-white transition-all duration-300 transform hover:scale-110">
            <Eye size={20} />
          </button>
        </div>
      </div>
      
      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-playfair font-semibold text-gradient-primary">
              {project.title}
            </h3>
            <span className="text-sm text-dusty-lavender font-inter font-medium bg-gradient-to-r from-dusty-lavender/10 to-peach-accent/10 px-2 py-1 rounded border border-dusty-lavender/20">
              {project.category}
            </span>
          </div>
          <p className="text-slate-gray font-inter text-sm leading-relaxed">
            {project.description}
          </p>
        </div>
        
        <div className="space-y-2">
          <p className="text-sm font-inter font-medium text-gradient-primary">
            Tools & Techniques:
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool, index) => (
              <span
                key={index}
                className="text-xs bg-gradient-to-r from-lavender-bg to-dusty-lavender/10 text-slate-gray px-2 py-1 rounded font-inter border border-dusty-lavender/10"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
