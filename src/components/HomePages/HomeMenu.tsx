'use client'
import React, { useState } from 'react';
import { Great_Vibes } from 'next/font/google';
import Image from 'next/image';

const VibeFont = Great_Vibes({ subsets: ['latin'], weight: ['400'] });

const MenuCategories = ['Breakfast', 'Lunch', 'Dinner', 'Dessert', 'Drink', 'Snack', 'Soups'];

interface MenuItemProps {
  image: string;
  date: string;
  title: string;
  price: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ image, date, title, price }) => (
  <li className="flex items-center gap-4 p-4 hover:bg-gray-800/50 rounded-lg transition-all duration-300 border border-gray-700">
    <Image
      src={image}
      alt={title}
      width={80}
      height={80}
      className="rounded-lg object-cover shadow-md"
    />
    <div className="flex-1">
      <p className="text-gray-400 text-xs mb-1">{date}</p>
      <h3 className="text-white text-sm font-semibold hover:text-[#FF9F0D] transition-colors">
        {title}
      </h3>
      <p className="text-[#FF9F0D] font-bold">${price}</p>
    </div>
  </li>
);

const ChooseFromMenu = () => {
  const [selectedCategory, setSelectedCategory] = useState('Breakfast');

  return (
    <section className="bg-black min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <p className={`${VibeFont.className} text-[#FF9F0D] text-3xl md:text-4xl mb-2 animate-fade-in`}>
            Choose & pick
          </p>
          <h2 className="text-white text-3xl md:text-5xl font-bold">
            <span className="text-[#FF9F0D]">Fr</span>om Our Menu
          </h2>
        </div>

        {/* Categories */}
        <nav className="mb-16">
          <ul className="flex flex-wrap justify-center gap-4 md:gap-8 text-white">
            {MenuCategories.map((category) => (
              <li
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`cursor-pointer px-4 py-2 rounded-lg transition-colors ${
                  selectedCategory === category ? 'text-[#FF9F0D] font-bold border border-[#FF9F0D] shadow-md' : 'hover:text-[#FF9F0D]'
                }`}
              >
                {category}
              </li>
            ))}
          </ul>
        </nav>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Featured Image */}
          <div className="lg:w-1/2">
            <div className="relative group overflow-hidden rounded-lg shadow-xl">
              <Image
                src="/shop-detail/HomeManu.png"
                alt="Featured dish"
                width={666}
                height={662}
                className="w-full max-w-2xl mx-auto rounded-lg transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
            </div>
          </div>

          {/* Menu Items Grid */}
          <div className="lg:w-1/2 grid md:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-4">
              {[...Array(4)].map((_, i) => (
                <MenuItem
                  key={`left-${i}`}
                  image="/shop-detail/homeManu1.png"
                  date="20 Feb 2022"
                  title="Special Breakfast Combo"
                  price="12.50"
                />
              ))}
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              {[...Array(4)].map((_, i) => (
                <MenuItem
                  key={`right-${i}`}
                  image="/shop-detail/homeManu2.png"
                  date="20 Feb 2022"
                  title="Gourmet Lunch Selection"
                  price="14.90"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseFromMenu;
