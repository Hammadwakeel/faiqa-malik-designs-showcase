
import { useState } from 'react';
import { Mail, Instagram, MapPin, Send, Phone, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "designerfaiqamalik7@gmail.com",
      description: "Send me an email for project inquiries",
      link: "mailto:designerfaiqamalik7@gmail.com"
    },
    {
      icon: Instagram,
      title: "Instagram",
      details: "@designer_faiqamalik",
      description: "Follow my latest work and updates",
      link: "https://instagram.com/designer_faiqamalik"
    },
    {
      icon: MapPin,
      title: "Location",
      details: "Attock City, Pakistan",
      description: "Street #2 Malik House, Farooq-e-azam Colony",
      link: null
    },
    {
      icon: Clock,
      title: "Response Time",
      details: "24-48 hours",
      description: "I'll get back to you as soon as possible",
      link: null
    }
  ];

  const services = [
    "Custom Fashion Design",
    "Pattern Making & Grading",
    "Fashion Illustration",
    "Bridal Collection Design",
    "Ready-to-Wear Collections",
    "Fashion Consulting",
    "Trend Forecasting",
    "Garment Construction"
  ];

  return (
    <div className="min-h-screen py-20 bg-gradient-to-br from-lavender-bg via-white to-dusty-lavender/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-8 mb-16">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold bg-gradient-to-r from-midnight-navy via-dusty-lavender to-midnight-navy bg-clip-text text-transparent">
            Let's Connect
          </h1>
          <p className="text-xl text-slate-gray font-inter max-w-3xl mx-auto">
            Ready to bring your fashion vision to life? I'd love to hear about your project 
            and discuss how we can create something extraordinary together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Contact Form */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-playfair font-bold bg-gradient-to-r from-midnight-navy to-dusty-lavender bg-clip-text text-transparent">
                Send Me a Message
              </h2>
              <p className="text-slate-gray font-inter">
                Fill out the form below and I'll get back to you within 24-48 hours.
              </p>
            </div>

            <div className="bg-gradient-to-br from-white to-dusty-lavender/5 p-8 rounded-2xl shadow-lg border border-gradient-to-r from-dusty-lavender/20 to-peach-accent/20">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-inter font-medium text-midnight-navy mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gradient-to-r from-dusty-lavender/30 to-peach-accent/30 rounded-lg focus:ring-2 focus:ring-dusty-lavender focus:border-transparent font-inter bg-gradient-to-r from-white to-lavender-bg/50"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-inter font-medium text-midnight-navy mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gradient-to-r from-dusty-lavender/30 to-peach-accent/30 rounded-lg focus:ring-2 focus:ring-dusty-lavender focus:border-transparent font-inter bg-gradient-to-r from-white to-lavender-bg/50"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-inter font-medium text-midnight-navy mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gradient-to-r from-dusty-lavender/30 to-peach-accent/30 rounded-lg focus:ring-2 focus:ring-dusty-lavender focus:border-transparent font-inter bg-gradient-to-r from-white to-lavender-bg/50"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-inter font-medium text-midnight-navy mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gradient-to-r from-dusty-lavender/30 to-peach-accent/30 rounded-lg focus:ring-2 focus:ring-dusty-lavender focus:border-transparent font-inter resize-none bg-gradient-to-br from-white to-lavender-bg/30"
                    placeholder="Tell me about your project, timeline, and any specific requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-midnight-navy to-dusty-lavender text-white font-inter font-medium py-4 px-6 rounded-lg hover:from-dusty-lavender hover:to-midnight-navy transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg"
                >
                  <Send size={20} />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-playfair font-bold bg-gradient-to-r from-midnight-navy to-dusty-lavender bg-clip-text text-transparent">
                Get In Touch
              </h2>
              <p className="text-slate-gray font-inter">
                Choose your preferred way to connect with me.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div key={index} className="bg-gradient-to-br from-white to-dusty-lavender/5 rounded-xl shadow-lg p-6 border border-gradient-to-r from-dusty-lavender/20 to-peach-accent/20 hover:shadow-xl hover:from-dusty-lavender/10 hover:to-peach-accent/10 transition-all duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-dusty-lavender/20 to-peach-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-dusty-lavender" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-playfair font-semibold text-midnight-navy">
                          {info.title}
                        </h3>
                        {info.link ? (
                          <a
                            href={info.link}
                            target={info.link.startsWith('http') ? '_blank' : undefined}
                            rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="bg-gradient-to-r from-dusty-lavender to-peach-accent bg-clip-text text-transparent font-inter font-medium hover:from-midnight-navy hover:to-dusty-lavender transition-all duration-200"
                          >
                            {info.details}
                          </a>
                        ) : (
                          <p className="bg-gradient-to-r from-dusty-lavender to-peach-accent bg-clip-text text-transparent font-inter font-medium">
                            {info.details}
                          </p>
                        )}
                        <p className="text-slate-gray font-inter text-sm">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Services */}
            <div className="bg-gradient-to-br from-lavender-bg to-dusty-lavender/10 rounded-xl p-6 border border-gradient-to-r from-dusty-lavender/20 to-peach-accent/20">
              <h3 className="text-xl font-playfair font-semibold bg-gradient-to-r from-midnight-navy to-dusty-lavender bg-clip-text text-transparent mb-4">
                Services I Offer
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-dusty-lavender to-peach-accent rounded-full"></div>
                    <span className="text-slate-gray font-inter text-sm">
                      {service}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-gradient-to-br from-white to-dusty-lavender/5 rounded-2xl shadow-lg p-8 md:p-12 mb-20 border border-gradient-to-r from-dusty-lavender/20 to-peach-accent/20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold bg-gradient-to-r from-midnight-navy via-dusty-lavender to-midnight-navy bg-clip-text text-transparent mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-slate-gray font-inter max-w-2xl mx-auto">
              Quick answers to common questions about working with me
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-playfair font-semibold bg-gradient-to-r from-midnight-navy to-dusty-lavender bg-clip-text text-transparent mb-2">
                  What's your design process?
                </h3>
                <p className="text-slate-gray font-inter text-sm">
                  I start with understanding your vision, create initial sketches, develop patterns, 
                  and work through fittings until we achieve the perfect result.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-playfair font-semibold bg-gradient-to-r from-midnight-navy to-dusty-lavender bg-clip-text text-transparent mb-2">
                  How long does a project take?
                </h3>
                <p className="text-slate-gray font-inter text-sm">
                  Timeline varies by project complexity. Custom garments typically take 2-4 weeks, 
                  while full collections may require 2-3 months.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-playfair font-semibold bg-gradient-to-r from-midnight-navy to-dusty-lavender bg-clip-text text-transparent mb-2">
                  Do you work internationally?
                </h3>
                <p className="text-slate-gray font-inter text-sm">
                  Yes! I work with clients globally through digital consultations and 
                  can coordinate shipping for completed projects.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-playfair font-semibold bg-gradient-to-r from-midnight-navy to-dusty-lavender bg-clip-text text-transparent mb-2">
                  What are your rates?
                </h3>
                <p className="text-slate-gray font-inter text-sm">
                  Pricing depends on project scope and complexity. Contact me for a 
                  personalized quote based on your specific requirements.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-br from-midnight-navy via-dusty-lavender/20 to-midnight-navy rounded-2xl p-8 md:p-12 text-white border border-gradient-to-r from-dusty-lavender/30 to-peach-accent/30">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 bg-gradient-to-r from-white via-peach-accent to-white bg-clip-text text-transparent">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Whether you have a clear vision or just an idea, I'm here to help bring 
            your fashion dreams to reality. Let's create something beautiful together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:designerfaiqamalik7@gmail.com"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-dusty-lavender to-peach-accent text-white font-inter font-medium rounded-lg hover:from-peach-accent hover:to-dusty-lavender transition-all duration-300 shadow-lg"
            >
              <Mail className="mr-2 h-4 w-4" />
              Email Me Now
            </a>
            <a
              href="https://instagram.com/designer_faiqamalik"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 border-2 border-gradient-to-r from-white to-peach-accent bg-gradient-to-r from-white/10 to-peach-accent/10 backdrop-blur-sm text-white font-inter font-medium rounded-lg hover:from-white/20 hover:to-peach-accent/20 transition-all duration-300"
            >
              <Instagram className="mr-2 h-4 w-4" />
              Follow on Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
