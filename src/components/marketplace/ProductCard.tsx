'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Star, ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviewCount: number;
  sellerName: string;
  onAddToCart?: () => void;
}

export default function ProductCard({
  id,
  name,
  price,
  originalPrice,
  image,
  rating,
  reviewCount,
  sellerName,
  onAddToCart
}: ProductCardProps) {
  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

  return (
    <div className="group relative w-full max-w-[200px] bg-white rounded-[8px] overflow-hidden shadow hover-lift cursor-pointer transition-all">
      <Link href={`/product/${id}`}>
        {/* Image Container */}
        <div className="relative w-full aspect-square overflow-hidden bg-[hsl(220,14%,96%)]">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 200px"
          />
          {discount > 0 && (
            <div className="absolute top-2 left-2 bg-[hsl(0,72%,60%)] text-white text-[11px] font-semibold px-2 py-1 rounded-[4px]">
              -{discount}%
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-3">
          {/* Product Name */}
          <h3 className="text-[14px] font-medium text-[hsl(222,47%,11%)] line-clamp-2 mb-1 group-hover:text-[hsl(217,91%,60%)] transition-colors">
            {name}
          </h3>

          {/* Seller */}
          <p className="text-[12px] text-[hsl(220,9%,46%)] mb-2">
            by {sellerName}
          </p>

          {/* Rating */}
          <div className="flex items-center space-x-1 mb-2">
            <div className="flex items-center">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={12}
                  className={i < Math.floor(rating) ? 'fill-[hsl(38,92%,50%)] text-[hsl(38,92%,50%)]' : 'text-[hsl(220,13%,91%)]'}
                />
              ))}
            </div>
            <span className="text-[11px] text-[hsl(220,9%,46%)]">
              ({reviewCount})
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center space-x-2 mb-3">
            <span className="text-[16px] font-bold text-[hsl(224,76%,40%)]">
              ${price.toFixed(2)}
            </span>
            {originalPrice && (
              <span className="text-[12px] text-[hsl(220,9%,46%)] line-through">
                ${originalPrice.toFixed(2)}
              </span>
            )}
          </div>
        </div>
      </Link>

      {/* Quick Add Button */}
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          onAddToCart?.();
        }}
        className="absolute bottom-3 left-3 right-3 bg-[hsl(217,91%,60%)] text-white text-[12px] font-medium py-2 rounded-[6px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-[hsl(224,76%,40%)] flex items-center justify-center space-x-1"
      >
        <ShoppingCart size={14} />
        <span>Add to Cart</span>
      </button>
    </div>
  );
}
