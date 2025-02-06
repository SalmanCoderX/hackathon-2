import React from "react";
import Image from "next/image";

const chefs = [
  { name: "Tahmina Rumi", role: "Chef", image: "/shop-detail/pic1 (1).png" },
  { name: "Jorina Begum", role: "Chef", image: "/shop-detail/pic2 (1).png" },
  { name: "M. Mohammad", role: "Chef", image: "/shop-detail/pic3 (1).png" },
  { name: "Munna Kathy", role: "Chef", image: "/shop-detail/pic4 (1).png" },
  { name: "Tahmina Rumi", role: "Cook", image: "/shop-detail/pic5 (1).png" },
  { name: "Bisnu Devgon", role: "Chef", image: "/shop-detail/pic6 (1).png" },
  { name: "Motin Molladst", role: "Chef", image: "/shop-detail/pic7 (1).png" },
  { name: "William Rumi", role: "Chef", image: "/shop-detail/pic8 (1).png" },
  { name: "Kets William Roy", role: "Chef", image: "/shop-detail/pic9 (1).png" },
  { name: "Mahmud Kholil", role: "Chef", image: "/shop-detail/pic10 (1).png" },
  { name: "Ataur Rahman", role: "Chef", image: "/shop-detail/pic11 (1).png" },
  { name: "Monalisa Holly", role: "Chef", image: "/shop-detail/pic12 (1).png" },
];

const ChefGrid = () => {
  return (
    <div className="p-6 mt-20">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
        {chefs.map((chef, index) => (
          <div
            key={index}
            className={`relative overflow-hidden rounded-lg shadow-lg bg-white flex flex-col transition-transform transform hover:scale-105 hover:shadow-xl ${index === 6
              ? "border-4 border-purple-600"
              : "border-4 border-transparent hover:border-purple-600"
              }`}
          >
            {/* Chef Image */}
            <div className="relative w-full aspect-[3/4]"> {/* Adjust aspect ratio */}
              <Image
                src={chef.image}
                alt={chef.name}
                layout="fill"
                objectFit="cover"
                objectPosition="top"  // Keeps heads visible
                className="rounded-t-lg"
                priority
              />
            </div>


            {/* Information Section */}
            <div className="p-4 text-center">
              <h3 className="text-gray-800 font-bold text-lg">{chef.name}</h3>
              <p className="text-gray-600">{chef.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChefGrid;
