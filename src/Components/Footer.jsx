import React, { useEffect, useRef } from "react";

const footerLinks = [
  [
    { label: "Our Ethos", href: "#" },
    { label: "FAQs", href: "#" },
    { label: "Glossary", href: "#" },
    { label: "Press", href: "#" },
    { label: "Careers", href: "#" },
    { label: "E-Gift Cards", href: "#" },
  ],
  [
    { label: "Blog: The Scoop", href: "#" },
    { label: "PopUp Shop", href: "#" },
    { label: "Snack Rack", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "TikTok", href: "#" },
    { label: "Facebook", href: "#" },
  ],
];

function Footer() {
  const footerRef = useRef(null);

  useEffect(() => {
    const header = document.querySelector(".site-header");
    if (!footerRef.current || !header) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        const showFooterOnly = entry.isIntersecting && entry.intersectionRatio >= 0.8;
        if (showFooterOnly) {
          header.style.opacity = "0";
          header.style.pointerEvents = "none";
        } else {
          header.style.opacity = "";
          header.style.pointerEvents = "";
        }
      },
      { threshold: [0, 0.8] }
    );

    io.observe(footerRef.current);
    return () => io.disconnect();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="w-full min-h-[100dvh] md:min-h-screen text-white relative bg-[#015de4]"
    >
      <div className="w-full max-w-none px-5 sm:px-8 lg:px-12 xl:px-16 2xl:px-24 py-14 sm:py-20 lg:py-28">
        <div className="grid grid-cols-12 gap-x-6 sm:gap-x-12 gap-y-12 sm:gap-y-16">

          {/* Logo */}
          <div className="col-span-12 lg:col-span-5 flex justify-center lg:justify-start">
            <img
              src="Feel Laban - Logo.png"
              alt="Feel Laban"
              className="w-36 sm:w-52 lg:w-40"
            />
          </div>

          {/* Mission text */}
          <div className="col-span-12 lg:col-span-7 text-left lg:text-left lg:pl-8 px-4">
            <p className="text-2xl sm:text-3xl font-light leading-snug tracking-tight">
              Tradition in every bite, sweetness in every feel. Indulge in the creamiest laban-based desserts—fresh, creamy, and full of flavor, made with care and quality. Enjoy a taste of heritage with every dessert from Feel Laban.
            </p>
          </div>

          {/* Subscribe */}
          <div className="col-span-12 lg:col-span-5">
            <h3 className="font-serif text-3xl sm:text-3xl font-light tracking-tight text-left lg:text-left">
              Let&apos;s Keep in Touch
            </h3>
            {/* <p className="mt-2 text-sm sm:text-base font-light text-center lg:text-left">
              Sign-up for 10% off your first online order
            </p> */}

            <form className="mt-4 max-w-xs sm:max-w-md mx-auto lg:mx-0" onSubmit={(e) => e.preventDefault()}>
              <div className="flex w-full bg-white overflow-hidden">
                <input
                  type="email"
                  placeholder="Email"
                  required
                  className="flex-1 px-3 py-2 sm:px-5 sm:py-4 text-gray-900 placeholder-gray-500 outline-none text-sm sm:text-lg"
                />
                <button
                  type="submit"
                  className="px-4 sm:px-6 py-2 sm:py-4 font-medium transition-colors text-[#015de4] text-sm sm:text-lg"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>

          {/* Footer links */}
          <div className="col-span-12 lg:col-span-7 lg:pl-8 px-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 text-left">
              {footerLinks.map((group, i) => (
                <ul key={i} className="space-y-2 sm:space-y-3 text-2sm sm:text-base font-light">
                  {group.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="hover:underline">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-12 sm:mt-45 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-xs sm:text-sm opacity-90 text-left">
            © 2025 Feel Laban. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
