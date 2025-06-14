
import { Star, Quote, User, Calendar } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Aishabayo",
      role: "Client",
      location: "Fiverr Platform",
      rating: 5,
      date: "Recent",
      testimonial: "It was great success. Faiqa designed my dress, illustrations, drawings perfectly! The quality of work and professional approach exceeded expectations.",
      project: "Custom Design Work",
      amount: "$125",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Salsadrum",
      role: "Client", 
      location: "Fiverr Platform",
      rating: 5,
      date: "Recent",
      testimonial: "Great work I recommend. Faiqa's attention to detail and understanding of my vision was incredible. The entire process was smooth and professional.",
      project: "Custom Design Work",
      amount: "$125",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Abdul Samad (asammad)",
      role: "Client",
      location: "Fiverr Platform", 
      rating: 5,
      date: "Recent",
      testimonial: "Great experience. Faiqa delivered exceptional quality work with perfect communication and timely delivery. Highly professional service.",
      project: "Custom Design Work",
      amount: "$70",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Alexfimain",
      role: "Client",
      location: "Fiverr Platform",
      rating: 5,
      date: "Recent", 
      testimonial: "I really liked the Dress design. Faiqa's creativity and professionalism is outstanding. The results exceeded my expectations completely.",
      project: "Dress Design",
      amount: "$57",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Swilloo",
      role: "Client",
      location: "Fiverr Platform",
      rating: 5,
      date: "Recent",
      testimonial: "Excellent work and communication. Faiqa delivered quality designs on time and was very professional throughout the process.",
      project: "Custom Design Work", 
      amount: "$45",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Ellacooke541",
      role: "Client",
      location: "Fiverr Platform",
      rating: 5,
      date: "Recent",
      testimonial: "Outstanding service and quality. Faiqa's designs are creative and perfectly executed. Great job on the project deliverables.",
      project: "Custom Design Work",
      amount: "$40",
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Omowaleaduayi",
      role: "Client", 
      location: "Fiverr Platform",
      rating: 5,
      date: "Recent",
      testimonial: "Professional and reliable service. Faiqa delivered exactly what was requested with excellent attention to detail and quality.",
      project: "Custom Design Work",
      amount: "$30",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Skye Fox (skyeeyks)",
      role: "Client",
      location: "Fiverr Platform", 
      rating: 5,
      date: "Recent",
      testimonial: "Faiqamalik533 did an outstanding job! I love the designs I got back and I would highly recommend them as a dress designer/illustrator!",
      project: "Dress Design & Illustration",
      amount: "$27",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Nessrinnawara40",
      role: "Client",
      location: "Fiverr Platform",
      rating: 5, 
      date: "Recent",
      testimonial: "Great work! Thanks a lot. Faiqa delivered quality designs with excellent communication and professional service throughout.",
      project: "Custom Design Work",
      amount: "$20",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Fardowsauxui",
      role: "Client",
      location: "Fiverr Platform",
      rating: 5,
      date: "Recent",
      testimonial: "Amazing designer! Kind, patient and professional. Faiqa's work quality and attention to detail is exceptional.",
      project: "Custom Design Work", 
      amount: "$15",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const stats = [
    { number: "100+", label: "Happy Clients" },
    { number: "5.0", label: "Average Rating" },
    { number: "100%", label: "Satisfaction Rate" },
    { number: "4+", label: "Years Experience" }
  ];

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        size={16}
        className={`${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className="min-h-screen py-20 bg-gradient-tertiary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-8 mb-16">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold bg-gradient-to-r from-midnight-navy via-dusty-lavender to-peach-accent bg-clip-text text-transparent">
            Client Testimonials
          </h1>
          <p className="text-xl text-slate-gray font-inter max-w-3xl mx-auto">
            Don't just take my word for it. Here's what my clients have to say about 
            working with me and the results we've achieved together.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-gradient-to-br from-white via-lavender-bg to-dusty-lavender/10 rounded-xl shadow-lg p-6 border border-dusty-lavender/20 backdrop-blur-sm">
              <div className="text-3xl md:text-4xl font-playfair font-bold bg-gradient-to-r from-midnight-navy to-dusty-lavender bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-slate-gray font-inter">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gradient-to-br from-white via-lavender-bg to-white rounded-2xl shadow-xl p-8 border border-dusty-lavender/20 hover:shadow-2xl hover:border-dusty-lavender/40 transition-all duration-300 relative backdrop-blur-sm">
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 w-8 h-8 bg-gradient-to-br from-dusty-lavender to-peach-accent rounded-full flex items-center justify-center shadow-lg">
                <Quote className="w-4 h-4 text-white" />
              </div>

              <div className="space-y-6">
                {/* Rating & Date */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    {renderStars(testimonial.rating)}
                  </div>
                  <div className="flex items-center space-x-1 text-slate-gray">
                    <Calendar size={12} />
                    <span className="text-xs font-inter">{testimonial.date}</span>
                  </div>
                </div>

                {/* Amount Badge */}
                <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-dusty-lavender to-peach-accent rounded-full text-white text-sm font-semibold shadow-lg">
                  {testimonial.amount}
                </div>

                {/* Testimonial Text */}
                <p className="text-slate-gray font-inter leading-relaxed text-sm">
                  "{testimonial.testimonial}"
                </p>

                {/* Project */}
                <div className="bg-gradient-to-r from-lavender-bg to-dusty-lavender/10 rounded-lg p-3 border border-dusty-lavender/20">
                  <span className="text-xs font-inter font-medium text-dusty-lavender">
                    Project: {testimonial.project}
                  </span>
                </div>

                {/* Client Info */}
                <div className="flex items-center space-x-4 pt-4 border-t border-gradient-to-r from-dusty-lavender/20 to-transparent">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-dusty-lavender/20 to-peach-accent/20 flex items-center justify-center border-2 border-dusty-lavender/30">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.nextElementSibling?.setAttribute('style', 'display: flex');
                      }}
                    />
                    <User className="w-6 h-6 text-dusty-lavender" style={{ display: 'none' }} />
                  </div>
                  <div>
                    <h4 className="font-playfair font-semibold bg-gradient-to-r from-midnight-navy to-dusty-lavender bg-clip-text text-transparent">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs text-slate-gray font-inter">
                      {testimonial.role}
                    </p>
                    <p className="text-xs text-dusty-lavender font-inter">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="bg-gradient-to-br from-lavender-bg via-white to-dusty-lavender/10 rounded-2xl p-8 md:p-12 mb-20 border border-dusty-lavender/20 shadow-xl backdrop-blur-sm">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold bg-gradient-to-r from-midnight-navy via-dusty-lavender to-peach-accent bg-clip-text text-transparent mb-4">
              Why Clients Choose Me
            </h2>
            <p className="text-lg text-slate-gray font-inter max-w-2xl mx-auto">
              Consistent quality, professional service, and creative excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-dusty-lavender to-dusty-lavender/80 rounded-full flex items-center justify-center mx-auto shadow-lg">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-playfair font-semibold bg-gradient-to-r from-midnight-navy to-dusty-lavender bg-clip-text text-transparent">
                Quality Excellence
              </h3>
              <p className="text-slate-gray font-inter">
                Meticulous attention to detail and uncompromising quality standards
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-peach-accent to-peach-accent/80 rounded-full flex items-center justify-center mx-auto shadow-lg">
                <User className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-playfair font-semibold bg-gradient-to-r from-midnight-navy to-dusty-lavender bg-clip-text text-transparent">
                Personal Approach
              </h3>
              <p className="text-slate-gray font-inter">
                Understanding your unique vision and bringing it to life perfectly
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-midnight-navy to-midnight-navy/80 rounded-full flex items-center justify-center mx-auto shadow-lg">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-playfair font-semibold bg-gradient-to-r from-midnight-navy to-dusty-lavender bg-clip-text text-transparent">
                Timely Delivery
              </h3>
              <p className="text-slate-gray font-inter">
                Reliable timelines and consistent communication throughout projects
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-br from-midnight-navy via-midnight-navy/95 to-dusty-lavender/20 rounded-2xl p-8 md:p-12 text-white shadow-2xl border border-dusty-lavender/30">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 bg-gradient-to-r from-white to-dusty-lavender/80 bg-clip-text text-transparent">
            Ready to Be My Next Success Story?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Join the growing list of satisfied clients who have brought their fashion 
            visions to life with my expertise and dedication.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-dusty-lavender to-peach-accent text-white font-inter font-medium rounded-lg hover:from-dusty-lavender/90 hover:to-peach-accent/90 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Start Your Project
            </a>
            <a
              href="/portfolio"
              className="inline-flex items-center px-8 py-3 border-2 border-gradient-to-r from-white to-dusty-lavender text-white font-inter font-medium rounded-lg hover:bg-gradient-to-r hover:from-white/10 hover:to-dusty-lavender/10 transition-all duration-200"
            >
              View My Work
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
