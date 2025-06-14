"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Coffee, Cookie, Plus, Minus, ShoppingCart } from "lucide-react";
import { useState } from "react";

const menuItems = [
  {
    category: "Hot Coffee",
    items: [
      { id: 1, name: "Espresso", price: 3.50, description: "Rich and bold" },
      { id: 2, name: "Cappuccino", price: 4.50, description: "Espresso with steamed milk" },
      { id: 3, name: "Latte", price: 4.75, description: "Espresso with steamed milk and foam" },
      { id: 4, name: "Americano", price: 4.00, description: "Espresso with hot water" },
    ],
    icon: Coffee,
  },
  {
    category: "Pastries",
    items: [
      { id: 5, name: "Croissant", price: 3.50, description: "Buttery and flaky" },
      { id: 6, name: "Chocolate Muffin", price: 3.75, description: "Rich chocolate flavor" },
      { id: 7, name: "Cinnamon Roll", price: 4.25, description: "Sweet and spiced" },
      { id: 8, name: "Almond Danish", price: 4.00, description: "Buttery with almond filling" },
    ],
    icon: Cookie,
  },
];

export default function Order() {
  const [cart, setCart] = useState<{ id: number; quantity: number }[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const addToCart = (id: number) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === id);
      if (existing) {
        return prev.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { id, quantity: 1 }];
    });
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === id);
      if (existing && existing.quantity > 1) {
        return prev.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        );
      }
      return prev.filter((item) => item.id !== id);
    });
  };

  const getCartItem = (id: number) => {
    return cart.find((item) => item.id === id);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => {
      const menuItem = menuItems
        .flatMap((category) => category.items)
        .find((menuItem) => menuItem.id === item.id);
      return total + (menuItem?.price || 0) * item.quantity;
    }, 0);
  };

  return (
    <main className="min-h-screen bg-cream py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="font-script text-5xl mb-4">Order Online</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse our menu and place your order for pickup or delivery.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {menuItems.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="flex items-center gap-3 mb-6">
                  <category.icon className="h-8 w-8 text-softBrown" />
                  <h2 className="font-serif text-2xl">{category.category}</h2>
                </div>
                <div className="space-y-4">
                  {category.items.map((item) => (
                    <div
                      key={item.id}
                      className="flex justify-between items-center border-b border-gray-100 pb-4 last:border-0"
                    >
                      <div>
                        <h3 className="font-medium">{item.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {item.description}
                        </p>
                        <span className="text-softBrown font-medium">
                          ${item.price.toFixed(2)}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => removeFromCart(item.id)}
                          disabled={!getCartItem(item.id)}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="w-8 text-center">
                          {getCartItem(item.id)?.quantity || 0}
                        </span>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => addToCart(item.id)}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white p-6 rounded-lg shadow-lg h-fit"
          >
            <div className="flex items-center gap-3 mb-6">
              <ShoppingCart className="h-8 w-8 text-softBrown" />
              <h2 className="font-serif text-2xl">Your Order</h2>
            </div>

            <div className="space-y-4 mb-6">
              {cart.map((item) => {
                const menuItem = menuItems
                  .flatMap((category) => category.items)
                  .find((menuItem) => menuItem.id === item.id);
                return (
                  <div
                    key={item.id}
                    className="flex justify-between items-center"
                  >
                    <div>
                      <h3 className="font-medium">{menuItem?.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        Quantity: {item.quantity}
                      </p>
                    </div>
                    <span className="font-medium">
                      ${((menuItem?.price || 0) * item.quantity).toFixed(2)}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="border-t border-gray-100 pt-4 mb-6">
              <div className="flex justify-between items-center font-medium">
                <span>Total</span>
                <span>${getTotalPrice().toFixed(2)}</span>
              </div>
            </div>

            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Phone
                </label>
                <Input
                  id="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="(555) 123-4567"
                />
              </div>
              <Button
                className="w-full bg-softBrown hover:bg-softBrown/90 text-white"
                disabled={cart.length === 0}
              >
                Place Order
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </main>
  );
} 