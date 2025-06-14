
import { Palette, Scissors, PenTool, Layers, Users, Clock, Target, Lightbulb } from 'lucide-react';

const Skills = () => {
  const technicalSkills = [
    { name: "Sewing", level: 95, icon: Scissors },
    { name: "Pattern Making", level: 90, icon: PenTool },
    { name: "Illustration", level: 85, icon: Palette },
    { name: "Draping", level: 88, icon: Layers },
    { name: "Garment Construction", level: 92, icon: Scissors },
    { name: "Textile Sourcing", level: 80, icon: Target },
    { name: "Trend Forecasting", level: 85, icon: Lightbulb },
    { name: "Technical Drawing", level: 90, icon: PenTool },
    { name: "Adobe Photoshop", level: 85, icon: Palette },
    { name: "Adobe Illustrator", level: 88, icon: Palette },
    { name: "CAD for Fashion (AutoCAD)", level: 75, icon: Layers },
    { name: "Fabric Knowledge", level: 90, icon: Target }
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
    { name: "AutoCAD", description: "Technical drawings and pattern making", level: "Intermediate" },
    { name: "CLO 3D", description: "3D fashion design and visualization", level: "Intermediate" },
    { name: "CorelDRAW", description: "Graphics design and layouts", level: "Intermediate" }
  ];

  const languages = [
    { name: "Urdu", level: "Native/Fluent", proficiency: 100 },
    { name: "English", level: "Professional", proficiency: 85 }
  ];

  const getLevelColor = (level: number) => {
    if (level >= 90) return 'bg-midnight-navy';
    if (level >= 80) return 'bg-dusty-lavender';
    if (level >= 70) return 'bg-peach-accent';
    return 'bg-slate-gray';
  };

  const getLevelText = (level: number) => {
    if (level >= 90) return 'Expert';
    if (level >= 80) return 'Advanced';
    if (level >= 70) return 'Intermediate';
    return 'Beginner';
  };

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-8 mb-16">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-midnight-navy">
            Skills & Expertise
          </h1>
          <p className="text-xl text-slate-gray font-inter max-w-3xl mx-auto">
            A comprehensive overview of my technical capabilities, creative skills, 
            and professional competencies in fashion design and beyond.
          </p>
        </div>

        {/* Technical Skills */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-playfair font-bold text-midnight-navy mb-4">
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
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-dusty-lavender/10 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-dusty-lavender/10 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-dusty-lavender" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-playfair font-semibold text-midnight-navy">
                        {skill.name}
                      </h3>
                      <p className="text-sm text-slate-gray font-inter">
                        {getLevelText(skill.level)}
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-inter font-medium text-slate-gray">
                        Proficiency
                      </span>
                      <span className="text-sm font-inter font-medium text-midnight-navy">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full transition-all duration-1000 ${getLevelColor(skill.level)}`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Soft Skills */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-playfair font-bold text-midnight-navy mb-4">
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
                <div key={index} className="bg-lavender-bg rounded-xl p-6 text-center hover:bg-white hover:shadow-lg transition-all duration-300 border border-dusty-lavender/20">
                  <div className="w-16 h-16 bg-dusty-lavender rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-playfair font-semibold text-midnight-navy mb-2">
                    {skill.name}
                  </h3>
                  <div className="w-full bg-white rounded-full h-2 mb-2">
                    <div
                      className="h-2 bg-dusty-lavender rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-slate-gray font-inter">
                    {skill.level}%
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Software & Tools */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-playfair font-bold text-midnight-navy mb-4">
              Software & Tools
            </h2>
            <p className="text-lg text-slate-gray font-inter max-w-2xl mx-auto">
              Professional software proficiency for modern fashion design workflows
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {softwareTools.map((tool, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-dusty-lavender/10">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-playfair font-semibold text-midnight-navy">
                      {tool.name}
                    </h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-inter font-medium ${
                      tool.level === 'Advanced' ? 'bg-midnight-navy text-white' :
                      tool.level === 'Intermediate' ? 'bg-dusty-lavender text-white' :
                      'bg-peach-accent text-white'
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
          <div className="text-center mb-12">
            <h2 className="text-4xl font-playfair font-bold text-midnight-navy mb-4">
              Languages
            </h2>
            <p className="text-lg text-slate-gray font-inter max-w-2xl mx-auto">
              Communication skills across multiple languages for global collaboration
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {languages.map((lang, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 text-center border border-dusty-lavender/10">
                <h3 className="text-2xl font-playfair font-bold text-midnight-navy mb-2">
                  {lang.name}
                </h3>
                <p className="text-dusty-lavender font-inter font-medium mb-4">
                  {lang.level}
                </p>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="h-3 bg-dusty-lavender rounded-full transition-all duration-1000"
                    style={{ width: `${lang.proficiency}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-midnight-navy rounded-2xl p-8 md:p-12 text-white">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
            Let's Collaborate
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Ready to bring my diverse skill set to your next fashion project? 
            Let's discuss how we can create something extraordinary together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:designerfaiqamalik7@gmail.com"
              className="inline-flex items-center px-8 py-3 bg-dusty-lavender text-white font-inter font-medium rounded-lg hover:bg-dusty-lavender/90 transition-colors duration-200"
            >
              Start a Conversation
            </a>
            <a
              href="/portfolio"
              className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-inter font-medium rounded-lg hover:bg-white hover:text-midnight-navy transition-colors duration-200"
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
