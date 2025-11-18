'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Trash2, Plus, Minus, ShoppingBag, CreditCard, Truck } from 'lucide-react';
import Header from '@/components/marketplace/Header';
import Footer from '@/components/marketplace/Footer';
import { useCart } from '@/contexts/CartContext';

export default function CartPage() {
  const router = useRouter();
  const { cart, removeFromCart, updateQuantity, getCartTotal, getCartItemCount, clearCart } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  // Shipping calculation
  const subtotal = getCartTotal();
  const shipping = subtotal > 50 ? 0 : 9.99;
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + shipping + tax;

  const handleCheckout = () => {
    setIsCheckingOut(true);
    // Simulate order processing
    setTimeout(() => {
      setOrderPlaced(true);
      clearCart();
    }, 2000);
  };

  if (orderPlaced) {
    return (
      <div className="min-h-screen flex flex-col bg-[hsl(220,14%,96%)]">
        <Header cartItemCount={0} />
        <main className="flex-1 container mx-auto px-4 py-12">
          <div className="max-w-[600px] mx-auto bg-white rounded-[12px] p-8 shadow-md text-center">
            <div className="w-[80px] h-[80px] bg-[hsl(160,84%,39%)] rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingBag size={40} className="text-white" />
            </div>
            <h1 className="text-[28px] font-bold text-[hsl(222,47%,11%)] mb-3">
              Order Placed Successfully!
            </h1>
            <p className="text-[14px] text-[hsl(220,9%,46%)] mb-6">
              Thank you for your purchase. Your order has been confirmed and will be shipped soon.
            </p>
            <div className="bg-[hsl(220,14%,96%)] rounded-[8px] p-4 mb-6">
              <p className="text-[14px] text-[hsl(220,9%,46%)] mb-1">Order Number</p>
              <p className="text-[20px] font-bold text-[hsl(222,47%,11%)]">
                #{Math.random().toString(36).substr(2, 9).toUpperCase()}
              </p>
            </div>
            <button
              onClick={() => router.push('/')}
              className="bg-[hsl(217,91%,60%)] hover:bg-[hsl(224,76%,40%)] text-white px-8 py-3 rounded-[8px] text-[14px] font-medium transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex flex-col bg-[hsl(220,14%,96%)]">
        <Header cartItemCount={0} />
        <main className="flex-1 container mx-auto px-4 py-12">
          <div className="max-w-[600px] mx-auto bg-white rounded-[12px] p-8 shadow-md text-center">
            <ShoppingBag size={64} className="text-[hsl(220,9%,46%)] mx-auto mb-4" />
            <h1 className="text-[24px] font-bold text-[hsl(222,47%,11%)] mb-3">
              Your Cart is Empty
            </h1>
            <p className="text-[14px] text-[hsl(220,9%,46%)] mb-6">
              Looks like you haven't added any items to your cart yet.
            </p>
            <button
              onClick={() => router.push('/')}
              className="bg-[hsl(217,91%,60%)] hover:bg-[hsl(224,76%,40%)] text-white px-8 py-3 rounded-[8px] text-[14px] font-medium transition-colors"
            >
              Start Shopping
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-[hsl(220,14%,96%)]">
      <Header cartItemCount={getCartItemCount()} />

      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-[28px] font-bold text-[hsl(222,47%,11%)] mb-6">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="bg-white rounded-[12px] p-4 shadow-md">
                <div className="flex items-start space-x-4">
                  {/* Product Image */}
                  <Link href={`/product/${item.id}`}>
                    <div className="relative w-[100px] h-[100px] rounded-[8px] overflow-hidden flex-shrink-0 cursor-pointer">
                      <Image
                        src={item.images[0]}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </Link>

                  {/* Product Info */}
                  <div className="flex-1 min-w-0">
                    <Link href={`/product/${item.id}`}>
                      <h3 className="text-[16px] font-semibold text-[hsl(222,47%,11%)] mb-1 hover:text-[hsl(217,91%,60%)] cursor-pointer transition-colors">
                        {item.name}
                      </h3>
                    </Link>
                    <p className="text-[12px] text-[hsl(220,9%,46%)] mb-2">
                      by {item.seller.name}
                    </p>
                    <p className="text-[18px] font-bold text-[hsl(224,76%,40%)] mb-3">
                      ${item.price.toFixed(2)}
                    </p>

                    {/* Quantity Controls */}
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-[32px] h-[32px] border border-[hsl(220,13%,91%)] rounded-[6px] hover:bg-[hsl(220,14%,96%)] transition-colors flex items-center justify-center"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="text-[14px] font-medium w-[40px] text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-[32px] h-[32px] border border-[hsl(220,13%,91%)] rounded-[6px] hover:bg-[hsl(220,14%,96%)] transition-colors flex items-center justify-center"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>

                  {/* Remove Button & Item Total */}
                  <div className="flex flex-col items-end space-y-2">
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-[hsl(0,72%,60%)] hover:text-[hsl(0,72%,50%)] transition-colors"
                    >
                      <Trash2 size={18} />
                    </button>
                    <p className="text-[16px] font-bold text-[hsl(222,47%,11%)]">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary - Sticky */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-[12px] p-6 shadow-md sticky top-24">
              <h2 className="text-[20px] font-bold text-[hsl(222,47%,11%)] mb-4">
                Order Summary
              </h2>

              <div className="space-y-3 mb-4 pb-4 border-b border-[hsl(220,13%,91%)]">
                <div className="flex justify-between text-[14px]">
                  <span className="text-[hsl(220,9%,46%)]">Subtotal</span>
                  <span className="font-medium text-[hsl(222,47%,11%)]">
                    ${subtotal.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between text-[14px]">
                  <span className="text-[hsl(220,9%,46%)]">Shipping</span>
                  <span className="font-medium text-[hsl(222,47%,11%)]">
                    {shipping === 0 ? (
                      <span className="text-[hsl(160,84%,39%)]">FREE</span>
                    ) : (
                      `$${shipping.toFixed(2)}`
                    )}
                  </span>
                </div>
                <div className="flex justify-between text-[14px]">
                  <span className="text-[hsl(220,9%,46%)]">Tax</span>
                  <span className="font-medium text-[hsl(222,47%,11%)]">
                    ${tax.toFixed(2)}
                  </span>
                </div>
              </div>

              {subtotal < 50 && (
                <div className="bg-[hsl(220,14%,96%)] rounded-[8px] p-3 mb-4">
                  <p className="text-[12px] text-[hsl(220,9%,46%)]">
                    Add ${(50 - subtotal).toFixed(2)} more to get FREE shipping!
                  </p>
                </div>
              )}

              <div className="flex justify-between text-[18px] font-bold mb-6">
                <span className="text-[hsl(222,47%,11%)]">Total</span>
                <span className="text-[hsl(224,76%,40%)]">${total.toFixed(2)}</span>
              </div>

              <button
                onClick={handleCheckout}
                disabled={isCheckingOut}
                className="w-full bg-[hsl(217,91%,60%)] hover:bg-[hsl(224,76%,40%)] disabled:bg-[hsl(220,13%,91%)] text-white py-4 rounded-[8px] text-[16px] font-semibold flex items-center justify-center space-x-2 transition-colors mb-3"
              >
                <CreditCard size={20} />
                <span>{isCheckingOut ? 'Processing...' : 'Proceed to Checkout'}</span>
              </button>

              <button
                onClick={() => router.push('/')}
                className="w-full border-2 border-[hsl(220,13%,91%)] hover:bg-[hsl(220,14%,96%)] text-[hsl(222,47%,11%)] py-3 rounded-[8px] text-[14px] font-medium transition-colors"
              >
                Continue Shopping
              </button>

              {/* Payment & Shipping Info */}
              <div className="mt-6 pt-6 border-t border-[hsl(220,13%,91%)] space-y-3">
                <div className="flex items-start space-x-3 text-[13px]">
                  <Truck size={18} className="text-[hsl(217,91%,60%)] flex-shrink-0 mt-0.5" />
                  <span className="text-[hsl(220,9%,46%)]">
                    Free shipping on orders over $50
                  </span>
                </div>
                <div className="flex items-start space-x-3 text-[13px]">
                  <CreditCard size={18} className="text-[hsl(217,91%,60%)] flex-shrink-0 mt-0.5" />
                  <span className="text-[hsl(220,9%,46%)]">
                    Secure payment processing
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
