import React, { useState } from 'react';
import { Plus, Heart, Filter } from 'lucide-react';
import { MenuItem } from '../App';

interface MenuPageProps {
  addToCart: (item: MenuItem, customizations?: string[]) => void;
}

const MenuPage: React.FC<MenuPageProps> = ({ addToCart }) => {
  const [activeCategory, setActiveCategory] = useState('Coffee');
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [favorites, setFavorites] = useState<number[]>([]);

  const categories = ['Coffee', 'Tea', 'Pastries', 'Breakfast', 'Seasonal'];
  const filters = ['Vegan', 'Gluten-Free', 'Iced', 'Hot', 'Dairy-Free'];

  const menuItems: MenuItem[] = [
    // Coffee
    {
      id: 1,
      name: 'Classic Espresso',
      description: 'Rich, bold espresso shot made from our signature blend',
      price: 2.50,
      image: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Coffee',
      tags: ['Hot']
    },
    {
      id: 2,
      name: 'Vanilla Oat Latte',
      description: 'Creamy oat milk with a hint of vanilla and our house espresso',
      price: 4.50,
      image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Coffee',
      tags: ['Hot', 'Dairy-Free', 'Vegan']
    },
    {
      id: 3,
      name: 'Iced Caramel Macchiato',
      description: 'Espresso, steamed milk, vanilla syrup, and caramel drizzle over ice',
      price: 5.00,
      image: 'https://images.pexels.com/photos/851555/pexels-photo-851555.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Coffee',
      tags: ['Iced']
    },
    {
      id: 4,
      name: 'Cappuccino',
      description: 'Equal parts espresso, steamed milk, and milk foam',
      price: 4.00,
      image: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Coffee',
      tags: ['Hot']
    },
    // Tea
    {
      id: 5,
      name: 'Earl Grey',
      description: 'Classic bergamot-infused black tea blend',
      price: 3.00,
      image: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Tea',
      tags: ['Hot', 'Vegan', 'Dairy-Free']
    },
    {
      id: 6,
      name: 'Chamomile Honey',
      description: 'Soothing chamomile tea with local honey',
      price: 3.25,
      image: 'https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Tea',
      tags: ['Hot', 'Dairy-Free']
    },
    // Pastries
    {
      id: 7,
      name: 'Lemon Poppy Muffin',
      description: 'Zesty lemon muffin with poppy seeds and glaze',
      price: 3.25,
      image: 'https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Pastries',
      tags: []
    },
    {
      id: 8,
      name: 'Almond Croissant',
      description: 'Buttery croissant filled with almond cream',
      price: 4.00,
      image: 'https://images.pexels.com/photos/1055270/pexels-photo-1055270.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Pastries',
      tags: []
    },
    {
      id: 9,
      name: 'Vegan Blueberry Scone',
      description: 'Plant-based scone bursting with fresh blueberries',
      price: 3.50,
      image: 'https://images.pexels.com/photos/4099095/pexels-photo-4099095.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Pastries',
      tags: ['Vegan', 'Dairy-Free']
    },
    // Breakfast
    {
      id: 10,
      name: 'Avocado Toast',
      description: 'Smashed avocado on sourdough with tomato and hemp seeds',
      price: 8.50,
      image: 'https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Breakfast',
      tags: ['Vegan', 'Dairy-Free']
    },
    {
      id: 11,
      name: 'Classic Bagel & Cream Cheese',
      description: 'Fresh bagel with house-made cream cheese',
      price: 6.00,
      image: 'https://images.pexels.com/photos/4686818/pexels-photo-4686818.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Breakfast',
      tags: []
    },
    // Seasonal
    {
      id: 12,
      name: 'Pumpkin Spice Latte',
      description: 'Espresso with pumpkin spice and steamed milk',
      price: 5.25,
      image: 'https://images.pexels.com/photos/7260277/pexels-photo-7260277.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Seasonal',
      tags: ['Hot', 'Seasonal']
    }
  ];

  const filteredItems = menuItems.filter(item => 
    item.category === activeCategory &&
    (selectedFilters.length === 0 || selectedFilters.some(filter => item.tags.includes(filter)))
  );

  const toggleFilter = (filter: string) => {
    setSelectedFilters(prev => 
      prev.includes(filter) 
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    );
  };

  const toggleFavorite = (itemId: number) => {
    setFavorites(prev => 
      prev.includes(itemId)
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  return (
    <div className="min-h-screen bg-cream py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-brown-800 mb-4">Our Menu</h1>
          <p className="text-lg text-brown-600">
            Carefully crafted beverages and fresh baked goods made with love
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-colors ${
                activeCategory === category
                  ? 'bg-coral text-white'
                  : 'bg-white text-brown-700 hover:bg-brown-50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <div className="flex items-center text-brown-600 mr-4">
            <Filter className="h-5 w-5 mr-2" />
            <span className="font-medium">Filters:</span>
          </div>
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => toggleFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedFilters.includes(filter)
                  ? 'bg-sage text-white'
                  : 'bg-white text-brown-600 hover:bg-brown-50'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map(item => (
            <div key={item.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative">
                <div 
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${item.image})` }}
                ></div>
                <button
                  onClick={() => toggleFavorite(item.id)}
                  className={`absolute top-4 right-4 p-2 rounded-full ${
                    favorites.includes(item.id)
                      ? 'bg-coral text-white'
                      : 'bg-white text-brown-600 hover:bg-brown-50'
                  } transition-colors`}
                >
                  <Heart className={`h-5 w-5 ${favorites.includes(item.id) ? 'fill-current' : ''}`} />
                </button>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-brown-800">{item.name}</h3>
                  <span className="text-2xl font-bold text-coral">${item.price.toFixed(2)}</span>
                </div>
                
                <p className="text-brown-600 mb-4">{item.description}</p>
                
                {item.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.map(tag => (
                      <span 
                        key={tag} 
                        className="px-2 py-1 bg-sage bg-opacity-20 text-sage text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                
                <button
                  onClick={() => addToCart(item)}
                  className="w-full bg-coral text-white py-3 rounded-full font-semibold hover:bg-coral-dark transition-colors flex items-center justify-center space-x-2"
                >
                  <Plus className="h-5 w-5" />
                  <span>Add to Order</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-brown-600">No items match your current filters.</p>
            <button
              onClick={() => setSelectedFilters([])}
              className="mt-4 text-coral hover:text-coral-dark font-semibold"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuPage;