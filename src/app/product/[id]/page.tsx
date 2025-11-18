'use client';

import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { Star, ShoppingCart, Truck, Shield, RotateCcw, ChevronLeft } from 'lucide-react';
import Header from '@/components/marketplace/Header';
import Footer from '@/components/marketplace/Footer';
import { getProductById } from '@/lib/mockData';
import { useCart } from '@/contexts/CartContext';

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const productId = params.id as string;
  const product = getProductById(productId);
  const { addToCart, getCartItemCount } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col bg-[hsl(220,14%,96%)]">
        <Header cartItemCount={getCartItemCount()} />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-[24px] font-bold text-[hsl(222,47%,11%)] mb-4">Product Not Found</h1>
            <button
              onClick={() => router.push('/')}
              className="bg-[hsl(217,91%,60%)] text-white px-6 py-3 rounded-[8px] hover:bg-[hsl(224,76%,40%)] transition-colors"
            >
              Back to Home
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    router.push('/cart');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[hsl(220,14%,96%)]">
      <Header cartItemCount={getCartItemCount()} />

      <main className="flex-1 container mx-auto px-4 py-8">
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="flex items-center space-x-2 text-[hsl(217,91%,60%)] hover:text-[hsl(224,76%,40%)] mb-6 transition-colors"
        >
          <ChevronLeft size={20} />
          <span className="text-[14px] font-medium">Back to Shopping</span>
        </button>

        <div className="bg-white rounded-[12px] p-6 md:p-8 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Images */}
            <div>
              {/* Main Image */}
              <div className="relative aspect-square rounded-[12px] overflow-hidden bg-[hsl(220,14%,96%)] mb-4">
                <Image
                  src={product.images[selectedImage]}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Thumbnail Images */}
              {product.images.length > 1 && (
                <div className="grid grid-cols-4 gap-2">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`relative aspect-square rounded-[8px] overflow-hidden ${
                        selectedImage === index
                          ? 'ring-2 ring-[hsl(217,91%,60%)]'
                          : 'ring-1 ring-[hsl(220,13%,91%)]'
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`${product.name} view ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Right Column - Product Info */}
            <div>
              <h1 className="text-[28px] font-bold text-[hsl(222,47%,11%)] mb-3">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex items-center">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={
                        i < Math.floor(product.rating)
                          ? 'fill-[hsl(38,92%,50%)] text-[hsl(38,92%,50%)]'
                          : 'text-[hsl(220,13%,91%)]'
                      }
                    />
                  ))}
                </div>
                <span className="text-[14px] text-[hsl(220,9%,46%)]">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center space-x-3 mb-6">
                <span className="text-[36px] font-bold text-[hsl(224,76%,40%)]">
                  ${product.price.toFixed(2)}
                </span>
                {product.originalPrice && (
                  <>
                    <span className="text-[20px] text-[hsl(220,9%,46%)] line-through">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                    <span className="bg-[hsl(0,72%,60%)] text-white text-[14px] font-semibold px-2 py-1 rounded-[4px]">
                      Save {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                    </span>
                  </>
                )}
              </div>

              {/* Stock Status */}
              <div className="mb-6">
                {product.inStock ? (
                  <span className="text-[hsl(160,84%,39%)] text-[14px] font-medium">
                    ✓ In Stock
                  </span>
                ) : (
                  <span className="text-[hsl(0,72%,60%)] text-[14px] font-medium">
                    Out of Stock
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-[14px] text-[hsl(222,47%,11%)] leading-relaxed mb-6">
                {product.description}
              </p>

              {/* Quantity Selector */}
              <div className="mb-6">
                <label className="block text-[14px] font-medium text-[hsl(222,47%,11%)] mb-2">
                  Quantity:
                </label>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-[40px] h-[40px] border border-[hsl(220,13%,91%)] rounded-[8px] hover:bg-[hsl(220,14%,96%)] transition-colors flex items-center justify-center"
                  >
                    -
                  </button>
                  <span className="text-[18px] font-medium w-[50px] text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-[40px] h-[40px] border border-[hsl(220,13%,91%)] rounded-[8px] hover:bg-[hsl(220,14%,96%)] transition-colors flex items-center justify-center"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className="w-full bg-[hsl(217,91%,60%)] hover:bg-[hsl(224,76%,40%)] disabled:bg-[hsl(220,13%,91%)] disabled:cursor-not-allowed text-white py-4 rounded-[8px] text-[16px] font-semibold flex items-center justify-center space-x-2 transition-colors mb-4"
              >
                <ShoppingCart size={20} />
                <span>Add to Cart</span>
              </button>

              {/* Benefits */}
              <div className="border-t border-[hsl(220,13%,91%)] pt-6 space-y-3">
                <div className="flex items-center space-x-3 text-[14px]">
                  <Truck size={20} className="text-[hsl(217,91%,60%)]" />
                  <span className="text-[hsl(222,47%,11%)]">Free shipping on orders over $50</span>
                </div>
                <div className="flex items-center space-x-3 text-[14px]">
                  <RotateCcw size={20} className="text-[hsl(217,91%,60%)]" />
                  <span className="text-[hsl(222,47%,11%)]">30-day return policy</span>
                </div>
                <div className="flex items-center space-x-3 text-[14px]">
                  <Shield size={20} className="text-[hsl(217,91%,60%)]" />
                  <span className="text-[hsl(222,47%,11%)]">Secure checkout guaranteed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Seller Information */}
          <div className="mt-8 border-t border-[hsl(220,13%,91%)] pt-6">
            <h2 className="text-[20px] font-bold text-[hsl(222,47%,11%)] mb-4">
              Seller Information
            </h2>
            <div className="bg-[hsl(220,14%,96%)] rounded-[8px] p-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-[16px] font-semibold text-[hsl(222,47%,11%)] mb-2">
                    {product.seller.name}
                  </h3>
                  <div className="flex items-center space-x-2 mb-1">
                    <div className="flex items-center">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className={
                            i < Math.floor(product.seller.rating)
                              ? 'fill-[hsl(38,92%,50%)] text-[hsl(38,92%,50%)]'
                              : 'text-[hsl(220,13%,91%)]'
                          }
                        />
                      ))}
                    </div>
                    <span className="text-[13px] text-[hsl(220,9%,46%)]">
                      {product.seller.rating} ({product.seller.totalReviews.toLocaleString()} reviews)
                    </span>
                  </div>
                  <p className="text-[13px] text-[hsl(220,9%,46%)]">
                    Response time: {product.seller.responseTime}
                  </p>
                  <p className="text-[13px] text-[hsl(220,9%,46%)]">
                    Ships from: {product.shipsFrom}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Customer Reviews */}
          <div className="mt-8 border-t border-[hsl(220,13%,91%)] pt-6">
            <h2 className="text-[20px] font-bold text-[hsl(222,47%,11%)] mb-4">
              Customer Reviews
            </h2>
            {product.reviews.length > 0 ? (
              <div className="space-y-4">
                {product.reviews.map((review) => (
                  <div key={review.id} className="border-b border-[hsl(220,13%,91%)] pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <span className="text-[14px] font-medium text-[hsl(222,47%,11%)]">
                          {review.userName}
                        </span>
                        <div className="flex items-center">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              size={12}
                              className={
                                i < review.rating
                                  ? 'fill-[hsl(38,92%,50%)] text-[hsl(38,92%,50%)]'
                                  : 'text-[hsl(220,13%,91%)]'
                              }
                            />
                          ))}
                        </div>
                      </div>
                      <span className="text-[12px] text-[hsl(220,9%,46%)]">
                        {new Date(review.date).toLocaleDateString()}
                      </span>
                    </div>
                    <p className="text-[14px] text-[hsl(222,47%,11%)]">{review.comment}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-[14px] text-[hsl(220,9%,46%)]">
                No reviews yet. Be the first to review this product!
              </p>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
