import Image from 'next/image';

export default function RecentPostsSection() {
  const posts = [
    { 
      title: "Is fast food good for your body?", 
      date: "February 28, 2022", 
      image: "/shop-detail/recentPost.png"  // First unique image
    },
    { 
      title: "Change your food habit with organic food", 
      date: "March 10, 2022", 
      image: "/shop-detail/foodpic.jpeg"  // Second unique image
    },
    { 
      title: "Do you like fast food for your life?", 
      date: "April 5, 2022", 
      image: "/Blog/recentpost2.jpeg"  // Third unique image
    },
  ];

  return (
    <div className="w-full">
      <h3 className="text-xl font-bold mb-4 md:mb-6">Recent Posts</h3>
      {posts.map((post, index) => (
        <div 
          key={index} 
          className="flex items-center gap-4 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 cursor-pointer"
        >
          {/* Post Image */}
          <Image 
            src={post.image} 
            alt={`Recent post - ${post.title}`} 
            width={64} 
            height={64} 
            className="w-12 h-12 md:w-16 md:h-16 object-cover rounded-lg shadow-sm transition-transform duration-300 hover:scale-105" 
          />

          {/* Post Details */}
          <div>
            <h4 className="font-semibold text-sm md:text-base text-gray-900 dark:text-white">{post.title}</h4>
            <p className="text-xs md:text-sm text-gray-500">{post.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
