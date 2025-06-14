
import { useState } from 'react';
import PortfolioHeader from '../components/portfolio/PortfolioHeader';
import CategoryFilter from '../components/portfolio/CategoryFilter';
import ProjectsGrid from '../components/portfolio/ProjectsGrid';
import TextilePortfolio from '../components/portfolio/TextilePortfolio';
import CallToAction from '../components/portfolio/CallToAction';
import { portfolioProjects, portfolioCategories } from '../data/portfolioData';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Work');

  const filteredProjects = selectedCategory === 'All Work' 
    ? portfolioProjects 
    : portfolioProjects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen py-20 bg-gradient-tertiary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PortfolioHeader />
        <TextilePortfolio />
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
