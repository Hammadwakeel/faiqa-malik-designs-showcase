import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Bachelor's in Fashion Design",
      institution: "Iqra University, Islamabad",
      period: "2020–2024",
      description: "Comprehensive program covering fashion design fundamentals, pattern making, textile science, and business aspects of fashion industry. Graduated with honors and completed multiple design projects.",
      highlights: [
        "Specialized in sustainable fashion practices",
        "Led student fashion show committee",
        "Completed thesis on 'Traditional Pakistani Textiles in Contemporary Fashion'"
      ],
      type: "Degree"
    },
    {
      degree: "Intermediate in Arts",
      institution: "National Textile Institute, G-6/3, Islamabad",
      period: "2018–2020",
      description: "Foundation studies in arts and design with focus on textile and fashion fundamentals. Developed core skills in drawing, color theory, and design principles.",
      highlights: [
        "Achieved distinction in Design and Color Theory",
        "Participated in inter-collegiate design competitions",
        "Completed internship at local fashion house"
      ],
      type: "Diploma"
    },
    {
      degree: "Matriculation in Computer Science",
      institution: "Jinnah Public School, Attock",
      period: "2016–2017",
      description: "Secondary education with emphasis on analytical thinking and problem-solving skills that later proved valuable in technical aspects of fashion design.",
      highlights: [
        "Developed strong analytical and logical thinking skills",
        "Participated in school design and arts activities",
        "Maintained academic excellence throughout"
      ],
      type: "Secondary"
    }
  ];

  const certifications = [
    {
      title: "Textile and Fashion Designing Certificate",
      issuer: "National Textile Institute, Islamabad",
      period: "2018–2020",
      description: "Intensive certification program covering advanced textile knowledge, pattern making, and commercial fashion design practices.",
      skills: ["Advanced Pattern Making", "Textile Science", "Fashion Illustration", "Garment Construction"]
    },
    {
      title: "Financial Literacy Training Program",
      issuer: "National Textile Institute",
      period: "2020",
      description: "Comprehensive program focusing on financial management and business planning for fashion entrepreneurs.",
      skills: ["Business Planning", "Financial Management", "Cost Analysis", "Market Research"]
    },
    {
      title: "Corporate Social Responsibility Project",
      issuer: "Iqra University",
      period: "2022",
      description: "Certificate of appreciation for participation in university CSR initiatives and community development projects.",
      skills: ["Community Engagement", "Project Management", "Social Impact", "Leadership"]
    }
  ];

  const professionalCertificates = [
    {
      title: "Certificate of Internship",
      company: "Eleven Clothing",
      image: "/lovable-uploads/faa6cade-072d-4609-9934-449854d7ab63.png",
      description: "Completed internship program with distinction"
    },
    {
      title: "Internship Completion Letter",
      company: "Eleven Clothing",
      image: "/lovable-uploads/a81f3b03-091d-4cf0-85b2-8ffc54b51513.png",
      description: "Recognition letter for outstanding performance and creativity"
    },
    {
      title: "Corporate Social Responsibility Certificate",
      company: "Iqra University",
      image: "/lovable-uploads/ae013835-6be6-4736-9c7b-da76d669f62b.png",
      description: "Certificate of appreciation for CSR project participation"
    },
    {
      title: "Internship Completion Certificate",
      company: "Sui Dhaga Bridals",
      image: "/lovable-uploads/574886d3-5057-4952-bca1-83c6ce3875c7.png",
      description: "Successfully completed bridal wear design internship"
    },
    {
      title: "Financial Literacy Certificate",
      company: "National Textile Institute",
      image: "/lovable-uploads/e92fb9b3-434c-4a04-ba22-a8d3b238e088.png",
      description: "Completed financial literacy training program"
    },
    {
      title: "Youth Development Certificate",
      company: "Helping Hand Organization",
      image: "/lovable-uploads/10ad8a63-3f6f-4179-bf15-b90548ed98f4.png",
      description: "Recognition for youth development and humanitarian efforts"
    },
    {
      title: "Fashion Design Certificate",
      company: "National Textile Institute",
      image: "/lovable-uploads/9154ec23-6fd6-4a88-b6e2-33d7f03b04ea.png",
      description: "Specialized course in textile and fashion designing"
    }
  ];

  const achievements = [
    {
      title: "Dean's List",
      year: "2022, 2023",
      description: "Academic excellence recognition for outstanding performance"
    },
    {
      title: "Best Design Portfolio",
      year: "2024",
      description: "University award for exceptional final year design portfolio"
    },
    {
      title: "Fashion Week Participant",
      year: "2023",
      description: "Selected to showcase designs at university fashion week"
    },
    {
      title: "Design Competition Winner",
      year: "2022",
      description: "First place in inter-university sustainable fashion design competition"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Degree':
        return 'bg-gradient-to-r from-midnight-navy to-dusty-lavender text-white';
      case 'Diploma':
        return 'bg-gradient-to-r from-dusty-lavender to-peach-accent text-white';
      case 'Secondary':
        return 'bg-gradient-to-r from-peach-accent to-dusty-lavender text-white';
      default:
        return 'bg-gradient-to-r from-gray-400 to-gray-600 text-white';
    }
  };

  return (
    <div className="min-h-screen py-20 bg-gradient-to-br from-lavender-bg via-white to-dusty-lavender/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-8 mb-16">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold bg-gradient-to-r from-midnight-navy via-dusty-lavender to-peach-accent bg-clip-text text-transparent">
            Education & Certifications
          </h1>
          <p className="text-xl text-slate-gray font-inter max-w-3xl mx-auto">
            My academic journey and professional development through formal education, 
            specialized training, and continuous learning in fashion design.
          </p>
        </div>

        {/* Image Gallery Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-playfair font-bold bg-gradient-to-r from-midnight-navy to-dusty-lavender bg-clip-text text-transparent mb-4">
              Academic Journey
            </h2>
            <p className="text-lg text-slate-gray font-inter max-w-2xl mx-auto">
              Visual highlights from my educational path and achievements
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-dusty-lavender to-peach-accent rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-white rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/lovable-uploads/01054f50-abaa-4fde-878b-239ba22b59d6.png" 
                  alt="Academic Achievement" 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight-navy/50 to-transparent"></div>
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-peach-accent to-midnight-navy rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-white rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/lovable-uploads/152d74ae-0b8c-408c-ba56-a83c1803db40.png" 
                  alt="Design Portfolio" 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dusty-lavender/50 to-transparent"></div>
              </div>
            </div>
            
            <div className="relative group md:col-span-2 lg:col-span-1">
              <div className="absolute -inset-1 bg-gradient-to-r from-midnight-navy to-dusty-lavender rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-white rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/lovable-uploads/1d478f13-7cd4-44a0-8700-3a93779fdc25.png" 
                  alt="Educational Excellence" 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-peach-accent/50 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Education Timeline */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-playfair font-bold bg-gradient-to-r from-midnight-navy to-dusty-lavender bg-clip-text text-transparent mb-4">
              Academic Background
            </h2>
            <p className="text-lg text-slate-gray font-inter max-w-2xl mx-auto">
              Formal education foundation building comprehensive design knowledge and skills
            </p>
          </div>

          <div className="relative">
            {/* Timeline line with gradient */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-dusty-lavender via-peach-accent to-midnight-navy"></div>

            <div className="space-y-12">
              {education.map((edu, index) => (
                <div key={index} className={`relative flex items-start ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Timeline dot with gradient */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-br from-dusty-lavender to-peach-accent rounded-full border-4 border-white shadow-lg z-10"></div>

                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="relative group">
                      <div className="absolute -inset-1 bg-gradient-to-r from-dusty-lavender via-peach-accent to-midnight-navy rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                      <div className="relative bg-gradient-to-br from-white to-lavender-bg rounded-2xl shadow-lg p-8 border border-dusty-lavender/10 hover:shadow-xl transition-shadow duration-300">
                        <div className="space-y-4">
                          {/* Header */}
                          <div className="space-y-3">
                            <div className="flex flex-wrap items-center gap-2 mb-2">
                              <span className={`px-3 py-1 rounded-full text-xs font-inter font-medium ${getTypeColor(edu.type)}`}>
                                {edu.type}
                              </span>
                              <span className="text-sm bg-gradient-to-r from-dusty-lavender to-peach-accent bg-clip-text text-transparent font-inter font-medium">
                                {edu.period}
                              </span>
                            </div>
                            <h3 className="text-2xl font-playfair font-bold bg-gradient-to-r from-midnight-navy to-dusty-lavender bg-clip-text text-transparent">
                              {edu.degree}
                            </h3>
                            <div className="flex items-center space-x-4 text-slate-gray">
                              <div className="flex items-center space-x-1">
                                <GraduationCap size={16} className="text-dusty-lavender" />
                                <span className="font-inter font-medium">{edu.institution}</span>
                              </div>
                            </div>
                          </div>

                          {/* Description */}
                          <p className="text-slate-gray font-inter leading-relaxed">
                            {edu.description}
                          </p>

                          {/* Highlights */}
                          <div className="space-y-2">
                            <h4 className="font-inter font-semibold bg-gradient-to-r from-midnight-navy to-dusty-lavender bg-clip-text text-transparent">
                              Key Highlights:
                            </h4>
                            <ul className="space-y-1">
                              {edu.highlights.map((highlight, hIndex) => (
                                <li key={hIndex} className="flex items-start space-x-2">
                                  <div className="w-1.5 h-1.5 bg-gradient-to-r from-dusty-lavender to-peach-accent rounded-full mt-2 flex-shrink-0"></div>
                                  <span className="text-slate-gray font-inter text-sm">
                                    {highlight}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-playfair font-bold bg-gradient-to-r from-midnight-navy to-dusty-lavender bg-clip-text text-transparent mb-4">
              Professional Certifications
            </h2>
            <p className="text-lg text-slate-gray font-inter max-w-2xl mx-auto">
              Specialized training and certifications that enhance my professional expertise
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-dusty-lavender via-peach-accent to-midnight-navy rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-gradient-to-br from-lavender-bg to-white rounded-2xl p-8 border border-dusty-lavender/20">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                    <div className="lg:col-span-2 space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2 mb-2">
                          <Award className="w-5 h-5 text-dusty-lavender" />
                          <span className="text-sm bg-gradient-to-r from-dusty-lavender to-peach-accent bg-clip-text text-transparent font-inter font-medium">
                            {cert.period}
                          </span>
                        </div>
                        <h3 className="text-2xl font-playfair font-bold bg-gradient-to-r from-midnight-navy to-dusty-lavender bg-clip-text text-transparent">
                          {cert.title}
                        </h3>
                        <p className="text-slate-gray font-inter font-medium">
                          {cert.issuer}
                        </p>
                      </div>

                      <p className="text-slate-gray font-inter leading-relaxed">
                        {cert.description}
                      </p>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-inter font-semibold bg-gradient-to-r from-midnight-navy to-dusty-lavender bg-clip-text text-transparent">
                        Skills Acquired:
                      </h4>
                      <div className="space-y-2">
                        {cert.skills.map((skill, sIndex) => (
                          <div key={sIndex} className="relative group">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-dusty-lavender to-peach-accent rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                            <div className="relative bg-white px-3 py-2 rounded-lg border border-dusty-lavender/20">
                              <span className="text-sm font-inter text-slate-gray">
                                {skill}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Certificates Gallery */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-playfair font-bold bg-gradient-to-r from-midnight-navy to-dusty-lavender bg-clip-text text-transparent mb-4">
              Professional Certificates Gallery
            </h2>
            <p className="text-lg text-slate-gray font-inter max-w-2xl mx-auto">
              Official certificates and recognition documents from my educational and professional journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {professionalCertificates.map((cert, index) => (
              <div key={index} className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-dusty-lavender via-peach-accent to-midnight-navy rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-gradient-to-br from-white to-lavender-bg rounded-xl shadow-lg p-6 border border-dusty-lavender/20 hover:shadow-xl transition-shadow duration-300">
                  <div className="space-y-4">
                    <div className="relative overflow-hidden rounded-lg">
                      <img 
                        src={cert.image} 
                        alt={cert.title} 
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-midnight-navy/20 to-transparent"></div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Award className="w-5 h-5 text-dusty-lavender" />
                        <h3 className="text-lg font-playfair font-semibold bg-gradient-to-r from-midnight-navy to-dusty-lavender bg-clip-text text-transparent">
                          {cert.title}
                        </h3>
                      </div>
                      <p className="text-slate-gray font-inter font-medium text-sm">
                        {cert.company}
                      </p>
                      <p className="text-slate-gray font-inter text-sm">
                        {cert.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-playfair font-bold bg-gradient-to-r from-midnight-navy to-dusty-lavender bg-clip-text text-transparent mb-4">
              Academic Achievements
            </h2>
            <p className="text-lg text-slate-gray font-inter max-w-2xl mx-auto">
              Recognition and awards received during my educational journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-dusty-lavender to-peach-accent rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-gradient-to-br from-white to-lavender-bg rounded-xl shadow-lg p-6 border border-dusty-lavender/10 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-dusty-lavender to-peach-accent rounded-full flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <h3 className="text-lg font-playfair font-semibold bg-gradient-to-r from-midnight-navy to-dusty-lavender bg-clip-text text-transparent">
                          {achievement.title}
                        </h3>
                        <span className="text-sm bg-gradient-to-r from-dusty-lavender to-peach-accent bg-clip-text text-transparent font-inter font-medium bg-dusty-lavender/10 px-2 py-1 rounded">
                          {achievement.year}
                        </span>
                      </div>
                      <p className="text-slate-gray font-inter text-sm">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-midnight-navy via-dusty-lavender to-peach-accent rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative bg-gradient-to-br from-midnight-navy to-dusty-lavender rounded-2xl p-8 md:p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 bg-gradient-to-r from-white to-peach-accent bg-clip-text text-transparent">
              Continuous Learning
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Education is a lifelong journey. I'm always exploring new techniques, 
              technologies, and trends to stay at the forefront of fashion design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/portfolio"
                className="relative group inline-flex items-center px-8 py-3 overflow-hidden font-inter font-medium rounded-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-dusty-lavender to-peach-accent transition-all duration-300 group-hover:from-peach-accent group-hover:to-dusty-lavender"></div>
                <span className="relative text-white">See My Work</span>
              </a>
              <a
                href="/contact"
                className="relative group inline-flex items-center px-8 py-3 overflow-hidden font-inter font-medium rounded-lg border-2 border-transparent bg-gradient-to-r from-white to-peach-accent bg-clip-border"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10 transition-all duration-300 group-hover:from-white/10 group-hover:to-transparent"></div>
                <span className="relative bg-gradient-to-r from-white to-peach-accent bg-clip-text text-transparent">Get In Touch</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
