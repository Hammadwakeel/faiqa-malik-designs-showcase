
import { Star, Quote, User, Calendar } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Bride",
      location: "New York, USA",
      rating: 5,
      date: "October 2024",
      testimonial: "Faiqa designed my dream wedding dress perfectly! Her attention to detail and understanding of my vision was incredible. The entire process was smooth and professional. I received so many compliments on my special day!",
      project: "Custom Bridal Gown",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Emma Rodriguez",
      role: "Fashion Boutique Owner",
      location: "London, UK",
      rating: 5,
      date: "September 2024",
      testimonial: "Working with Faiqa on our autumn collection was fantastic. Her designs are fresh, modern, and perfectly aligned with current trends. The quality of work and her professional approach exceeded our expectations.",
      project: "Ready-to-Wear Collection",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Aisha Khan",
      role: "Fashion Influencer",
      location: "Dubai, UAE",
      rating: 5,
      date: "August 2024",
      testimonial: "Faiqa created stunning custom pieces for my content shoots. Her understanding of contemporary fashion and traditional elements is remarkable. Every piece was Instagram-worthy and received amazing engagement!",
      project: "Custom Fashion Pieces",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Michael Chen",
      role: "Fashion Photographer",
      location: "Toronto, Canada",
      rating: 5,
      date: "July 2024",
      testimonial: "I've worked with many designers, and Faiqa stands out for her creativity and professionalism. The garments she designed for our fashion shoot were absolutely stunning and photographed beautifully.",
      project: "Fashion Shoot Styling",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Priya Sharma",
      role: "Event Planner",
      location: "Mumbai, India",
      rating: 5,
      date: "June 2024",
      testimonial: "Faiqa designed outfits for our high-profile fashion event. Her ability to work under tight deadlines while maintaining exceptional quality is impressive. The client was thrilled with the results!",
      project: "Event Fashion Design",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Jennifer Wilson",
      role: "Corporate Executive",
      location: "Sydney, Australia",
      rating: 5,
      date: "May 2024",
      testimonial: "Faiqa helped me develop a professional wardrobe that perfectly balances elegance and modern style. Her consultation was thorough, and every piece fits perfectly. Highly recommend her services!",
      project: "Wardrobe Consultation",
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const stats = [
    { number: "50+", label: "Happy Clients" },
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
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-8 mb-16">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-midnight-navy">
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
            <div key={index} className="text-center bg-white rounded-xl shadow-lg p-6 border border-dusty-lavender/10">
              <div className="text-3xl md:text-4xl font-playfair font-bold text-midnight-navy mb-2">
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
            <div key={index} className="bg-white rounded-2xl shadow-lg p-8 border border-dusty-lavender/10 hover:shadow-xl transition-shadow duration-300 relative">
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 w-8 h-8 bg-dusty-lavender/10 rounded-full flex items-center justify-center">
                <Quote className="w-4 h-4 text-dusty-lavender" />
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

                {/* Testimonial Text */}
                <p className="text-slate-gray font-inter leading-relaxed text-sm">
                  "{testimonial.testimonial}"
                </p>

                {/* Project */}
                <div className="bg-lavender-bg rounded-lg p-3">
                  <span className="text-xs font-inter font-medium text-dusty-lavender">
                    Project: {testimonial.project}
                  </span>
                </div>

                {/* Client Info */}
                <div className="flex items-center space-x-4 pt-4 border-t border-dusty-lavender/20">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-dusty-lavender/10 flex items-center justify-center">
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
                    <h4 className="font-playfair font-semibold text-midnight-navy">
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
        <div className="bg-lavender-bg rounded-2xl p-8 md:p-12 mb-20">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-midnight-navy mb-4">
              Why Clients Choose Me
            </h2>
            <p className="text-lg text-slate-gray font-inter max-w-2xl mx-auto">
              Consistent quality, professional service, and creative excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-dusty-lavender rounded-full flex items-center justify-center mx-auto">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-playfair font-semibold text-midnight-navy">
                Quality Excellence
              </h3>
              <p className="text-slate-gray font-inter">
                Meticulous attention to detail and uncompromising quality standards
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-peach-accent rounded-full flex items-center justify-center mx-auto">
                <User className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-playfair font-semibold text-midnight-navy">
                Personal Approach
              </h3>
              <p className="text-slate-gray font-inter">
                Understanding your unique vision and bringing it to life perfectly
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-midnight-navy rounded-full flex items-center justify-center mx-auto">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-playfair font-semibold text-midnight-navy">
                Timely Delivery
              </h3>
              <p className="text-slate-gray font-inter">
                Reliable timelines and consistent communication throughout projects
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-midnight-navy rounded-2xl p-8 md:p-12 text-white">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
            Ready to Be My Next Success Story?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Join the growing list of satisfied clients who have brought their fashion 
            visions to life with my expertise and dedication.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-3 bg-dusty-lavender text-white font-inter font-medium rounded-lg hover:bg-dusty-lavender/90 transition-colors duration-200"
            >
              Start Your Project
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

export default Testimonials;
