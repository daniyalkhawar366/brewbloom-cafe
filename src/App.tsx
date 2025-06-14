import React, { useState } from 'react';
import { Coffee, Menu as MenuIcon, X, ShoppingCart, Heart, MapPin, Clock, Star, User, Instagram, Facebook, Mail, Phone } from 'lucide-react';
import HomePage from './components/HomePage';
import MenuPage from './components/MenuPage';
import OrderPage from './components/OrderPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';

export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  tags: string[];
}

export interface CartItem extends MenuItem {
  quantity: number;
  customizations?: string[];
}

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: MenuItem, customizations?: string[]) => {
    setCart(prev => {
      const existing = prev.find(cartItem => 
        cartItem.id === item.id && 
        JSON.stringify(cartItem.customizations) === JSON.stringify(customizations)
      );
      
      if (existing) {
        return prev.map(cartItem => 
          cartItem === existing 
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      
      return [...prev, { ...item, quantity: 1, customizations }];
    });
  };

  const removeFromCart = (id: number, customizations?: string[]) => {
    setCart(prev => prev.filter(item => 
      !(item.id === id && JSON.stringify(item.customizations) === JSON.stringify(customizations))
    ));
  };

  const updateQuantity = (id: number, quantity: number, customizations?: string[]) => {
    if (quantity === 0) {
      removeFromCart(id, customizations);
      return;
    }
    
    setCart(prev => prev.map(item => 
      item.id === id && JSON.stringify(item.customizations) === JSON.stringify(customizations)
        ? { ...item, quantity }
        : item
    ));
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const renderPage = () => {
    switch (currentPage) {
      case 'menu':
        return <MenuPage addToCart={addToCart} />;
      case 'order':
        return <OrderPage cart={cart} updateQuantity={updateQuantity} removeFromCart={removeFromCart} />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-cream">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2 cursor-pointer" onClick={() => setCurrentPage('home')}>
              <Coffee className="h-8 w-8 text-brown-600" />
              <span className="text-xl font-bold text-brown-800">BrewBloom Café</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => setCurrentPage('menu')}
                className={`text-brown-700 hover:text-brown-900 transition-colors ${currentPage === 'menu' ? 'font-semibold' : ''}`}
              >
                Menu
              </button>
              <button
                onClick={() => setCurrentPage('order')}
                className={`text-brown-700 hover:text-brown-900 transition-colors ${currentPage === 'order' ? 'font-semibold' : ''}`}
              >
                Order Online
              </button>
              <button
                onClick={() => setCurrentPage('about')}
                className={`text-brown-700 hover:text-brown-900 transition-colors ${currentPage === 'about' ? 'font-semibold' : ''}`}
              >
                About Us
              </button>
              <button
                onClick={() => setCurrentPage('contact')}
                className={`text-brown-700 hover:text-brown-900 transition-colors ${currentPage === 'contact' ? 'font-semibold' : ''}`}
              >
                Contact
              </button>
              <button
                onClick={() => setCurrentPage('contact')}
                className="bg-coral text-white px-4 py-2 rounded-full hover:bg-coral-dark transition-colors"
              >
                Find Us
              </button>
              <button
                onClick={() => setCurrentPage('order')}
                className="relative text-brown-700 hover:text-brown-900 transition-colors"
              >
                <ShoppingCart className="h-6 w-6" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-coral text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-4">
              <button
                onClick={() => setCurrentPage('order')}
                className="relative text-brown-700"
              >
                <ShoppingCart className="h-6 w-6" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-coral text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-brown-700"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
                <button
                  onClick={() => { setCurrentPage('menu'); setIsMenuOpen(false); }}
                  className="block px-3 py-2 text-brown-700 hover:text-brown-900 w-full text-left"
                >
                  Menu
                </button>
                <button
                  onClick={() => { setCurrentPage('order'); setIsMenuOpen(false); }}
                  className="block px-3 py-2 text-brown-700 hover:text-brown-900 w-full text-left"
                >
                  Order Online
                </button>
                <button
                  onClick={() => { setCurrentPage('about'); setIsMenuOpen(false); }}
                  className="block px-3 py-2 text-brown-700 hover:text-brown-900 w-full text-left"
                >
                  About Us
                </button>
                <button
                  onClick={() => { setCurrentPage('contact'); setIsMenuOpen(false); }}
                  className="block px-3 py-2 text-brown-700 hover:text-brown-900 w-full text-left"
                >
                  Contact
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      {renderPage()}

      {/* Footer */}
      <footer className="bg-brown-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Coffee className="h-8 w-8 text-cream" />
                <span className="text-xl font-bold">BrewBloom Café</span>
              </div>
              <p className="text-brown-200">
                Brewed with love, served with joy. Your neighborhood coffee destination.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><button onClick={() => setCurrentPage('menu')} className="text-brown-200 hover:text-white transition-colors">Menu</button></li>
                <li><button onClick={() => setCurrentPage('order')} className="text-brown-200 hover:text-white transition-colors">Order Online</button></li>
                <li><button onClick={() => setCurrentPage('about')} className="text-brown-200 hover:text-white transition-colors">About Us</button></li>
                <li><button onClick={() => setCurrentPage('contact')} className="text-brown-200 hover:text-white transition-colors">Contact</button></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Opening Hours</h3>
              <div className="space-y-1 text-brown-200">
                <p>Monday - Friday: 7 AM - 6 PM</p>
                <p>Saturday - Sunday: 8 AM - 4 PM</p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <Instagram className="h-6 w-6 text-brown-200 hover:text-white cursor-pointer transition-colors" />
                <Facebook className="h-6 w-6 text-brown-200 hover:text-white cursor-pointer transition-colors" />
                <Mail className="h-6 w-6 text-brown-200 hover:text-white cursor-pointer transition-colors" />
              </div>
            </div>
          </div>

          <div className="border-t border-brown-700 mt-8 pt-8 text-center text-brown-200">
            <p>&copy; 2024 BrewBloom Café. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;