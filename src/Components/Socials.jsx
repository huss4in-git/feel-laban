import React from "react";

const posts = [
  { img: "IMG_4222.jpg", link: "https://www.instagram.com/p/DMFzbx5SO9t/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { img: "IMG_4223.jpg", link: "https://www.instagram.com/p/DMh3rJ8ycxF/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { img: "IMG_4226.jpeg", link: "https://www.instagram.com/reel/DM3R8zqhBBZ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { img: "IMG_4225.jpg", link: "https://www.instagram.com/p/DMo5cA8yg6Q/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
];

const InstagramSection = () => (
  <section className="bg-[#faf9f6] px-2 py-10 flex flex-col items-center">
    {/* Heading and button layout adapts to screen */}
    <div className="w-full flex flex-col md:flex-row md:items-center md:justify-center mb-4 gap-3 md:gap-4">
      <h2
        className="text-[#015de4] text-base md:text-2xl font-thin mb-0 text-left md:text-center"
        style={{ fontFamily: "re1", fontWeight: 100 }}
      >
        Follow us on Instagram
      </h2>
      <a
        className="border border-[#015de4] text-[#015de4] rounded-full text-base md:text-2xl px-5 py-2 md:px-8 md:py-3 font-thin mt-2 md:mt-0 md:ml-6 text-center transition-colors duration-200 hover:bg-[#015de4] hover:text-white"
        href="https://instagram.com/feellaban"
        target="_blank"
        rel="noopener noreferrer"
        style={{ fontFamily: "re1", fontWeight: 100 }}
      >
        @feellaban
      </a>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 w-full max-w-[450px] md:max-w-[1400px]">
      {posts.map((post, idx) => (
        <a
          href={post.link}
          key={idx}
          target="_blank"
          rel="noopener noreferrer"
          className="aspect-square bg-[#eee] overflow-hidden block transition-transform "
        >
          <img
            src={post.img}
            alt={`Instagram ${idx + 1}`}
            className="object-cover w-full h-full"
          />
        </a>
      ))}
    </div>
  </section>
);

export default InstagramSection;
