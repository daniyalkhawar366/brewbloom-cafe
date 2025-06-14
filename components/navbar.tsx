"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Logo } from "./logo";
import { usePathname } from "next/navigation";
import { CartButton } from "./cart-button";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Menu", href: "/menu" },
  { name: "Specials", href: "/specials" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const isAboutPage = pathname === "/about";

  React.useEffect(() => {
    const handleScroll = () => {
      if (isHomePage) {
        setIsScrolled(window.scrollY > window.innerHeight);
      } else if (isAboutPage) {
        setIsScrolled(window.scrollY > window.innerHeight * 0.6);
      } else {
        setIsScrolled(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage, isAboutPage]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="ml-[-1rem]"
          >
            {!isHomePage && (
              <div className={cn(
                "transition-colors duration-300",
                (isHomePage || isAboutPage) && !isScrolled
                  ? "text-white"
                  : "text-black"
              )}>
                <Logo />
              </div>
            )}
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden md:flex items-center space-x-8"
          >
            {navItems.map((item) => (
              <motion.div key={item.name}>
                <Link
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors relative",
                    (isHomePage || isAboutPage) && !isScrolled
                      ? "text-white hover:text-softBrown/90"
                      : "text-black hover:text-softBrown",
                    pathname === item.href && "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-softBrown"
                  )}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
            <CartButton />
          </motion.div>

          {/* Mobile Navigation Toggle */}
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className={`h-6 w-6 ${(isHomePage || isAboutPage) && !isScrolled ? "text-white" : "text-black"}`} />
            ) : (
              <Menu className={`h-6 w-6 ${(isHomePage || isAboutPage) && !isScrolled ? "text-white" : "text-black"}`} />
            )}
          </motion.button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-4 bg-softBrown/95 backdrop-blur-sm rounded-lg"
          >
            <div className="flex flex-col space-y-4 p-4">
              {navItems.map((item) => (
                <motion.div key={item.name}>
                  <Link
                    href={item.href}
                    className={cn(
                      "text-sm font-medium text-white hover:text-softBrown/90 transition-colors",
                      pathname === item.href && "text-softBrown"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <div className="flex justify-center">
                <CartButton />
              </div>
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
} 