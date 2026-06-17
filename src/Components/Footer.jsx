import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-[#015de4]">
      {/* Reduced py to 8 to keep the overall footer height tight and compact */}
      <div className="mx-auto container py-8 xl:px-20 lg:px-12 sm:px-6 px-4">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Column 1: Logo & Text packed tightly together */}
          <div className="flex flex-col items-start">
            <img 
              src="Feel Laban - Logo.png" 
              alt="Feel Laban" 
              className="w-28 object-contain rounded-md" 
            />
            
            {/* Used -mt-1 and leading-tight to pull the text right up to the logo's edge */}
            <p className="text-sm leading-tight text-white max-w-[200px] -mt-1">
              Tradition in every bite, <br />sweetness in every feel
            </p> 
            <p className="text-xs leading-none text-white mt-2 opacity-70">
              © Jigar Rane All rights reserved.
            </p>
          </div>

          {/* Column 2: Company */}
          <div className="sm:ml-0 lg:ml-4 flex flex-col">
            <h2 className="text-base font-semibold leading-4 text-white mb-4">Company</h2>
            {/* All links are inside one space-y-3 container for uniform spacing */}
            <div className="flex flex-col space-y-3">
              <a href="#" className="focus:outline-none hover:underline text-sm text-white">Blog</a>
              <a href="#" className="focus:outline-none hover:underline text-sm text-white">Pricing</a>
              <a href="#" className="focus:outline-none hover:underline text-sm text-white">About Us</a>
              <a href="#" className="focus:outline-none hover:underline text-sm text-white">Contact us</a>
            </div>
          </div>

          {/* Column 3: Support */}
          <div className="flex flex-col">
            <h2 className="text-base font-semibold leading-4 text-white mb-4">Support</h2>
            {/* All links are inside one space-y-3 container for uniform spacing */}
            <div className="flex flex-col space-y-3">
              <a href="#" className="focus:outline-none hover:underline text-sm text-white">Legal policy</a>
              <a href="#" className="focus:outline-none hover:underline text-sm text-white">Status policy</a>
              <a href="#" className="focus:outline-none hover:underline text-sm text-white">Privacy policy</a>
              <a href="#" className="focus:outline-none hover:underline text-sm text-white">Terms of service</a>
            </div>
          </div>

          {/* Column 4: Enquiries & Icons */}
          <div className="flex flex-col">
            <h2 className="text-base font-semibold leading-4 text-white mb-4">For enquiries</h2>
            
            <div className="flex items-center justify-between border border-white bg-white rounded-sm overflow-hidden w-full max-w-[250px]">
              <input type="email" className="text-sm p-3 w-full focus:outline-none text-[#015de4] placeholder-[#015de4]/70 bg-transparent" placeholder="Enter your email" />
              <button aria-label="send" className="mr-3 fill-current text-[#015de4] hover:text-blue-800 focus:outline-none">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </button>
            </div>

            {/* Icons resting naturally below the input box */}
            <div className="mt-6 flex items-center gap-x-4">
              <a href="https://www.instagram.com/p/DMo5cA8yg6Q/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex-shrink-0 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors text-white">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="https://facebook.com/share/14cHVurTvSL/?mibextid=wwXlfr" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex-shrink-0 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors text-white">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="https://wa.me/917736660688" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex-shrink-0 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors text-white">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
              </a>
              <a href="#" className="w-8 h-8 flex-shrink-0 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors text-white">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Footer;
