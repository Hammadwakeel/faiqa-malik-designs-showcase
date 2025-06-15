
import { useState } from 'react';
import PortfolioHeader from '../components/portfolio/PortfolioHeader';
import CategoryFilter from '../components/portfolio/CategoryFilter';
import ProjectsGrid from '../components/portfolio/ProjectsGrid';
import CallToAction from '../components/portfolio/CallToAction';
import { portfolioProjects, portfolioCategories } from '../data/portfolioData';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Work');

  const filteredProjects = selectedCategory === 'All Work' 
    ? portfolioProjects 
    : portfolioProjects.filter(project => project.category === selectedCategory);

  console.log('Selected category:', selectedCategory);
  console.log('Filtered projects count:', filteredProjects.length);
  console.log('Sample filtered projects:', filteredProjects.slice(0, 3).map(p => ({ id: p.id, title: p.title, category: p.category })));

  return (
    <div className="min-h-screen py-20 bg-gradient-tertiary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PortfolioHeader />
        <CategoryFilter 
          categories={portfolioCategories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
        <ProjectsGrid projects={filteredProjects} />
        <CallToAction />
      </div>
    </div>
  );
};

export default Portfolio;
