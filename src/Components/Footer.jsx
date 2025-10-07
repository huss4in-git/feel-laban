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
  [
    { label: "club / re_", href: "#" },
    { label: "Account", href: "#" },
    { label: "Locations", href: "#" },
    { label: "Returns", href: "#" },
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
  ],
];

function Footer() {
  const brandOrange = "#ef4a2e";
  const footerRef = useRef(null);

  // Auto-hide a fixed/sticky header (.site-header) while footer is in view
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
      className="w-full min-h-[100dvh] md:min-h-screen text-white relative"
      style={{ backgroundColor: brandOrange }}
    >
      {/* Full-width wrapper with generous side padding */}
      <div className="w-full max-w-none px-6 sm:px-8 lg:px-12 xl:px-16 2xl:px-24 py-20 lg:py-28">
        <div className="grid grid-cols-12 gap-x-12 gap-y-16">
          {/* Row 1: Logo */}
          <div className="col-span-12 lg:col-span-5">
            <img src="f-laban.svg" alt="Feel Laban" className="w-40 sm:w-52 lg:w-60" />
          </div>

          {/* Row 1: Mission */}
          <div className="col-span-12 lg:col-span-7">
            <p className="text-xl sm:text-2xl font-light leading-relaxed tracking-tight">
              Tradition in every bite, sweetness in every feel. Indulge in the creamiest laban-based desserts—fresh, creamy, and full of flavor, made with care and quality. Enjoy a taste of heritage with every dessert from Feel Laban.
            </p>
          </div>

          {/* Row 2: Subscribe */}
          <div className="col-span-12 lg:col-span-5">
            <h3 className="font-serif text-3xl sm:text-4xl font-light tracking-tight">Let&apos;s Keep in Touch</h3>
            <p className="mt-2 text-base font-light">Sign-up for 10% off your first online order</p>

            <form className="mt-4 max-w-md" onSubmit={(e) => e.preventDefault()}>
              <div className="flex w-full bg-white rounded-md overflow-hidden">
                <input
                  type="email"
                  placeholder="Email"
                  required
                  className="flex-1 px-4 py-3 text-gray-900 placeholder-gray-500 outline-none"
                />
                <button type="submit" className="px-6 py-3 font-medium transition-colors" style={{ color: brandOrange }}>
                  Subscribe
                </button>
              </div>
            </form>
          </div>

          {/* Row 2: Link columns */}
          <div className="col-span-12 lg:col-span-7">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 lg:gap-12">
              {footerLinks.map((group, i) => (
                <ul key={i} className="space-y-3 text-base font-light">
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
        <div className="mt-16 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8">
          <img src="/badges/green-business.svg" alt="Green Business Network" className="h-10 w-auto" />
          <p className="text-sm opacity-90">© 2025 Feel Laban. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
