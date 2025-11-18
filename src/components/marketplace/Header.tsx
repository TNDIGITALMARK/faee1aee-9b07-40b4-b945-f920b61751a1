'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, ShoppingCart, User, Menu, X } from 'lucide-react';

interface HeaderProps {
  cartItemCount?: number;
  onSearch?: (query: string) => void;
}

export default function Header({ cartItemCount = 0, onSearch }: HeaderProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch && searchQuery.trim()) {
      onSearch(searchQuery);
    }
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-[70px]">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-[18px] font-bold text-[hsl(217,91%,60%)]">
              CommerceGo
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 text-[14px] font-medium">
            <Link href="/" className="text-[hsl(224,76%,40%)] hover:text-[hsl(217,91%,60%)] transition-colors">
              HOME
            </Link>
            <Link href="/shop" className="text-[hsl(224,76%,40%)] hover:text-[hsl(217,91%,60%)] transition-colors">
              SHOP
            </Link>
            <Link href="/deals" className="text-[hsl(224,76%,40%)] hover:text-[hsl(217,91%,60%)] transition-colors">
              DEALS
            </Link>
            <Link href="/new-arrivals" className="text-[hsl(224,76%,40%)] hover:text-[hsl(217,91%,60%)] transition-colors">
              NEW ARRIVALS
            </Link>
            <Link href="/contact" className="text-[hsl(224,76%,40%)] hover:text-[hsl(217,91%,60%)] transition-colors">
              CONTACT
            </Link>
          </nav>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="hidden md:flex items-center flex-1 max-w-[500px] mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search for products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-[40px] pl-4 pr-10 border border-[hsl(220,13%,91%)] rounded-[8px] text-[14px] focus:outline-none focus:border-[hsl(217,91%,60%)] focus:ring-2 focus:ring-[hsl(217,91%,60%)]/20 transition-all"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 text-[hsl(220,9%,46%)] hover:text-[hsl(217,91%,60%)] transition-colors"
              >
                <Search size={20} />
              </button>
            </div>
          </form>

          {/* Action Icons */}
          <div className="flex items-center space-x-4">
            <Link
              href="/account"
              className="hidden md:flex items-center space-x-1 text-[hsl(220,9%,46%)] hover:text-[hsl(217,91%,60%)] transition-colors"
            >
              <User size={20} />
            </Link>

            <Link
              href="/cart"
              className="relative flex items-center space-x-1 text-[hsl(220,9%,46%)] hover:text-[hsl(217,91%,60%)] transition-colors"
            >
              <ShoppingCart size={20} />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[hsl(0,72%,60%)] text-white text-[11px] font-semibold rounded-full w-[18px] h-[18px] flex items-center justify-center">
                  {cartItemCount > 9 ? '9+' : cartItemCount}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-[hsl(220,9%,46%)] hover:text-[hsl(217,91%,60%)] transition-colors"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <form onSubmit={handleSearch} className="md:hidden pb-3">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-[40px] pl-4 pr-10 border border-[hsl(220,13%,91%)] rounded-[8px] text-[14px] focus:outline-none focus:border-[hsl(217,91%,60%)] focus:ring-2 focus:ring-[hsl(217,91%,60%)]/20 transition-all"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 text-[hsl(220,9%,46%)] hover:text-[hsl(217,91%,60%)] transition-colors"
            >
              <Search size={20} />
            </button>
          </div>
        </form>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[hsl(220,13%,91%)] bg-white">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-3">
            <Link href="/" className="text-[14px] font-medium text-[hsl(224,76%,40%)] hover:text-[hsl(217,91%,60%)] transition-colors py-2">
              HOME
            </Link>
            <Link href="/shop" className="text-[14px] font-medium text-[hsl(224,76%,40%)] hover:text-[hsl(217,91%,60%)] transition-colors py-2">
              SHOP
            </Link>
            <Link href="/deals" className="text-[14px] font-medium text-[hsl(224,76%,40%)] hover:text-[hsl(217,91%,60%)] transition-colors py-2">
              DEALS
            </Link>
            <Link href="/new-arrivals" className="text-[14px] font-medium text-[hsl(224,76%,40%)] hover:text-[hsl(217,91%,60%)] transition-colors py-2">
              NEW ARRIVALS
            </Link>
            <Link href="/contact" className="text-[14px] font-medium text-[hsl(224,76%,40%)] hover:text-[hsl(217,91%,60%)] transition-colors py-2">
              CONTACT
            </Link>
            <Link href="/account" className="text-[14px] font-medium text-[hsl(224,76%,40%)] hover:text-[hsl(217,91%,60%)] transition-colors py-2 flex items-center space-x-2">
              <User size={16} />
              <span>MY ACCOUNT</span>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
