"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/cart-context";

const specialOffers = [
  {
    id: "morning-delight",
    name: "Morning Delight",
    description: "Start your day with our special breakfast combo: any coffee + croissant",
    price: 6.99,
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    icon: "☀️",
  },
  {
    id: "sweet-treat-combo",
    name: "Sweet Treat Combo",
    description: "Any pastry + specialty coffee for a perfect afternoon break",
    price: 7.99,
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    icon: "🍰",
  },
  {
    id: "weekend-brunch",
    name: "Weekend Brunch Special",
    description: "Enjoy our weekend brunch menu with a complimentary mimosa",
    price: 15.99,
    image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    icon: "🍳",
  },
];

export default function Specials() {
  const { addItem } = useCart();

  return (
    <main className="min-h-screen bg-cream pt-32 pb-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="font-script text-5xl mb-4">Special Offers</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our limited-time specials and exclusive deals, crafted to enhance your BrewBloom experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialOffers.map((offer, index) => (
            <motion.div
              key={offer.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <div className="relative h-48">
                <img
                  src={offer.image}
                  alt={offer.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 text-4xl">
                  {offer.icon}
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h2 className="font-serif text-xl">{offer.name}</h2>
                  <span className="text-softBrown font-medium">
                    ${offer.price.toFixed(2)}
                  </span>
                </div>
                <p className="text-muted-foreground mb-4">{offer.description}</p>
                <Button
                  className="w-full bg-softBrown hover:bg-softBrown/90 text-white"
                  onClick={() => addItem({ ...offer, quantity: 1 })}
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