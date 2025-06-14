"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/cart-context";
import { useState } from "react";

const menuItems = [
  {
    id: "espresso",
    name: "Espresso",
    description: "Rich and bold single shot espresso",
    price: 3.50,
    category: "Coffee",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    id: "cappuccino",
    name: "Cappuccino",
    description: "Espresso with steamed milk and foam",
    price: 4.50,
    category: "Coffee",
    image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    id: "latte",
    name: "Latte",
    description: "Espresso with steamed milk",
    price: 4.75,
    category: "Coffee",
    image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    id: "croissant",
    name: "Butter Croissant",
    description: "Flaky, buttery pastry",
    price: 3.50,
    category: "Pastries",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    id: "chocolate-cake",
    name: "Chocolate Cake",
    description: "Rich chocolate cake with ganache",
    price: 5.50,
    category: "Pastries",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    id: "fruit-tart",
    name: "Fruit Tart",
    description: "Custard tart with fresh seasonal fruits",
    price: 4.75,
    category: "Pastries",
    image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
];

const categories = ["All", "Coffee", "Pastries"];

export default function Menu() {
  const { addItem } = useCart();
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems = selectedCategory === "All"
    ? menuItems
    : menuItems.filter((item) => item.category === selectedCategory);

  return (
    <main className="min-h-screen bg-cream pt-32 pb-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="font-script text-5xl mb-4">Our Menu</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our selection of handcrafted coffees and freshly baked pastries.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className={
                selectedCategory === category
                  ? "bg-softBrown hover:bg-softBrown/90 text-white"
                  : "border-softBrown text-softBrown hover:bg-softBrown hover:text-white"
              }
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <div className="relative h-48">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h2 className="font-serif text-xl">{item.name}</h2>
                  <span className="text-softBrown font-medium">
                    ${item.price.toFixed(2)}
                  </span>
                </div>
                <p className="text-muted-foreground mb-4">{item.description}</p>
                <Button
                  className="w-full bg-softBrown hover:bg-softBrown/90 text-white"
                  onClick={() => addItem({ ...item, quantity: 1 })}
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Add to Cart
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
} 