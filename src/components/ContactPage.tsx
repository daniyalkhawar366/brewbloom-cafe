import React, { useState } from 'react';
import { MapPin, Clock, Phone, Mail, Send, Instagram, Facebook } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="relative h-64 bg-cover bg-center" style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.pexels.com/photos/1260309/pexels-photo-1260309.jpeg?auto=compress&cs=tinysrgb&w=1200')`
      }}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Get in Touch</h1>
            <p className="text-xl">We'd love to hear from you</p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-brown-800 mb-6">Visit Our Café</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-coral mt-1" />
                  <div>
                    <h3 className="font-semibold text-brown-800">Address</h3>
                    <p className="text-brown-600">
                      123 Coffee Street<br />
                      Brewtown, BT 12345
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-coral mt-1" />
                  <div>
                    <h3 className="font-semibold text-brown-800">Phone</h3>
                    <p className="text-brown-600">(555) 123-BREW</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-coral mt-1" />
                  <div>
                    <h3 className="font-semibold text-brown-800">Email</h3>
                    <p className="text-brown-600">hello@brewbloomcafe.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-coral mt-1" />
                  <div>
                    <h3 className="font-semibold text-brown-800">Opening Hours</h3>
                    <div className="text-brown-600">
                      <p>Monday - Friday: 7:00 AM - 6:00 PM</p>
                      <p>Saturday - Sunday: 8:00 AM - 4:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-xl font-bold text-brown-800 mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="bg-coral text-white p-3 rounded-full hover:bg-coral-dark transition-colors">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="bg-coral text-white p-3 rounded-full hover:bg-coral-dark transition-colors">
                  <Facebook className="h-6 w-6" />
                </a>
              </div>
              <p className="text-brown-600 mt-2">@brewbloomcafe</p>
            </div>

            {/* Map Placeholder */}
            <div className="bg-sage rounded-2xl h-64 flex items-center justify-center">
              <div className="text-center text-white">
                <MapPin className="h-16 w-16 mx-auto mb-4" />
                <p className="text-lg">Interactive Map</p>
                <p className="text-sm opacity-75">Click for directions</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-brown-800 mb-6">Send us a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-brown-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-brown-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-coral"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-brown-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-brown-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-coral"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-brown-700 mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-brown-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-coral"
                >
                  <option value="">Select a subject...</option>
                  <option value="general">General Inquiry</option>
                  <option value="catering">Catering Services</option>
                  <option value="events">Private Events</option>
                  <option value="feedback">Feedback</option>
                  <option value="careers">Careers</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-brown-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-brown-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-coral resize-none"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-coral text-white py-4 rounded-full font-semibold hover:bg-coral-dark transition-colors flex items-center justify-center space-x-2"
              >
                <Send className="h-5 w-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-brown-800 text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-brown-800 mb-3">Do you offer catering services?</h3>
              <p className="text-brown-600">
                Yes! We provide catering for corporate events, private parties, and special occasions. 
                Contact us to discuss your needs and get a custom quote.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-brown-800 mb-3">Can I book the café for private events?</h3>
              <p className="text-brown-600">
                Absolutely! We offer our space for private events outside of regular hours. 
                Please contact us at least 2 weeks in advance to check availability.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-brown-800 mb-3">Do you have WiFi and workspace areas?</h3>
              <p className="text-brown-600">
                Yes, we offer complimentary high-speed WiFi and have comfortable seating areas 
                perfect for working, studying, or casual meetings.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-brown-800 mb-3">Are you hiring?</h3>
              <p className="text-brown-600">
                We're always looking for passionate individuals to join our team! 
                Send us your resume and a brief note about why you'd love to work at BrewBloom.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;