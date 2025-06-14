"use client";

import { useCart } from "@/context/cart-context";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function CartButton() {
  const { items } = useCart();
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Change color after hero section (approximately 100vh)
      setIsScrolled(window.scrollY > window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const itemCount = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <Link href="/checkout">
      <button
        className={`relative p-2 rounded-full transition-colors ${
          isHomePage && !isScrolled
            ? "text-white hover:bg-white/10"
            : "text-black hover:bg-gray-100"
        }`}
      >
        <ShoppingCart className="h-6 w-6" />
        {itemCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-softBrown text-white text-xs font-medium rounded-full h-5 w-5 flex items-center justify-center">
            {itemCount}
          </span>
        )}
      </button>
    </Link>
  );
} 