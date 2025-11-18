'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Monitor, BookOpen, Truck, Shirt, Home as HomeIcon } from 'lucide-react';
import Header from '@/components/marketplace/Header';
import Footer from '@/components/marketplace/Footer';
import ProductCard from '@/components/marketplace/ProductCard';
import CategoryIcon from '@/components/marketplace/CategoryIcon';
import { products, getFeaturedProducts, searchProducts } from '@/lib/mockData';
import { useCart } from '@/contexts/CartContext';

export default function HomePage() {
  const [featuredProducts] = useState(getFeaturedProducts(10));
  const [searchResults, setSearchResults] = useState<typeof products | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const { addToCart, getCartItemCount } = useCart();

  const handleSearch = (query: string) => {
    const results = searchProducts(query);
    setSearchResults(results);
  };

  const displayProducts = searchResults || featuredProducts;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 5) % displayProducts.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 5 + displayProducts.length) % displayProducts.length);
  };

  const visibleProducts = displayProducts.slice(currentSlide, currentSlide + 5);

  return (
    <div className="min-h-screen flex flex-col bg-[hsl(220,14%,96%)]">
      <Header cartItemCount={getCartItemCount()} onSearch={handleSearch} />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-white mb-8">
          <div className="container mx-auto px-4 py-0">
            <div className="relative h-[300px] md:h-[400px] rounded-[12px] overflow-hidden shadow-md">
              <Image
                src="/generated/hero-banner.png"
                alt="Discover your next favorite thing"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent flex items-center">
                <div className="container mx-auto px-8">
                  <h1 className="text-white text-[28px] md:text-[36px] font-bold uppercase mb-4 max-w-[500px] leading-tight">
                    DISCOVER YOUR NEXT
                    <br />
                    FAVORITE THING
                  </h1>
                  <button className="bg-[hsl(217,91%,60%)] hover:bg-[hsl(224,76%,40%)] text-white px-6 py-3 rounded-[8px] text-[14px] font-medium transition-colors">
                    SHOP NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Flash Sale Banner */}
        <section className="container mx-auto px-4 mb-8">
          <div className="bg-[hsl(217,91%,60%)] text-white rounded-[8px] p-6 text-center shadow-md">
            <h2 className="text-[20px] font-bold mb-1">FLASH SALE! UP TO 50% OFF</h2>
            <p className="text-[14px] text-white/90">FREE SHIPPING ON ALL ORDERS OVER $50</p>
          </div>
        </section>

        {/* Category Icons */}
        <section className="container mx-auto px-4 mb-12">
          <div className="flex justify-center items-center space-x-6 flex-wrap gap-y-4">
            <CategoryIcon icon={Monitor} label="Electronics" href="/category/electronics" color="blue" />
            <CategoryIcon icon={BookOpen} label="Books" href="/category/books" color="green" />
            <CategoryIcon icon={Truck} label="Fast Shipping" href="/shipping" color="teal" />
            <CategoryIcon icon={Shirt} label="Clothing" href="/category/clothing" color="red" />
            <CategoryIcon icon={HomeIcon} label="Home & Garden" href="/category/home" color="yellow" />
          </div>
        </section>

        {/* Featured Products Section */}
        <section className="container mx-auto px-4 mb-12">
          <div className="bg-white rounded-[12px] p-6 shadow-md">
            <h2 className="text-[20px] font-bold text-[hsl(222,47%,11%)] mb-6 text-center">
              {searchResults ? 'SEARCH RESULTS' : 'FEATURED PRODUCTS'}
            </h2>

            <div className="relative">
              {/* Products Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-4">
                {visibleProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    price={product.price}
                    originalPrice={product.originalPrice}
                    image={product.images[0]}
                    rating={product.rating}
                    reviewCount={product.reviewCount}
                    sellerName={product.seller.name}
                    onAddToCart={() => addToCart(product)}
                  />
                ))}
              </div>

              {/* Navigation Arrows */}
              {displayProducts.length > 5 && (
                <div className="flex justify-center items-center space-x-4">
                  <button
                    onClick={prevSlide}
                    className="bg-[hsl(220,13%,91%)] hover:bg-[hsl(217,91%,60%)] text-[hsl(222,47%,11%)] hover:text-white p-2 rounded-full transition-colors"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <span className="text-[14px] text-[hsl(220,9%,46%)]">
                    {Math.floor(currentSlide / 5) + 1} / {Math.ceil(displayProducts.length / 5)}
                  </span>
                  <button
                    onClick={nextSlide}
                    className="bg-[hsl(220,13%,91%)] hover:bg-[hsl(217,91%,60%)] text-[hsl(222,47%,11%)] hover:text-white p-2 rounded-full transition-colors"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Product Recommendations Section */}
        <section className="container mx-auto px-4 mb-12">
          <div className="bg-white rounded-[12px] p-6 shadow-md">
            <h2 className="text-[20px] font-bold text-[hsl(222,47%,11%)] mb-6 text-center">
              PRODUCT RECOMMENDATIONS
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {products.slice(10, 15).map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  originalPrice={product.originalPrice}
                  image={product.images[0]}
                  rating={product.rating}
                  reviewCount={product.reviewCount}
                  sellerName={product.seller.name}
                  onAddToCart={() => addToCart(product)}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
