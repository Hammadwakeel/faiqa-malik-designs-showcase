
import { Calendar, MapPin, Building, Award, ZoomIn } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

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
      ],
      certificates: []
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
      ],
      certificates: []
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
      ],
      certificates: []
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
      ],
      certificates: [
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
        }
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
      ],
      certificates: [
        {
          title: "Internship Completion Certificate",
          company: "Sui Dhaga Bridals",
          image: "/lovable-uploads/574886d3-5057-4952-bca1-83c6ce3875c7.png",
          description: "Successfully completed bridal wear design internship"
        }
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
      ],
      certificates: []
    }
  ];

  const additionalCertificates = [
    {
      title: "Youth Development Certificate",
      company: "Helping Hand Organization",
      image: "/lovable-uploads/10ad8a63-3f6f-4179-bf15-b90548ed98f4.png",
      description: "Recognition for youth development and humanitarian efforts"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Freelance':
        return 'bg-gradient-to-r from-peach-accent to-dusty-lavender text-white';
      case 'Full-time':
        return 'bg-gradient-to-r from-midnight-navy to-dusty-lavender text-white';
      case 'Part-time':
        return 'bg-gradient-to-r from-dusty-lavender to-peach-accent text-white';
      case 'Internship':
        return 'bg-gradient-to-r from-slate-gray to-dusty-lavender text-white';
      default:
        return 'bg-gradient-to-r from-gray-300 to-gray-400 text-gray-700';
    }
  };

  const handleDownloadCV = () => {
    // Create a link to download the CV
    const link = document.createElement('a');
    link.href = '/lovable-uploads/75abe4c7-264f-45c8-84c7-5a12b91cad5a.png';
    link.download = 'Faiqa-Malik-CV.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen py-20 bg-gradient-to-br from-lavender-bg via-white to-dusty-lavender/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-8 mb-16">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold bg-gradient-to-r from-midnight-navy to-dusty-lavender bg-clip-text text-transparent">
            Professional Experience
          </h1>
          <p className="text-xl text-slate-gray font-inter max-w-3xl mx-auto">
            A comprehensive journey through my professional development in fashion design, 
            showcasing growth from internships to leadership roles.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-gradient-to-br from-white to-dusty-lavender/10 rounded-xl shadow-lg p-6 text-center border border-dusty-lavender/20">
            <div className="text-3xl font-playfair font-bold bg-gradient-to-r from-midnight-navy to-dusty-lavender bg-clip-text text-transparent mb-2">4+</div>
            <div className="text-sm text-slate-gray font-inter">Years Experience</div>
          </div>
          <div className="bg-gradient-to-br from-white to-peach-accent/10 rounded-xl shadow-lg p-6 text-center border border-dusty-lavender/20">
            <div className="text-3xl font-playfair font-bold bg-gradient-to-r from-midnight-navy to-dusty-lavender bg-clip-text text-transparent mb-2">6</div>
            <div className="text-sm text-slate-gray font-inter">Companies</div>
          </div>
          <div className="bg-gradient-to-br from-white to-dusty-lavender/10 rounded-xl shadow-lg p-6 text-center border border-dusty-lavender/20">
            <div className="text-3xl font-playfair font-bold bg-gradient-to-r from-midnight-navy to-dusty-lavender bg-clip-text text-transparent mb-2">50+</div>
            <div className="text-sm text-slate-gray font-inter">Projects Completed</div>
          </div>
          <div className="bg-gradient-to-br from-white to-peach-accent/10 rounded-xl shadow-lg p-6 text-center border border-dusty-lavender/20">
            <div className="text-3xl font-playfair font-bold bg-gradient-to-r from-midnight-navy to-dusty-lavender bg-clip-text text-transparent mb-2">100%</div>
            <div className="text-sm text-slate-gray font-inter">Client Satisfaction</div>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-playfair font-bold bg-gradient-to-r from-midnight-navy to-dusty-lavender bg-clip-text text-transparent mb-4">
              Work Experience Timeline
            </h2>
          </div>

          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-dusty-lavender via-peach-accent to-dusty-lavender"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex items-start ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-dusty-lavender to-peach-accent rounded-full border-4 border-white shadow-lg z-10"></div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-gradient-to-br from-white via-lavender-bg/50 to-dusty-lavender/5 rounded-2xl shadow-lg p-8 border border-dusty-lavender/20 hover:shadow-xl transition-all duration-300 hover:bg-gradient-to-br hover:from-white hover:via-dusty-lavender/10 hover:to-peach-accent/10">
                    <div className="space-y-4">
                      {/* Header */}
                      <div className="space-y-2">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span className={`px-3 py-1 rounded-full text-xs font-inter font-medium ${getTypeColor(exp.type)}`}>
                            {exp.type}
                          </span>
                          <span className="text-sm bg-gradient-to-r from-dusty-lavender to-peach-accent bg-clip-text text-transparent font-inter font-medium">
                            {exp.period}
                          </span>
                        </div>
                        <h3 className="text-2xl font-playfair font-bold bg-gradient-to-r from-midnight-navy to-dusty-lavender bg-clip-text text-transparent">
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
                        <h4 className="font-inter font-semibold bg-gradient-to-r from-midnight-navy to-dusty-lavender bg-clip-text text-transparent">
                          Key Achievements:
                        </h4>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start space-x-2">
                              <div className="w-1.5 h-1.5 bg-gradient-to-r from-dusty-lavender to-peach-accent rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-slate-gray font-inter text-sm">
                                {achievement}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Certificates for this experience */}
                      {exp.certificates && exp.certificates.length > 0 && (
                        <div className="space-y-4 pt-4 border-t border-dusty-lavender/20">
                          <h4 className="font-inter font-semibold bg-gradient-to-r from-midnight-navy to-dusty-lavender bg-clip-text text-transparent flex items-center gap-2">
                            <Award size={16} />
                            Related Certificates:
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {exp.certificates.map((cert, certIndex) => (
                              <Dialog key={certIndex}>
                                <DialogTrigger asChild>
                                  <div className="relative group cursor-pointer">
                                    <div className="absolute -inset-1 bg-gradient-to-r from-dusty-lavender via-peach-accent to-midnight-navy rounded-lg blur opacity-20 group-hover:opacity-50 transition duration-500"></div>
                                    <div className="relative bg-gradient-to-br from-white to-lavender-bg rounded-lg shadow-md p-4 border border-dusty-lavender/20">
                                      <div className="space-y-3">
                                        <div className="relative overflow-hidden rounded">
                                          <img 
                                            src={cert.image} 
                                            alt={cert.title} 
                                            className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-105"
                                          />
                                          <div className="absolute top-2 right-2">
                                            <ZoomIn className="w-4 h-4 text-white bg-midnight-navy/50 rounded-full p-0.5" />
                                          </div>
                                        </div>
                                        <div className="space-y-1">
                                          <h5 className="text-sm font-playfair font-semibold bg-gradient-to-r from-midnight-navy to-dusty-lavender bg-clip-text text-transparent">
                                            {cert.title}
                                          </h5>
                                          <p className="text-xs text-slate-gray font-inter">
                                            {cert.description}
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </DialogTrigger>
                                <DialogContent className="max-w-4xl w-full max-h-[90vh] p-0">
                                  <div className="relative">
                                    <img 
                                      src={cert.image} 
                                      alt={cert.title} 
                                      className="w-full h-auto object-contain"
                                    />
                                  </div>
                                </DialogContent>
                              </Dialog>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Professional Certificates Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-playfair font-bold bg-gradient-to-r from-midnight-navy to-dusty-lavender bg-clip-text text-transparent mb-4">
              Additional Professional Certificates
            </h2>
            <p className="text-lg text-slate-gray font-inter max-w-2xl mx-auto">
              Additional training and development certifications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalCertificates.map((cert, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <div className="relative group cursor-pointer">
                    <div className="absolute -inset-1 bg-gradient-to-r from-dusty-lavender via-peach-accent to-midnight-navy rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                    <div className="relative bg-gradient-to-br from-white to-lavender-bg rounded-xl shadow-lg p-6 border border-dusty-lavender/20 hover:shadow-xl transition-shadow duration-300">
                      <div className="space-y-4">
                        <div className="relative overflow-hidden rounded-lg">
                          <img 
                            src={cert.image} 
                            alt={cert.title} 
                            className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-midnight-navy/20 to-transparent"></div>
                          <div className="absolute top-2 right-2">
                            <ZoomIn className="w-5 h-5 text-white bg-midnight-navy/50 rounded-full p-1" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <Award className="w-4 h-4 text-dusty-lavender" />
                            <h3 className="text-sm font-playfair font-semibold bg-gradient-to-r from-midnight-navy to-dusty-lavender bg-clip-text text-transparent">
                              {cert.title}
                            </h3>
                          </div>
                          <p className="text-slate-gray font-inter font-medium text-xs">
                            {cert.company}
                          </p>
                          <p className="text-slate-gray font-inter text-xs">
                            {cert.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-4xl w-full max-h-[90vh] p-0">
                  <div className="relative">
                    <img 
                      src={cert.image} 
                      alt={cert.title} 
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-br from-dusty-lavender/10 via-lavender-bg to-peach-accent/5 rounded-2xl p-8 md:p-12 border border-dusty-lavender/20">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold bg-gradient-to-r from-midnight-navy to-dusty-lavender bg-clip-text text-transparent mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-lg text-slate-gray font-inter mb-8 max-w-2xl mx-auto">
            With extensive experience across various fashion sectors, I'm ready to bring 
            creativity and expertise to your next project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:designerfaiqamalik7@gmail.com"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-midnight-navy to-dusty-lavender text-white font-inter font-medium rounded-lg hover:from-midnight-navy/90 hover:to-dusty-lavender/90 transition-all duration-200 shadow-lg"
            >
              Get In Touch
            </a>
            <button
              onClick={handleDownloadCV}
              className="inline-flex items-center px-8 py-3 border-2 border-dusty-lavender bg-gradient-to-r from-transparent to-dusty-lavender/5 text-midnight-navy font-inter font-medium rounded-lg hover:bg-gradient-to-r hover:from-dusty-lavender hover:to-peach-accent hover:text-white hover:border-transparent transition-all duration-200"
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
