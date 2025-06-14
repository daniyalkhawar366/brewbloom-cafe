"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Coffee, Cookie, Heart, MapPin } from "lucide-react";
import Link from "next/link";

const features = [
  {
    title: "Artisanal Coffee",
    description: "Handcrafted with precision and passion",
    icon: Coffee,
  },
  {
    title: "Fresh Pastries",
    description: "Baked daily with premium ingredients",
    icon: Cookie,
  },
  {
    title: "Cozy Atmosphere",
    description: "The perfect spot to relax and unwind",
    icon: Heart,
  },
];

const menuPreview = [
  {
    name: "Espresso",
    price: "$3.50",
    description: "Rich and bold",
  },
  {
    name: "Cappuccino",
    price: "$4.50",
    description: "Espresso with steamed milk",
  },
  {
    name: "Croissant",
    price: "$3.50",
    description: "Buttery and flaky",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <motion.div
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-black/40" />
          <img
            src="/images/hero-bg.jpg"
            alt="BrewBloom Café Interior"
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80";
            }}
          />
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-script text-6xl md:text-7xl mb-6"
          >
            BrewBloom Café
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="font-serif text-xl md:text-2xl mb-8"
          >
            Brewed with Love. Served with Joy.
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex justify-center"
          >
            <Link href="/menu">
              <Button
                size="lg"
                className="bg-softBrown hover:bg-softBrown/90 text-white"
              >
                View Menu <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-4xl mb-4">Our Specialties</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover our carefully crafted selection of specialty coffees and
              artisanal pastries, made with love and the finest ingredients.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <feature.icon className="h-12 w-12 text-softBrown mb-4" />
                <h3 className="font-serif text-xl mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Preview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-4xl mb-4">Featured Menu Items</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A taste of what we offer. Visit our full menu for more delicious options.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {menuPreview.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-cream p-6 rounded-lg shadow-lg"
              >
                <h3 className="font-serif text-xl mb-2">{item.name}</h3>
                <p className="text-muted-foreground mb-2">{item.description}</p>
                <span className="text-softBrown font-medium">{item.price}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link href="/menu">
              <Button className="bg-softBrown hover:bg-softBrown/90 text-white">
                View Full Menu <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-4xl mb-4">Visit Us</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find us in the heart of the city, where great coffee meets great company.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-lg shadow-lg max-w-3xl mx-auto"
          >
            <div className="aspect-video bg-gray-100 rounded-lg mb-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425882426698!3d40.74076987932881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sGoogle!5e0!3m2!1sen!2sus!4v1683904837427!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              />
            </div>
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <MapPin className="h-5 w-5 text-softBrown" />
              <p>123 Coffee Street, Brewville, CA 90210</p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 