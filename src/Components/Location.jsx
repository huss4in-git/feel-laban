import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const locations = [
  {
    name: "Feel Laban - Calicut",
    address: "Calicut – Convent Road, Moonalungal",
    email: "feellaban@gmail.com",
    phone: (
      <a href="tel:+917736660688">
        +91 77366 60688
      </a>
    ),
    hours: "Open 2:00 PM - 1:00 AM",
    image: "store.jpeg",
    mapEmbed: (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.076752581696!2d75.77147307570822!3d11.25576418892372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba659003ddb39e5%3A0xe2fdb7f9fcd20cb0!2sFeel%20Laban!5e0!3m2!1sen!2sin!4v1760686041443!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Feel Laban Calicut"
      ></iframe>
    ),
  },
  {
    name: "Feel Laban - Bangalore",
    address: "Bangalore – Kammanahalli",
    email: "feellaban@gmail.com",
    phone: (
      <a href="tel:+919207559673">
        +91 92075 59673
      </a>
    ),
    hours: "Open 2:00 PM - 12:00 AM",
    image: "blrkmn1.jpg",
    mapEmbed: (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.31434812398!2d77.63757287573223!3d13.015643087303822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17edf8378715%3A0xb9ae9e587785254c!2sFeel%20Laban!5e0!3m2!1sen!2sin!4v1760686849019!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Feel Laban Bangalore"
      ></iframe>
    ),
  },
  {
    name: "Feel Laban - Bangalore",
    address: "Bangalore – AGB Layout",
    email: "feellaban@gmail.com",
    phone: (
      <a href="tel:+918129666244">
        +91 81296 66244
      </a>
    ),
    hours: "Open 2:00 PM - 12:00 AM",
    image: "blragb.jpg",
    mapEmbed: (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.4307793651283!2d77.5054912!3d13.071862699999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae23004fc08557%3A0xb71a06b9ee6cf22f!2sFeel%20Laban%20agb!5e0!3m2!1sen!2sin!4v1769331766190!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Feel Laban Bangalore"
      ></iframe>
    ),
  },
  {
    name: "Feel Laban - Payyoli",
    address: "Payyoli, Perambra Rd",
    email: "feellaban@gmail.com",
    phone: (
      <a href="tel:+916235548102">
        +91 62355 48102
      </a>
    ),
    hours: "Open 1:00 PM - 11:30 PM",
    image: "payyoli.jpeg",
    mapEmbed: (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3909.4814699818157!2d75.6257011!3d11.5172794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba689b01d00cb9b%3A0x6e5687ff183595d7!2sFeel%20Laban!5e0!3m2!1sen!2sin!4v1769332543225!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Feel Laban Payyoli"
      ></iframe>
    ),
  },
  {
    name: "Feel Laban - Mangalore",
    address: "Belma Village, Deralakatte",
    email: "feellaban@gmail.com",
    phone: (
      <a href="tel:+916363867478">
        +91 63638 67478
      </a>
    ),
    hours: "Open 2:00 PM - 11:00 PM",
    image: "mglr.jpeg",
    mapEmbed: (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.4881406783607!2d74.87995737572929!3d12.811702187489187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35f742254dadf%3A0x1f0d4d6231d39880!2sFeel%20Laban!5e0!3m2!1sen!2sin!4v1760687873151!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Feel Laban Mangalore"
      ></iframe>
    ),
  },
  {
    name: "Feel Laban - Mangalore",
    address: " KMC Road, Attavar, Mangalore",
    email: "feellaban@gmail.com",
    phone: (
      <a href="tel:+918296757005">
        +91 82967 57005
      </a>
    ),
    hours: "Open 1:30 PM - 11:30 PM",
    image: "store.jpeg",
    mapEmbed: (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.4881406783607!2d74.87995737572929!3d12.811702187489187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35f742254dadf%3A0x1f0d4d6231d39880!2sFeel%20Laban!5e0!3m2!1sen!2sin!4v1760687873151!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Feel Laban Mangalore"
      ></iframe>
    ),
  },
  {
    name: "Feel Laban - Perumbavoor",
    address: "Perumbavoor, Ernakulam ",
    email: "feellaban@gmail.com",
    phone: (
      <a href="tel:+917736660688">
        +91 77366 60688
      </a>
    ),
    hours: "Open 12:00 PM - 12:00 AM",
    image: "store.jpeg",
    mapEmbed: (
      <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3927.8100528354225!2d76.4687245756946!3d10.114628789996717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07e30062ce26e3%3A0x82dd1b7c03a5fec5!2sFeel%20Laban!5e0!3m2!1sen!2sin!4v1760688148634!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Feel Laban Perumbavoor"
      ></iframe>
    ),
  },
  {
    name: "Feel Laban - Tirur",
    address: "Ring Road, Pan Bazaar",
    email: "feellaban@gmail.com",
    phone: (
      <a href="tel:+917907820532">
        +91 79078 20532
      </a>
    ),
    hours: "Open 11:00 AM - 12:00 AM",
    image: "store.jpeg",
    mapEmbed: (
      <iframe
     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.5911206511123!2d75.92428547570412!3d10.918646589238872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7b128e2c7f41b%3A0xfbb376248da521a0!2sFeel%20Laban%20Tirur!5e0!3m2!1sen!2sin!4v1760688594039!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Feel Laban Tirur"
      ></iframe>
    ),
  },
  {
    name: "Feel Laban - Nadapuram ",
    address: "Alfa Food Court - Kakkemvelli",
    email: "feellaban@gmail.com",
    phone: (
      <a href="tel:+918590326383">
        +91 85903 26383
      </a>
    ),
    hours: "Open 1:00 PM - 1:00 AM",
    image: "store.jpeg",
    mapEmbed: (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3907.2111615619233!2d75.64056707571372!3d11.679441988529616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba681003e8e0be1%3A0x580cf53962f82224!2sFeel%20Laban!5e0!3m2!1sen!2sin!4v1760687531919!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Feel Laban Nadapuram"
      ></iframe>
    ),
  },
  {
    name: "Feel Laban - Malappuram ",
    address: "Varangode, Downhill, Malappuram",
    email: "feellaban@gmail.com",
    phone: (
      <a href="tel:+917592986987">
        +91 75929 86987
      </a>
    ),
    hours: "Open 12:00 PM - 12:00 AM",
    image: "store.jpeg",
    mapEmbed: (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3881.960315054928!2d74.78703787508314!3d13.352743786998799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbca53dd4d99549%3A0x56717e9f1c0f5001!2sManipal%20Commercial%20Complex!5e0!3m2!1sen!2sin!4v1769337479171!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Feel Laban Malappuram"
      ></iframe>
    ),
  },
  {
    name: "Feel Laban - Pattambi ",
    address: "Opp: Ajfan Date & Nuts, Thekkumuri, Pattambi",
    email: "feellaban@gmail.com",
    phone: (
      <a href="tel:+918330807479">
        +91 83308 07479
      </a>
    ),
    hours: "Open 12:30 PM - 12:30 AM",
    image: "store.jpeg",
    mapEmbed: (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1790.652260471238!2d76.18565808648741!3d10.811359289308221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7c544cae76393%3A0xff65b04ab6998619!2sAjfan%20Dates%20and%20Nuts%20Pattambi!5e0!3m2!1sen!2sin!4v1769338111238!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Feel Laban Pattambi"
      ></iframe>
    ),
  },
  {
    name: "Feel Laban - Chokli ",
    address: "Near Marvel Petroleum, Palloor, Chokli",
    email: "feellaban@gmail.com",
    phone: (
      <a href="tel:+919544750060">
        +91 95447 50060
      </a>
    ),
    hours: "Open 2:00 PM - 12:00 AM",
    image: "store.jpeg",
    mapEmbed: (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3906.5236858291496!2d75.55127657571443!3d11.72811048848454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba429c40430e63f%3A0xcc9a5896c037fcbe!2sFeel%20Laban%20Chokli!5e0!3m2!1sen!2sin!4v1769338405300!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Feel Laban Chokli"
      ></iframe>
    ),
  },
  {
    name: "Feel Laban - Thalassery ",
    address: "Kadal Palam, Thalassery",
    email: "feellaban@gmail.com",
    phone: (
      <a href="tel:+919037126175">
        +91 90371 26175
      </a>
    ),
    hours: "Open 3:00 PM - 1:00 AM",
    image: "store.jpeg",
    mapEmbed: (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3906.2757893155303!2d75.4842220838495!3d11.745611058734701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba427006f19e9e5%3A0x970f3cc4412f88da!2sFeel%20Laban%20Thalassery!5e0!3m2!1sen!2sin!4v1769339423669!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Feel Laban Thalassery"
      ></iframe>
    ),
  },
  {
    name: "Feel Laban - Payyannur ",
    address: "Magnum Mall, Payyanur",
    email: "feellaban@gmail.com",
    phone: (
      <a href="tel:+919846661294">
        +91 98466 61294
      </a>
    ),
    hours: "Open 10:00 AM - 9:30 PM",
    image: "store.jpeg",
    mapEmbed: (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.076996366878!2d75.2094749750621!3d12.106881388134648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba46d924f5aa4ef%3A0x6dd2d9177fe16f8a!2sMAGNUM%20MALL!5e0!3m2!1sen!2sin!4v1769339664929!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Feel Laban Thalassery"
      ></iframe>
    ),
  },
  {
    name: "Feel Laban - Hosangadi ",
    address: "Near Chat and Chill, Hosangadi, Bangramanjeshwar",
    email: "feellaban@gmail.com",
    phone: (
      <a href="tel:+918137051855">
        +91 81370 51855
      </a>
    ),
    hours: "Open 4:00 PM - 12:00 AM",
    image: "store.jpeg",
    mapEmbed: (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.076996366878!2d75.2094749750621!3d12.106881388134648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba46d924f5aa4ef%3A0x6dd2d9177fe16f8a!2sMAGNUM%20MALL!5e0!3m2!1sen!2sin!4v1769339664929!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Feel Laban Thalassery"
      ></iframe>
    ),
  },
  {
    name: "Feel Laban - Ullal ",
    address: "Belma Village, Deralakatte, Ullal, Karnataka",
    email: "feellaban@gmail.com",
    phone: (
      <a href="tel:+916363867478">
        +91 63638 67478
      </a>
    ),
    hours: "Open 1:00 PM - 11:00 PM",
    image: "store.jpeg",
    mapEmbed: (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.488140678362!2d74.87995737507377!3d12.811702187489098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35f742254dadf%3A0x1f0d4d6231d39880!2sFeel%20Laban!5e0!3m2!1sen!2sin!4v1769338675562!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Feel Laban Chokli"
      ></iframe>
    ),
  },
  {
    name: "Feel Laban - Manipal ",
    address: "Manipal, Udupi",
    email: "feellaban@gmail.com",
    phone: (
      <a href="tel:+919187122291">
        +91 91871 22291
      </a>
    ),
    hours: "Open 1:00 PM - 1:00 AM",
    image: "store.jpeg",
    mapEmbed: (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3881.960315054928!2d74.78703787508314!3d13.352743786998799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbca53dd4d99549%3A0x56717e9f1c0f5001!2sManipal%20Commercial%20Complex!5e0!3m2!1sen!2sin!4v1769337479171!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Feel Laban Chennai"
      ></iframe>
    ),
  },
  {
    name: "Feel Laban - Coimbatore ",
    address: "Thirugnanasambandam Rd, Near Grasp, Race Course, Gopalapuram",
    email: "feellaban@gmail.com",
    phone: (
      <a href="tel:+919994458591
      ">
        +91 99944 58591
      </a>
    ),
    hours: "Open 12:00 PM - 12:30 PM",
    image: "racecourse.jpg",
    mapEmbed: (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31331.536545554427!2d76.93782327431639!3d11.005421400000017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85930646edb81%3A0xe2299daa842288ca!2sFeel%20Laban%20Racecourse!5e0!3m2!1sen!2sin!4v1769340138935!5m2!1sen!2sin" 
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Feel Laban Race Course"
      ></iframe>
    ),
  },
 
];

export default function LocationSection() {
  const [current, setCurrent] = useState(0);
  const loc = locations[current];

  const next = () => setCurrent((prev) => (prev + 1) % locations.length);
  const prev = () => setCurrent((prev) => (prev - 1 + locations.length) % locations.length);

  return (
    <div className="bg-[#faf9f6] text-[#015de4] px-6 md:px-19 py-20 flex flex-col md:flex-row items-center justify-between md:space-x-12">
      {/* LEFT SIDE */}
      <div className="w-full md:w-1/2 flex flex-col items-start space-y-6">
        {/* Header */}
        <div className="max-w-md">
          <h2 className="text-4xl md:text-5xl ms-1 leading-tight">
           Explore Feel Laban
          </h2>
        </div>

        {/* Image */}
<div className="overflow-hidden rounded-[2rem] w-full h-85">
  <img
    src={loc.image}
    alt={loc.name}
    className="object-cover w-full h-full transition-all duration-500"
  />
</div>


        {/* Location Info */}
        <div className="space-y-1">
          <h3 className="text-xl font-semibold">{loc.name}</h3>
          <p className="text-sm">{loc.address}</p>
          <p className="text-sm">{loc.email}</p>
          <p className="text-sm">{loc.phone}</p>
          <p className="text-sm">{loc.hours}</p>
        </div>

        {/* Carousel Arrows */}
        <div className="flex items-center space-x-3 ">
          <button
            onClick={prev}
            className="p-2 rounded-full border border-[#015de4] hover:bg-[#015de4] hover:text-white transition"
          >
            <ArrowLeft size={18} />
          </button>
          <button
            onClick={next}
            className="p-2 rounded-full border border-[#015de4] hover:bg-[#015de4] hover:text-white transition"
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      {/* RIGHT SIDE — Google Map */}
      <div className="w-full md:w-1/2 mt-12 md:mt-0">
        <div className="relative w-full h-[500px] rounded-2xl border border-[#d8d2bf] overflow-hidden shadow-sm">
          {loc.mapEmbed}
        </div>
      </div>
    </div>
  );
}
