
import { Calendar, MapPin, Building } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: "Freelance Fashion Designer",
      company: "Fiverr",
      duration: "2020–present",
      period: "4+ years",
      type: "Freelance",
      description: "Providing comprehensive fashion design services to international clients, including custom garment design, pattern making, and fashion illustration. Built a strong portfolio with over 50+ successful projects.",
      achievements: [
        "Completed 50+ custom design projects",
        "Maintained 5-star rating with 100% client satisfaction",
        "Expanded service offerings to include branding and styling consultation"
      ]
    },
    {
      role: "Designer Assistant",
      company: "Boujee.",
      duration: "Aug–Nov 2024",
      period: "4 months",
      type: "Full-time",
      description: "Supported lead designers in creating luxury fashion collections, focusing on high-end garment construction and quality control.",
      achievements: [
        "Assisted in developing 2 complete seasonal collections",
        "Improved pattern accuracy by 15% through meticulous attention to detail",
        "Collaborated with team of 8 designers on major fashion shows"
      ]
    },
    {
      role: "Designer Assistant",
      company: "Elevenstore",
      duration: "Sep, Nov–Dec 2023",
      period: "3 months",
      type: "Part-time",
      description: "Contributed to contemporary fashion line development, specializing in streetwear and casual collections with modern aesthetics.",
      achievements: [
        "Created technical drawings for 25+ garment designs",
        "Assisted in fabric sourcing and vendor negotiations",
        "Participated in fashion show preparation and styling"
      ]
    },
    {
      role: "Internship",
      company: "Eleven Clothing",
      duration: "July–Sep 2023",
      period: "3 months",
      type: "Internship",
      description: "Gained hands-on experience in commercial fashion production, learning industry-standard processes and quality control measures.",
      achievements: [
        "Learned industrial sewing techniques and quality standards",
        "Assisted in production planning for bulk orders",
        "Developed understanding of retail fashion business operations"
      ]
    },
    {
      role: "Internship",
      company: "Sui Dhaga Bridals",
      duration: "June–Aug 2022",
      period: "3 months",
      type: "Internship",
      description: "Specialized training in bridal wear design and traditional embroidery techniques, working with master craftspeople.",
      achievements: [
        "Mastered traditional Pakistani bridal embroidery techniques",
        "Designed 5 complete bridal outfits under supervision",
        "Learned luxury fabric handling and finishing techniques"
      ]
    },
    {
      role: "Designer Assistant",
      company: "Revolt Riders",
      duration: "Jan–Apr 2022",
      period: "4 months",
      type: "Part-time",
      description: "Focused on motorcycle and lifestyle apparel design, combining functionality with fashion-forward aesthetics.",
      achievements: [
        "Designed functional apparel for motorcycle enthusiasts",
        "Learned about technical fabrics and performance wear",
        "Created brand identity elements and promotional materials"
      ]
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Freelance':
        return 'bg-peach-accent text-white';
      case 'Full-time':
        return 'bg-midnight-navy text-white';
      case 'Part-time':
        return 'bg-dusty-lavender text-white';
      case 'Internship':
        return 'bg-slate-gray text-white';
      default:
        return 'bg-gray-200 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-8 mb-16">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-midnight-navy">
            Experience
          </h1>
          <p className="text-xl text-slate-gray font-inter max-w-3xl mx-auto">
            A comprehensive journey through my professional development in fashion design, 
            showcasing growth from internships to leadership roles.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center border border-dusty-lavender/20">
            <div className="text-3xl font-playfair font-bold text-midnight-navy mb-2">4+</div>
            <div className="text-sm text-slate-gray font-inter">Years Experience</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center border border-dusty-lavender/20">
            <div className="text-3xl font-playfair font-bold text-midnight-navy mb-2">6</div>
            <div className="text-sm text-slate-gray font-inter">Companies</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center border border-dusty-lavender/20">
            <div className="text-3xl font-playfair font-bold text-midnight-navy mb-2">50+</div>
            <div className="text-sm text-slate-gray font-inter">Projects Completed</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center border border-dusty-lavender/20">
            <div className="text-3xl font-playfair font-bold text-midnight-navy mb-2">100%</div>
            <div className="text-sm text-slate-gray font-inter">Client Satisfaction</div>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-dusty-lavender/30"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex items-start ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-dusty-lavender rounded-full border-4 border-white shadow-lg z-10"></div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-white rounded-2xl shadow-lg p-8 border border-dusty-lavender/10 hover:shadow-xl transition-shadow duration-300">
                    <div className="space-y-4">
                      {/* Header */}
                      <div className="space-y-2">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span className={`px-3 py-1 rounded-full text-xs font-inter font-medium ${getTypeColor(exp.type)}`}>
                            {exp.type}
                          </span>
                          <span className="text-sm text-dusty-lavender font-inter font-medium">
                            {exp.period}
                          </span>
                        </div>
                        <h3 className="text-2xl font-playfair font-bold text-midnight-navy">
                          {exp.role}
                        </h3>
                        <div className="flex items-center space-x-4 text-slate-gray">
                          <div className="flex items-center space-x-1">
                            <Building size={16} />
                            <span className="font-inter font-medium">{exp.company}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar size={16} />
                            <span className="font-inter text-sm">{exp.duration}</span>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-slate-gray font-inter leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div className="space-y-2">
                        <h4 className="font-inter font-semibold text-midnight-navy">
                          Key Achievements:
                        </h4>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start space-x-2">
                              <div className="w-1.5 h-1.5 bg-dusty-lavender rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-slate-gray font-inter text-sm">
                                {achievement}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20 bg-lavender-bg rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-midnight-navy mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-lg text-slate-gray font-inter mb-8 max-w-2xl mx-auto">
            With extensive experience across various fashion sectors, I'm ready to bring 
            creativity and expertise to your next project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:designerfaiqamalik7@gmail.com"
              className="inline-flex items-center px-8 py-3 bg-midnight-navy text-white font-inter font-medium rounded-lg hover:bg-midnight-navy/90 transition-colors duration-200"
            >
              Get In Touch
            </a>
            <a
              href="#"
              className="inline-flex items-center px-8 py-3 border-2 border-dusty-lavender text-midnight-navy font-inter font-medium rounded-lg hover:bg-dusty-lavender hover:text-white transition-colors duration-200"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
