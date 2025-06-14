
interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilter = ({ categories, selectedCategory, onCategoryChange }: CategoryFilterProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-16">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-6 py-3 rounded-full font-inter font-medium transition-all duration-300 ${
            selectedCategory === category
              ? 'bg-gradient-primary text-white shadow-lg transform scale-105 animate-gradient-shift'
              : 'bg-white text-slate-gray border-2 border-dusty-lavender hover:bg-gradient-to-r hover:from-dusty-lavender/20 hover:to-midnight-navy/20 hover:text-midnight-navy hover:shadow-md'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
