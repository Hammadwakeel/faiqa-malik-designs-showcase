import { Palette, Scissors, PenTool, Layers, Users, Clock, Target, Lightbulb } from 'lucide-react';

const Skills = () => {
  const technicalSkills = [
    { name: "Sewing", level: 95, icon: Scissors },
    { name: "Pattern Making", level: 90, icon: PenTool },
    { name: "Fashion Illustration", level: 88, icon: Palette },
    { name: "Draping", level: 88, icon: Layers },
    { name: "Garment Construction", level: 92, icon: Scissors },
    { name: "Textile Sourcing", level: 80, icon: Target },
    { name: "Trend Forecasting", level: 85, icon: Lightbulb },
    { name: "Technical Drawing", level: 90, icon: PenTool },
    { name: "Adobe Photoshop", level: 85, icon: Palette },
    { name: "Adobe Illustrator", level: 88, icon: Palette },
    { name: "CAD for Fashion (AutoCAD)", level: 75, icon: Layers },
    { name: "Fabric Knowledge", level: 90, icon: Target },
    { name: "Textile Design", level: 85, icon: Layers },
    { name: "Technical Specification", level: 88, icon: PenTool },
    { name: "Techpack Development", level: 82, icon: Target },
    { name: "Research Boards", level: 87, icon: Lightbulb },
    { name: "Digital Dress Making", level: 80, icon: Layers },
    { name: "Digital Bedding", level: 78, icon: Layers },
    { name: "Digital Pattern", level: 83, icon: PenTool }
  ];

  const softSkills = [
    { name: "Team Leadership", level: 88, icon: Users },
    { name: "Creative Collaboration", level: 92, icon: Users },
    { name: "Communication", level: 90, icon: Users },
    { name: "Problem-Solving", level: 95, icon: Lightbulb },
    { name: "Time Management", level: 85, icon: Clock },
    { name: "Attention to Detail", level: 98, icon: Target },
    { name: "Adaptability", level: 90, icon: Lightbulb },
    { name: "Decision-Making", level: 87, icon: Target }
  ];

  const softwareTools = [
    { name: "Adobe Photoshop", description: "Photo editing and digital illustration", level: "Advanced" },
    { name: "Adobe Illustrator", description: "Vector graphics and fashion illustrations", level: "Advanced" },
    { name: "Canva", description: "Graphic design and visual content creation", level: "Advanced" }
  ];

  const languages = [
    { name: "Urdu", level: "Native/Fluent" },
    { name: "English", level: "Professional" }
  ];

  const getLevelColor = (level: number) => {
    if (level >= 90) return 'bg-gradient-to-r from-midnight-navy to-dusty-lavender';
    if (level >= 80) return 'bg-gradient-to-r from-dusty-lavender to-peach-accent';
    if (level >= 70) return 'bg-gradient-to-r from-peach-accent to-dusty-lavender';
    return 'bg-gradient-to-r from-slate-gray to-dusty-lavender';
  };

  const getLevelText = (level: number) => {
    if (level >= 90) return 'Expert';
    if (level >= 80) return 'Advanced';
    if (level >= 70) return 'Intermediate';
    return 'Beginner';
  };

  return (
    <div className="min-h-screen py-20 bg-gradient-to-br from-lavender-bg via-white to-dusty-lavender/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-8 mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold bg-gradient-to-r from-midnight-navy via-dusty-lavender to-peach-accent bg-clip-text text-transparent">
            Skills & Expertise
          </h1>
          <p className="text-xl text-slate-gray font-inter max-w-3xl mx-auto">
            A comprehensive overview of my technical capabilities, creative skills, 
            and professional competencies in fashion design and beyond.
          </p>
        </div>

        {/* Technical Skills */}
        <div className="mb-20">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-playfair font-bold bg-gradient-to-r from-midnight-navy to-dusty-lavender bg-clip-text text-transparent mb-4">
              Technical Skills
            </h2>
            <p className="text-lg text-slate-gray font-inter max-w-2xl mx-auto">
              Core competencies in fashion design, pattern making, and textile expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalSkills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <div 
                  key={index} 
                  className="bg-gradient-to-br from-white via-lavender-bg to-dusty-lavender/20 rounded-xl shadow-lg p-6 border border-dusty-lavender/20 hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in backdrop-blur-sm"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-dusty-lavender to-peach-accent rounded-lg flex items-center justify-center transform transition-transform duration-300 group-hover:rotate-6 shadow-md">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-playfair font-semibold bg-gradient-to-r from-midnight-navy to-dusty-lavender bg-clip-text text-transparent text-lg">
                        {skill.name}
                      </h3>
                      <p className="text-sm text-slate-gray font-inter">
                        {getLevelText(skill.level)}
                      </p>
                    </div>
                  </div>
                  <div className="w-full bg-gradient-to-r from-gray-200 to-gray-300 rounded-full h-2 overflow-hidden">
                    <div
                      className={`h-2 rounded-full transition-all duration-1000 ease-out ${getLevelColor(skill.level)}`}
                      style={{ 
                        width: `${skill.level}%`,
                        animationDelay: `${index * 0.1 + 0.5}s`
                      }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Soft Skills */}
        <div className="mb-20">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-playfair font-bold bg-gradient-to-r from-midnight-navy to-dusty-lavender bg-clip-text text-transparent mb-4">
              Soft Skills
            </h2>
            <p className="text-lg text-slate-gray font-inter max-w-2xl mx-auto">
              Personal qualities and interpersonal skills that drive collaboration and leadership
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {softSkills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <div 
                  key={index} 
                  className="bg-gradient-to-br from-dusty-lavender/20 via-lavender-bg to-peach-accent/20 rounded-xl p-6 text-center hover:bg-gradient-to-br hover:from-white hover:via-lavender-bg hover:to-dusty-lavender/30 hover:shadow-lg transition-all duration-300 border border-dusty-lavender/30 transform hover:scale-105 animate-fade-in backdrop-blur-sm"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-dusty-lavender to-peach-accent rounded-full flex items-center justify-center mx-auto mb-4 transform transition-transform duration-300 hover:rotate-12 shadow-lg">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-playfair font-semibold bg-gradient-to-r from-midnight-navy to-dusty-lavender bg-clip-text text-transparent mb-2 text-lg">
                    {skill.name}
                  </h3>
                  <div className="w-full bg-gradient-to-r from-white to-gray-100 rounded-full h-2 mb-2 overflow-hidden">
                    <div
                      className="h-2 bg-gradient-to-r from-dusty-lavender to-peach-accent rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: `${skill.level}%`,
                        animationDelay: `${index * 0.1 + 0.5}s`
                      }}
                    ></div>
                  </div>
                  <p className="text-sm text-slate-gray font-inter">
                    {getLevelText(skill.level)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Software & Tools */}
        <div className="mb-20">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-playfair font-bold bg-gradient-to-r from-midnight-navy to-dusty-lavender bg-clip-text text-transparent mb-4">
              Software & Tools
            </h2>
            <p className="text-lg text-slate-gray font-inter max-w-2xl mx-auto">
              Professional software proficiency for modern fashion design workflows
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {softwareTools.map((tool, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-br from-white via-lavender-bg to-dusty-lavender/20 rounded-xl shadow-lg p-6 border border-dusty-lavender/20 hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in backdrop-blur-sm"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-playfair font-semibold bg-gradient-to-r from-midnight-navy to-dusty-lavender bg-clip-text text-transparent">
                      {tool.name}
                    </h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-inter font-medium transform transition-transform duration-300 hover:scale-110 ${
                      tool.level === 'Advanced' ? 'bg-gradient-to-r from-midnight-navy to-dusty-lavender text-white' :
                      tool.level === 'Intermediate' ? 'bg-gradient-to-r from-dusty-lavender to-peach-accent text-white' :
                      'bg-gradient-to-r from-peach-accent to-dusty-lavender text-white'
                    }`}>
                      {tool.level}
                    </span>
                  </div>
                  <p className="text-slate-gray font-inter text-sm">
                    {tool.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div className="mb-20">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-playfair font-bold bg-gradient-to-r from-midnight-navy to-dusty-lavender bg-clip-text text-transparent mb-4">
              Languages
            </h2>
            <p className="text-lg text-slate-gray font-inter max-w-2xl mx-auto">
              Communication skills across multiple languages for global collaboration
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {languages.map((lang, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-br from-white via-lavender-bg to-dusty-lavender/30 rounded-xl shadow-lg p-8 text-center border border-dusty-lavender/20 hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in backdrop-blur-sm"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <h3 className="text-2xl font-playfair font-bold bg-gradient-to-r from-midnight-navy to-dusty-lavender bg-clip-text text-transparent mb-2">
                  {lang.name}
                </h3>
                <p className="text-lg font-inter font-medium bg-gradient-to-r from-dusty-lavender to-peach-accent bg-clip-text text-transparent">
                  {lang.level}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-br from-midnight-navy via-dusty-lavender/20 to-midnight-navy rounded-2xl p-8 md:p-12 text-white animate-fade-in border border-dusty-lavender/30 shadow-2xl backdrop-blur-sm">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 bg-gradient-to-r from-white to-dusty-lavender/90 bg-clip-text text-transparent">
            Let's Collaborate
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Ready to bring my diverse skill set to your next fashion project? 
            Let's discuss how we can create something extraordinary together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:designerfaiqamalik7@gmail.com"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-dusty-lavender to-peach-accent text-white font-inter font-medium rounded-lg hover:from-dusty-lavender/90 hover:to-peach-accent/90 transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Start a Conversation
            </a>
            <a
              href="/portfolio"
              className="inline-flex items-center px-8 py-3 border-2 border-gradient-to-r border-dusty-lavender text-white font-inter font-medium rounded-lg bg-gradient-to-r from-transparent to-dusty-lavender/20 hover:from-dusty-lavender/20 hover:to-peach-accent/20 hover:border-peach-accent transition-all duration-200 transform hover:scale-105"
            >
              View My Work
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
