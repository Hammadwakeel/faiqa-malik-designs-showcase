
import { Download, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
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
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-playfair font-bold bg-gradient-to-r from-midnight-navy to-dusty-lavender bg-clip-text text-transparent">
                About Me
              </h1>
              <p className="text-xl text-dusty-lavender font-inter font-medium">
                Fashion Designer
              </p>
            </div>
            
            <p className="text-lg text-slate-gray font-inter leading-relaxed">
              Driven visionary Fashion Designer with over four years of hands‑on experience 
              turning bold concepts into runway‑ready collections. Passionate about fusing art 
              and innovation, I excel at trend forecasting, team leadership, and delivering 
              standout designs that captivate both clients and markets.
            </p>

            <p className="text-lg text-slate-gray font-inter leading-relaxed">
              With a sharp eye for detail and a flair for collaborative problem‑solving, I lead 
              projects from initial sketch to final stitch—always pushing the boundaries of style. 
              My journey in fashion design has been marked by continuous learning, creative 
              exploration, and a commitment to excellence that resonates in every piece I create.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={handleDownloadCV}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-midnight-navy to-dusty-lavender text-white font-inter font-medium rounded-lg hover:from-midnight-navy/90 hover:to-dusty-lavender/90 transition-all duration-200 shadow-lg"
              >
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </button>
              <Link
                to="/portfolio"
                className="inline-flex items-center px-6 py-3 border-2 border-dusty-lavender text-midnight-navy font-inter font-medium rounded-lg hover:bg-gradient-to-r hover:from-dusty-lavender hover:to-peach-accent hover:text-white hover:border-transparent transition-all duration-200 group"
              >
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/lovable-uploads/b071b479-d6d6-42da-9588-715edf5cb50d.png"
                alt="Faiqa Malik at work"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight-navy/20 via-dusty-lavender/10 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Vision Section */}
        <div className="bg-gradient-to-br from-dusty-lavender/10 via-lavender-bg to-peach-accent/5 rounded-2xl p-8 md:p-12 mb-20 border border-dusty-lavender/20">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold bg-gradient-to-r from-midnight-navy to-dusty-lavender bg-clip-text text-transparent">
              My Vision
            </h2>
            <p className="text-xl text-slate-gray font-inter leading-relaxed">
              To create fashion that tells stories, evokes emotions, and empowers individuals 
              to express their unique identity through thoughtfully designed garments that 
              blend tradition with innovation.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-dusty-lavender to-peach-accent rounded-full flex items-center justify-center mx-auto shadow-lg">
                  <span className="text-2xl font-playfair font-bold text-white">01</span>
                </div>
                <h3 className="text-xl font-playfair font-semibold bg-gradient-to-r from-midnight-navy to-dusty-lavender bg-clip-text text-transparent">
                  Innovation
                </h3>
                <p className="text-slate-gray font-inter">
                  Pushing creative boundaries while respecting fashion heritage
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-peach-accent to-dusty-lavender rounded-full flex items-center justify-center mx-auto shadow-lg">
                  <span className="text-2xl font-playfair font-bold text-white">02</span>
                </div>
                <h3 className="text-xl font-playfair font-semibold bg-gradient-to-r from-midnight-navy to-dusty-lavender bg-clip-text text-transparent">
                  Quality
                </h3>
                <p className="text-slate-gray font-inter">
                  Meticulous attention to detail in every stitch and seam
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-midnight-navy to-dusty-lavender rounded-full flex items-center justify-center mx-auto shadow-lg">
                  <span className="text-2xl font-playfair font-bold text-white">03</span>
                </div>
                <h3 className="text-xl font-playfair font-semibold bg-gradient-to-r from-midnight-navy to-dusty-lavender bg-clip-text text-transparent">
                  Empowerment
                </h3>
                <p className="text-slate-gray font-inter">
                  Creating designs that make people feel confident and beautiful
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Journey Timeline */}
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold bg-gradient-to-r from-midnight-navy to-dusty-lavender bg-clip-text text-transparent">
              My Journey
            </h2>
            <p className="text-xl text-slate-gray font-inter max-w-2xl mx-auto">
              From early passion to professional excellence
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                year: "2016-2017",
                title: "Foundation Years",
                description: "Started with Matriculation in Computer Science, discovering my passion for design and creativity."
              },
              {
                year: "2018-2020",
                title: "Fashion Education",
                description: "Pursued Intermediate in Arts at National Textile Institute, building fundamental design skills."
              },
              {
                year: "2020-2024",
                title: "Professional Development",
                description: "Completed Bachelor's in Fashion Design while gaining hands-on experience through internships and freelance work."
              },
              {
                year: "Present",
                title: "Creative Leadership",
                description: "Leading fashion projects, mentoring teams, and establishing my unique design philosophy."
              }
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-24 text-right">
                  <span className="text-dusty-lavender font-inter font-semibold">
                    {item.year}
                  </span>
                </div>
                <div className="flex-shrink-0 w-4 h-4 bg-gradient-to-r from-dusty-lavender to-peach-accent rounded-full mt-2 shadow-sm"></div>
                <div className="flex-1 space-y-2">
                  <h3 className="text-xl font-playfair font-semibold bg-gradient-to-r from-midnight-navy to-dusty-lavender bg-clip-text text-transparent">
                    {item.title}
                  </h3>
                  <p className="text-slate-gray font-inter leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
