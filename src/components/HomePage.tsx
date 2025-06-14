import React from 'react';
import { Star, MapPin, Clock, User, ThumbsUp } from 'lucide-react';

interface HomePageProps {
  setCurrentPage: (page: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ setCurrentPage }) => {
  const specials = [
    {
      id: 1,
      name: 'Vanilla Oat Latte',
      description: 'Creamy oat milk with a hint of vanilla',
      image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: 4.50
    },
    {
      id: 2,
      name: 'Lemon Poppy Muffin',
      description: 'Zesty lemon muffin with poppy seeds',
      image: 'https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: 3.25
    },
    {
      id: 3,
      name: 'Iced Caramel Macchiato',
      description: 'Refreshing caramel macchiato on ice',
      image: 'https://images.pexels.com/photos/851555/pexels-photo-851555.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: 5.00
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Sophia Carter',
      time: '2 weeks ago',
      rating: 5,
      review: 'BrewBloom Café is my go-to spot for a perfect latte and cozy atmosphere. The staff is always friendly, and the pastries are divine!',
      likes: 5,
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      id: 2,
      name: 'Ethan Bennett',
      time: '1 month ago',
      rating: 5,
      review: 'Great coffee and a relaxed vibe. The perfect place to unwind or catch up with friends. Their seasonal specials are always a treat.',
      likes: 3,
      avatar: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=100'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 bg-cover bg-center" style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=1200')`
      }}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Brewed with Love. Served with Joy.
            </h1>
            <div className="space-x-4">
              <button
                onClick={() => setCurrentPage('menu')}
                className="bg-coral text-white px-8 py-3 rounded-full font-semibold hover:bg-coral-dark transition-colors"
              >
                View Menu
              </button>
              <button
                onClick={() => setCurrentPage('order')}
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-brown-800 transition-colors"
              >
                Order Online
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brown-800 mb-4">About Us</h2>
            <p className="text-lg text-brown-600 max-w-3xl mx-auto">
              At BrewBloom Café, we're passionate about crafting exceptional coffee experiences. Our cozy space is designed for 
              community, comfort, and connection. We source the finest beans, roast them in-house, and serve each cup with care. Our 
              menu features a delightful array of pastries, sandwiches, and seasonal specials, all made with fresh, local ingredients. Come 
              join us and savor the moment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="https://images.pexels.com/photos/6205509/pexels-photo-6205509.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="Café interior" 
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="https://images.pexels.com/photos/4350057/pexels-photo-4350057.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="Barista pouring coffee" 
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="https://images.pexels.com/photos/1055270/pexels-photo-1055270.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="Fresh pastries" 
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Specials of the Week */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brown-800 text-center mb-12">Specials of the Week</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specials.map((special) => (
              <div key={special.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${special.image})` }}></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-brown-800 mb-2">{special.name}</h3>
                  <p className="text-brown-600 mb-4">{special.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-coral">${special.price.toFixed(2)}</span>
                    <button 
                      onClick={() => setCurrentPage('menu')}
                      className="bg-coral text-white px-4 py-2 rounded-full hover:bg-coral-dark transition-colors"
                    >
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brown-800 text-center mb-12">Customer Testimonials</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-cream p-8 rounded-2xl shadow-lg">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-brown-800">{testimonial.name}</h4>
                    <p className="text-sm text-brown-600">{testimonial.time}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-brown-700 mb-4">"{testimonial.review}"</p>
                
                <div className="flex items-center space-x-4 text-sm text-brown-600">
                  <div className="flex items-center">
                    <ThumbsUp className="h-4 w-4 mr-1" />
                    {testimonial.likes}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Find Us Section */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brown-800 text-center mb-12">Find Us</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-sage rounded-2xl h-96 flex items-center justify-center">
              <div className="text-center text-white">
                <MapPin className="h-16 w-16 mx-auto mb-4" />
                <p className="text-lg">Interactive Map</p>
                <p className="text-sm opacity-75">123 Coffee Street, Brewtown</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="flex items-center mb-4">
                  <Clock className="h-6 w-6 text-coral mr-3" />
                  <h3 className="text-xl font-semibold text-brown-800">Opening Hours</h3>
                </div>
                <div className="space-y-2 text-brown-600">
                  <p>Monday - Friday: 7 AM - 6 PM</p>
                  <p>Saturday - Sunday: 8 AM - 4 PM</p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="flex items-center mb-4">
                  <MapPin className="h-6 w-6 text-coral mr-3" />
                  <h3 className="text-xl font-semibold text-brown-800">Location</h3>
                </div>
                <p className="text-brown-600 mb-4">123 Coffee Street, Brewtown, BT 12345</p>
                <button 
                  onClick={() => setCurrentPage('contact')}
                  className="bg-coral text-white px-6 py-2 rounded-full hover:bg-coral-dark transition-colors"
                >
                  Get Directions
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-brown-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay in the Loop</h2>
          <p className="text-lg text-brown-200 mb-8">
            Get 10% off your first online order and stay updated with our latest specials and events.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-full text-brown-800 focus:outline-none focus:ring-2 focus:ring-coral"
            />
            <button className="bg-coral text-white px-8 py-3 rounded-full font-semibold hover:bg-coral-dark transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;