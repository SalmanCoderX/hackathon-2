"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const Shopdetail = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className='bg-white'>
      {/* Header Section */}
      <header className='bg-black text-white py-4 px-8 flex justify-between items-center'>
        <h1 className='text-xl font-bold'>FoodTuck</h1>
        <nav>
          <ul className='flex space-x-6'>
            <li className='hover:text-orange-400 transition'>Home</li>
            <li className='hover:text-orange-400 transition'>Shop</li>
            <li className='hover:text-orange-400 transition'>Contact</li>
          </ul>
        </nav>
      </header>
      <div className='relative h-64 bg-cover bg-center flex items-center justify-center text-white' style={{ backgroundImage: "url('/shop-bg.jpg')" }}>
        <h2 className='text-4xl font-bold'>Our Shop</h2>
      </div>
      
      {/* Main Content */}
      <div className='max-w-[1320px] mx-auto mt-10 flex flex-col md:flex-row'>
        {/* Left Small Images */}
        <div className='flex flex-col gap-4 mr-4'>
          {[1, 2, 3, 4].map((img, index) => (
            <motion.div whileHover={{ scale: 1.1 }} key={index}>
              <Image src={`/shop-detail/slide${img}.png`} alt={`Image ${img}`} width={132} height={129} className='rounded-md border-2' />
            </motion.div>
          ))}
        </div>

        {/* Large Image */}
        <motion.div className='mr-4' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <Image src='/shop-detail/slidebgpic.png' alt='Large Image' width={491} height={596} className='rounded-md' />
        </motion.div>

        {/* Details Section */}
        <div className='flex-1'>
          <h1 className='font-bold text-4xl'>Yummy Chicken Chup</h1>
          <p className='text-lg text-gray-600'>Delicious crispy chicken with perfect seasoning.</p>
          <span className='text-2xl font-bold'>$54.00</span>
          
          {/* Quantity Selector & Add to Cart */}
          <div className='flex items-center gap-4 my-4'>
            <Button onClick={() => setQuantity(q => Math.max(1, q - 1))}>-</Button>
            <span>{quantity}</span>
            <Button onClick={() => setQuantity(q => q + 1)}>+</Button>
            <Button className='bg-orange-400 text-white px-6 py-2 rounded'>Add to Cart</Button>
          </div>
        </div>
      </div>
      
      {/* Footer Section */}
      <footer className='bg-black text-white py-10 mt-10'>
        <div className='max-w-[1320px] mx-auto grid md:grid-cols-3 gap-6'>
          <div>
            <h3 className='text-lg font-bold'>About Us</h3>
            <p>Delicious food, quick service, and amazing experience.</p>
          </div>
          <div>
            <h3 className='text-lg font-bold'>Quick Links</h3>
            <ul>
              <li className='hover:text-orange-400 transition'>Menu</li>
              <li className='hover:text-orange-400 transition'>Contact</li>
            </ul>
          </div>
          <div>
            <h3 className='text-lg font-bold'>Subscribe</h3>
            <input type='email' placeholder='Your Email' className='p-2 rounded text-black'/>
            <Button className='bg-orange-400 text-white px-4 py-2 rounded mt-2'>Subscribe</Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Shopdetail;
