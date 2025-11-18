'use client';

import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[hsl(217,91%,60%)] text-white mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-6">
          {/* Logo and Description */}
          <div className="col-span-1">
            <div className="text-[18px] font-bold mb-3">CommerceGo</div>
            <p className="text-[13px] text-white/80 leading-relaxed">
              Your one-stop marketplace for quality products at great prices.
            </p>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="text-[14px] font-semibold mb-3">SHOP</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/category/electronics" className="text-[13px] text-white/80 hover:text-white transition-colors">
                  Electronics
                </Link>
              </li>
              <li>
                <Link href="/category/home" className="text-[13px] text-white/80 hover:text-white transition-colors">
                  Home & Garden
                </Link>
              </li>
              <li>
                <Link href="/category/clothing" className="text-[13px] text-white/80 hover:text-white transition-colors">
                  Clothing
                </Link>
              </li>
              <li>
                <Link href="/category/books" className="text-[13px] text-white/80 hover:text-white transition-colors">
                  Books
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-[14px] font-semibold mb-3">CUSTOMER SERVICE</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-[13px] text-white/80 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-[13px] text-white/80 hover:text-white transition-colors">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-[13px] text-white/80 hover:text-white transition-colors">
                  Returns
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-[13px] text-white/80 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-[14px] font-semibold mb-3">NEWSLETTER</h4>
            <p className="text-[13px] text-white/80 mb-3">
              Subscribe for exclusive deals and updates
            </p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Your email"
                className="px-3 py-2 rounded-[6px] text-[13px] text-[hsl(222,47%,11%)] focus:outline-none focus:ring-2 focus:ring-white/30"
              />
              <button
                type="submit"
                className="bg-white text-[hsl(217,91%,60%)] px-4 py-2 rounded-[6px] text-[13px] font-medium hover:bg-white/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-[12px] text-white/70">
            © 2024 CommerceGo. All rights reserved.
          </div>

          {/* Social Icons */}
          <div className="flex items-center space-x-4">
            <Link href="https://facebook.com" target="_blank" className="text-white/70 hover:text-white transition-colors">
              <Facebook size={18} />
            </Link>
            <Link href="https://twitter.com" target="_blank" className="text-white/70 hover:text-white transition-colors">
              <Twitter size={18} />
            </Link>
            <Link href="https://instagram.com" target="_blank" className="text-white/70 hover:text-white transition-colors">
              <Instagram size={18} />
            </Link>
          </div>

          {/* Legal Links */}
          <div className="flex items-center space-x-4 text-[12px]">
            <Link href="/privacy" className="text-white/70 hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-white/70 hover:text-white transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
