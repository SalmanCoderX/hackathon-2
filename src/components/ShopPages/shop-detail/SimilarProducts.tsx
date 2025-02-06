"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const ShopDetail = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="bg-white">
      <motion.div
        className="max-w-[1320px] mx-auto mt-[130px] flex flex-col md:flex-row"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Left images */}
        <div className="flex flex-col gap-4 mr-4">
          {[1, 2, 3, 4].map((img, index) => (
            <motion.div whileHover={{ scale: 1.1 }} key={index}>
              <Image
                src={`/shop-detail/slide${img}.png`}
                alt={`Thumbnail ${img}`}
                width={132}
                height={129}
                className="rounded-md border-2 cursor-pointer"
              />
            </motion.div>
          ))}
        </div>

        {/* Large image */}
        <div className="m-[30px] md:mr-4">
          <Image
            src="/shop-detail/slidebgpic.png"
            alt="Large Product Image"
            width={491}
            height={596}
            className="rounded-md shadow-md"
          />
        </div>

        {/* Details section */}
        <div className="flex-1">
          <div className="flex items-center mb-4">
            <span className="bg-[#FF9F0D] text-white px-4 py-1 rounded-full">In stock</span>
          </div>

          <h1 className="font-bold text-[48px] leading-[56px] mb-2">Yummy Chicken Chup</h1>

          <p className="text-[18px] leading-[26px] mb-4 max-w-[608px]">
            A delicious crispy chicken with premium spices and herbs, perfect for every meal.
          </p>

          <hr className="mb-4" />

          {/* Price & Rating */}
          <div className="flex items-center mb-4">
            <span className="font-bold text-[32px] text-[#FF9F0D]">$54.00</span>
          </div>

          {/* Quantity Selector & Add to Cart */}
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center gap-2 bg-gray-100 p-2 rounded-md">
              <Button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="hover:bg-gray-200">-</Button>
              <span className="text-lg font-medium">{quantity}</span>
              <Button onClick={() => setQuantity(quantity + 1)} className="hover:bg-gray-200">+</Button>
            </div>
            <Button className="bg-[#FF9F0D] text-white px-6 py-2 rounded-md shadow-md hover:bg-orange-600 transition-all">
              Add to Cart
            </Button>
          </div>

          <hr className="mb-4" />

          {/* Wishlist & Compare */}
          <div className="flex items-center gap-4 mb-4">
            <motion.div whileHover={{ scale: 1.1 }} className="flex items-center gap-2 cursor-pointer text-gray-700 hover:text-red-500">
              ❤️ <span>Wishlist</span>
            </motion.div>
            <span className="text-gray-500">|</span>
            <motion.div whileHover={{ scale: 1.1 }} className="cursor-pointer text-gray-700 hover:text-blue-500">
              Compare
            </motion.div>
          </div>

          <p className="mb-2 text-gray-600">Category: Pizza</p>
          <p className="mb-2 text-gray-600">Tag: Our shop</p>

          {/* Social Media Icons */}
          <div className="flex items-center gap-4 mb-4">
            <span>Share:</span>
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
              <motion.div key={i} whileHover={{ scale: 1.2 }}>
                <Icon className="w-6 h-6 text-gray-500 hover:text-blue-600 cursor-pointer" />
              </motion.div>
            ))}
          </div>

          <hr />
        </div>
      </motion.div>
    </div>
  );
};

export default ShopDetail;
