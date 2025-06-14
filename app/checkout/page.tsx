"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCart } from "@/context/cart-context";
import { Trash2 } from "lucide-react";
import { useState } from "react";

export default function Checkout() {
  const { items, removeItem, updateQuantity, total, clearCart } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000));
    clearCart();
    setIsProcessing(false);
    // Redirect to success page or show success message
  };

  return (
    <main className="min-h-screen bg-cream pt-32 pb-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="font-script text-5xl mb-4">Checkout</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Review your order and complete your payment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Order Summary */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <h2 className="font-serif text-2xl mb-6">Order Summary</h2>
            {items.length === 0 ? (
              <p className="text-muted-foreground">Your cart is empty</p>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between border-b pb-4"
                  >
                    <div className="flex items-center gap-4">
                      {item.image && (
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded"
                        />
                      )}
                      <div>
                        <h3 className="font-medium">{item.name}</h3>
                        <p className="text-muted-foreground">
                          ${item.price.toFixed(2)}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          -
                        </Button>
                        <span>{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          +
                        </Button>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeItem(item.id)}
                      >
                        <Trash2 className="h-4 w-4 text-red-500" />
                      </Button>
                    </div>
                  </div>
                ))}
                <div className="flex justify-between items-center pt-4">
                  <span className="font-medium">Total</span>
                  <span className="font-medium">${total.toFixed(2)}</span>
                </div>
              </div>
            )}
          </motion.div>

          {/* Payment Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <h2 className="font-serif text-2xl mb-6">Payment Details</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Full Name
                </label>
                <Input id="name" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input id="email" type="email" required />
              </div>
              <div>
                <label htmlFor="card" className="block text-sm font-medium mb-2">
                  Card Number
                </label>
                <Input id="card" placeholder="1234 5678 9012 3456" required />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="expiry" className="block text-sm font-medium mb-2">
                    Expiry Date
                  </label>
                  <Input id="expiry" placeholder="MM/YY" required />
                </div>
                <div>
                  <label htmlFor="cvv" className="block text-sm font-medium mb-2">
                    CVV
                  </label>
                  <Input id="cvv" placeholder="123" required />
                </div>
              </div>
              <Button
                type="submit"
                className="w-full bg-softBrown hover:bg-softBrown/90 text-white"
                disabled={isProcessing || items.length === 0}
              >
                {isProcessing ? "Processing..." : "Pay Now"}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </main>
  );
} 