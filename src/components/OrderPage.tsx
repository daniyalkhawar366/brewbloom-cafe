import React, { useState } from 'react';
import { Minus, Plus, Trash2, ShoppingCart, Clock, MapPin, CreditCard } from 'lucide-react';
import { CartItem } from '../App';

interface OrderPageProps {
  cart: CartItem[];
  updateQuantity: (id: number, quantity: number, customizations?: string[]) => void;
  removeFromCart: (id: number, customizations?: string[]) => void;
}

const OrderPage: React.FC<OrderPageProps> = ({ cart, updateQuantity, removeFromCart }) => {
  const [orderType, setOrderType] = useState<'pickup' | 'delivery'>('pickup');
  const [showCheckout, setShowCheckout] = useState(false);
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    pickupTime: ''
  });

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = subtotal * 0.08;
  const deliveryFee = orderType === 'delivery' ? 2.99 : 0;
  const total = subtotal + tax + deliveryFee;

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle checkout logic here
    alert('Order placed successfully! You will receive a confirmation email shortly.');
    setShowCheckout(false);
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center">
        <div className="text-center">
          <ShoppingCart className="h-24 w-24 text-brown-300 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-brown-800 mb-4">Your cart is empty</h2>
          <p className="text-brown-600 mb-8">Browse our menu to start adding delicious items to your order.</p>
          <button 
            onClick={() => window.history.back()}
            className="bg-coral text-white px-8 py-3 rounded-full font-semibold hover:bg-coral-dark transition-colors"
          >
            Browse Menu
          </button>
        </div>
      </div>
    );
  }

  if (showCheckout) {
    return (
      <div className="min-h-screen bg-cream py-8">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-brown-800 mb-8">Checkout</h2>
            
            <form onSubmit={handleCheckout} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-brown-700 mb-2">Name</label>
                  <input
                    type="text"
                    required
                    value={customerInfo.name}
                    onChange={(e) => setCustomerInfo({...customerInfo, name: e.target.value})}
                    className="w-full px-4 py-3 border border-brown-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-coral"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-brown-700 mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={customerInfo.email}
                    onChange={(e) => setCustomerInfo({...customerInfo, email: e.target.value})}
                    className="w-full px-4 py-3 border border-brown-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-coral"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-brown-700 mb-2">Phone</label>
                <input
                  type="tel"
                  required
                  value={customerInfo.phone}
                  onChange={(e) => setCustomerInfo({...customerInfo, phone: e.target.value})}
                  className="w-full px-4 py-3 border border-brown-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-coral"
                />
              </div>

              {orderType === 'delivery' && (
                <div>
                  <label className="block text-sm font-medium text-brown-700 mb-2">Delivery Address</label>
                  <textarea
                    required
                    value={customerInfo.address}
                    onChange={(e) => setCustomerInfo({...customerInfo, address: e.target.value})}
                    className="w-full px-4 py-3 border border-brown-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-coral"
                    rows={3}
                  />
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-brown-700 mb-2">
                  {orderType === 'pickup' ? 'Pickup Time' : 'Preferred Delivery Time'}
                </label>
                <select
                  required
                  value={customerInfo.pickupTime}
                  onChange={(e) => setCustomerInfo({...customerInfo, pickupTime: e.target.value})}
                  className="w-full px-4 py-3 border border-brown-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-coral"
                >
                  <option value="">Select time...</option>
                  <option value="ASAP">ASAP (15-20 minutes)</option>
                  <option value="30min">In 30 minutes</option>
                  <option value="1hour">In 1 hour</option>
                  <option value="2hours">In 2 hours</option>
                </select>
              </div>

              {/* Order Summary */}
              <div className="bg-cream p-6 rounded-xl">
                <h3 className="font-semibold text-brown-800 mb-4">Order Summary</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  {deliveryFee > 0 && (
                    <div className="flex justify-between">
                      <span>Delivery Fee</span>
                      <span>${deliveryFee.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="border-t border-brown-200 pt-2 flex justify-between font-semibold">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <div className="flex space-x-4">
                <button
                  type="button"
                  onClick={() => setShowCheckout(false)}
                  className="flex-1 bg-brown-200 text-brown-800 py-3 rounded-full font-semibold hover:bg-brown-300 transition-colors"
                >
                  Back to Cart
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-coral text-white py-3 rounded-full font-semibold hover:bg-coral-dark transition-colors flex items-center justify-center space-x-2"
                >
                  <CreditCard className="h-5 w-5" />
                  <span>Place Order</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-brown-800 text-center mb-8">Your Order</h1>

        {/* Order Type Selection */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-brown-800 mb-4">Order Type</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button
              onClick={() => setOrderType('pickup')}
              className={`p-4 rounded-xl border-2 transition-colors ${
                orderType === 'pickup'
                  ? 'border-coral bg-coral bg-opacity-10 text-coral'
                  : 'border-brown-200 text-brown-600 hover:border-brown-300'
              }`}
            >
              <Clock className="h-8 w-8 mx-auto mb-2" />
              <h3 className="font-semibold">Pickup</h3>
              <p className="text-sm">Ready in 15-20 minutes</p>
            </button>
            <button
              onClick={() => setOrderType('delivery')}
              className={`p-4 rounded-xl border-2 transition-colors ${
                orderType === 'delivery'
                  ? 'border-coral bg-coral bg-opacity-10 text-coral'
                  : 'border-brown-200 text-brown-600 hover:border-brown-300'
              }`}
            >
              <MapPin className="h-8 w-8 mx-auto mb-2" />
              <h3 className="font-semibold">Delivery</h3>
              <p className="text-sm">$2.99 delivery fee</p>
            </button>
          </div>
        </div>

        {/* Cart Items */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-brown-800 mb-6">Cart Items</h2>
          <div className="space-y-4">
            {cart.map((item, index) => (
              <div key={`${item.id}-${index}`} className="flex items-center space-x-4 p-4 bg-cream rounded-xl">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-brown-800">{item.name}</h3>
                  <p className="text-sm text-brown-600">{item.description}</p>
                  {item.customizations && item.customizations.length > 0 && (
                    <p className="text-sm text-sage">
                      Customizations: {item.customizations.join(', ')}
                    </p>
                  )}
                  <p className="font-semibold text-coral">${item.price.toFixed(2)}</p>
                </div>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1, item.customizations)}
                    className="w-8 h-8 rounded-full bg-brown-200 text-brown-800 flex items-center justify-center hover:bg-brown-300 transition-colors"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="font-semibold text-brown-800 w-8 text-center">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1, item.customizations)}
                    className="w-8 h-8 rounded-full bg-coral text-white flex items-center justify-center hover:bg-coral-dark transition-colors"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
                <button
                  onClick={() => removeFromCart(item.id, item.customizations)}
                  className="text-red-500 hover:text-red-700 transition-colors p-2"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Order Summary */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-brown-800 mb-6">Order Summary</h2>
          <div className="space-y-3">
            <div className="flex justify-between text-brown-600">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-brown-600">
              <span>Tax (8%)</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            {deliveryFee > 0 && (
              <div className="flex justify-between text-brown-600">
                <span>Delivery Fee</span>
                <span>${deliveryFee.toFixed(2)}</span>
              </div>
            )}
            <div className="border-t border-brown-200 pt-3 flex justify-between text-xl font-bold text-brown-800">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
          
          <button
            onClick={() => setShowCheckout(true)}
            className="w-full mt-6 bg-coral text-white py-4 rounded-full text-lg font-semibold hover:bg-coral-dark transition-colors"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;