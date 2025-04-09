"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

import { Button } from "../../components/ui/button";
import { cn } from "../../lib/utils";
import Link from "next/link";

const navas = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <Link href="/" className="text-xl font-bold">
            Ahmed Calif
          </Link>
        </div>

        <div className="hidden md:block">
          <ul className="flex space-x-8">
            {navas.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden md:block">
          <Button asChild>
            <a href="/contact">Get in Touch</a>
          </Button>
        </div>

        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      <div className={cn("md:hidden", mobileMenuOpen ? "block" : "hidden")}>
        <div className="space-y-1 px-4 pb-5 pt-2">
          {navas.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block py-2 text-base font-medium transition-colors hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4">
            <Button asChild className="w-full">
              <a href="/contact">Get in Touch</a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
