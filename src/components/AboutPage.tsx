import React from 'react';
import { Users, Award, Heart, Coffee } from 'lucide-react';

const AboutPage: React.FC = () => {
  const team = [
    {
      name: 'Sarah Mitchell',
      role: 'Owner & Head Barista',
      bio: 'Coffee enthusiast with 10+ years of experience. Passionate about creating the perfect cup.',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Marcus Chen',
      role: 'Pastry Chef',
      bio: 'Former fine dining pastry chef bringing artisanal baked goods to our café.',
      image: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Emma Rodriguez',
      role: 'Barista & Coffee Trainer',
      bio: 'Latte art specialist and coffee education advocate. Loves sharing coffee knowledge.',
      image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'David Thompson',
      role: 'Roaster & Sourcing Manager',
      bio: 'Travels the world to source the finest beans and manages our roasting operations.',
      image: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=300'
    }
  ];

  const values = [
    {
      icon: <Coffee className="h-12 w-12 text-coral" />,
      title: 'Quality First',
      description: 'We source the finest beans from sustainable farms and roast them to perfection in small batches.'
    },
    {
      icon: <Heart className="h-12 w-12 text-coral" />,
      title: 'Community Love',
      description: 'Our café is a gathering place where friendships bloom and memories are made over great coffee.'
    },
    {
      icon: <Award className="h-12 w-12 text-coral" />,
      title: 'Craftsmanship',
      description: 'Every drink is carefully crafted by skilled baristas who take pride in their artistry.'
    },
    {
      icon: <Users className="h-12 w-12 text-coral" />,
      title: 'Local Impact',
      description: 'We support local farmers, artists, and businesses while giving back to our community.'
    }
  ];

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="relative h-96 bg-cover bg-center" style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.pexels.com/photos/6205509/pexels-photo-6205509.jpeg?auto=compress&cs=tinysrgb&w=1200')`
      }}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">About BrewBloom Café</h1>
            <p className="text-xl max-w-2xl">
              Where passion for coffee meets community spirit
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-brown-800 mb-6">Our Story</h2>
              <div className="space-y-4 text-brown-600 text-lg">
                <p>
                  BrewBloom Café was born from a simple dream: to create a space where exceptional coffee 
                  meets genuine community warmth. Founded in 2018 by Sarah Mitchell, our café started as 
                  a small neighborhood gathering spot and has grown into a beloved local institution.
                </p>
                <p>
                  We believe that great coffee has the power to bring people together, spark conversations, 
                  and create lasting memories. Every cup we serve is a testament to our commitment to 
                  quality, sustainability, and the art of coffee making.
                </p>
                <p>
                  From our carefully sourced beans to our house-made pastries, everything at BrewBloom 
                  is crafted with love, attention to detail, and respect for the craft that makes each 
                  visit special.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <img 
                src="https://images.pexels.com/photos/4350057/pexels-photo-4350057.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="Coffee being poured"
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
              />
              <img 
                src="https://images.pexels.com/photos/302908/pexels-photo-302908.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="Coffee beans"
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-brown-800 mb-4">Our Values</h2>
            <p className="text-lg text-brown-600 max-w-2xl mx-auto">
              These core principles guide everything we do, from sourcing our beans to serving our community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-brown-800 mb-4">{value.title}</h3>
                <p className="text-brown-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-brown-800 mb-4">Meet the Team</h2>
            <p className="text-lg text-brown-600 max-w-2xl mx-auto">
              Get to know the passionate people behind your perfect cup of coffee.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-cream p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-32 h-32 object-cover rounded-full mx-auto mb-4 shadow-lg"
                />
                <h3 className="text-xl font-bold text-brown-800 mb-2">{member.name}</h3>
                <p className="text-coral font-semibold mb-3">{member.role}</p>
                <p className="text-brown-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-16 bg-sage text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Commitment to Sustainability</h2>
              <div className="space-y-4 text-lg">
                <p>
                  At BrewBloom Café, we're committed to making a positive impact on our planet. 
                  We work directly with coffee farmers to ensure fair trade practices and 
                  sustainable growing methods.
                </p>
                <ul className="space-y-2">
                  <li>• 100% ethically sourced coffee beans</li>
                  <li>• Biodegradable and compostable packaging</li>
                  <li>• Local partnerships to reduce transportation footprint</li>
                  <li>• Comprehensive recycling and waste reduction programs</li>
                  <li>• Energy-efficient equipment and renewable energy usage</li>
                </ul>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/4226868/pexels-photo-4226868.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Sustainable coffee farming"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-brown-800 mb-12">Awards & Recognition</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="bg-coral rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-brown-800 mb-2">Best Local Café 2023</h3>
              <p className="text-brown-600">Brewtown Community Choice Awards</p>
            </div>
            
            <div className="p-6">
              <div className="bg-coral rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-brown-800 mb-2">Sustainability Champion</h3>
              <p className="text-brown-600">Green Business Network 2023</p>
            </div>
            
            <div className="p-6">
              <div className="bg-coral rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-brown-800 mb-2">Top Coffee Roaster</h3>
              <p className="text-brown-600">Regional Coffee Association 2022</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;