import React, { useState } from "react";
import { Phone, MapPin } from "lucide-react";

// Added precise 'district' data to every location
const locations = [
  // KERALA
  { name: "Poonoor", address: "Calicut, Kerala", district: "Kozhikode", phone: "9633504022", state: "Kerala", status: "Working" },
  { name: "Malappuram", address: "Malappuram Town", district: "Malappuram", phone: "7592986987", state: "Kerala", status: "Working" },
  { name: "Pattambi", address: "Pattambi, Kerala", district: "Palakkad", phone: "8330807479", state: "Kerala", status: "Working" },
  { name: "Tirur", address: "Malappuram", district: "Malappuram", phone: "7907820532", state: "Kerala", status: "Working" },
  { name: "Chokli", address: "Kannur", district: "Kannur", phone: "9544750060", state: "Kerala", status: "Working" },
  { name: "Hosangadi", address: "Kasargode", district: "Kasaragod", phone: "8137051855", state: "Kerala", status: "Working" },
  { name: "Payyannur", address: "Kannur", district: "Kannur", phone: "9846661294", state: "Kerala", status: "Working" },
  { name: "Thalassery", address: "Kannur", district: "Kannur", phone: "9037126175", state: "Kerala", status: "Working" },
  { name: "Payyoli", address: "Calicut", district: "Kozhikode", phone: "6235548102", state: "Kerala", status: "Working" },
  { name: "Nadapuram", address: "Calicut", district: "Kozhikode", phone: "", state: "Kerala", status: "Working" },
  { name: "Perumbavoor", address: "Ernakulam", district: "Ernakulam", phone: "", state: "Kerala", status: "Working" },
  { name: "Kanhangad", address: "Kerala", district: "Kasaragod", phone: "", state: "Kerala", status: "Upcoming" },

  // KARNATAKA
  { name: "Manipal", address: "Udupi, Karnataka", district: "Udupi", phone: "9187122291", state: "Karnataka", status: "Working" },
  { name: "Ullal", address: "Mangalore", district: "Dakshina Kannada", phone: "6363867478", state: "Karnataka", status: "Working" },
  { name: "AGB Layout", address: "Bangalore", district: "Bengaluru", phone: "8129666244", state: "Karnataka", status: "Working" },
  { name: "Kammanahalli", address: "Bangalore", district: "Bengaluru", phone: "9207559673", state: "Karnataka", status: "Working" },
  { name: "Madiwala", address: "Bangalore", district: "Bengaluru", phone: "", state: "Karnataka", status: "Working" },
  { name: "Church Street", address: "Bangalore", district: "Bengaluru", phone: "", state: "Karnataka", status: "Working" },
  { name: "Mysuru", address: "Karnataka", district: "Mysuru", phone: "", state: "Karnataka", status: "Upcoming" },

  // TAMIL NADU
  { name: "Coimbatore Race Course", address: "Gopalapuram", district: "Coimbatore", phone: "9994458591", state: "Tamil Nadu", status: "Working" },
  { name: "Chennai", address: "Valapani / ECR", district: "Chennai", phone: "", state: "Tamil Nadu", status: "Upcoming" },
  { name: "Puducherry", address: "Karaikal", district: "Karaikal", phone: "", state: "Tamil Nadu", status: "Upcoming" },

  // TELANGANA
  { name: "Toli Chowki", address: "Shop 16, My Home Rainbow Apt, Shaikpet Rd", district: "Hyderabad", phone: "", state: "Telangana", status: "Working" }
];

export default function LocationSection() {
  const [stateFilter, setStateFilter] = useState("All");
  const [districtFilter, setDistrictFilter] = useState("All");

  const availableDistricts = stateFilter === "All" 
    ? [] 
    : [...new Set(locations.filter(loc => loc.state === stateFilter).map(loc => loc.district))].sort();

  const handleStateChange = (state) => {
    setStateFilter(state);
    setDistrictFilter("All"); 
  };

  const filteredLocations = locations.filter(loc => {
    const matchesState = stateFilter === "All" || loc.state === stateFilter;
    const matchesDistrict = districtFilter === "All" || loc.district === districtFilter;
    return matchesState && matchesDistrict;
  });

  return (
    // Reduced top padding (pt-8) to pull this section up towards the menu
    <div id="locations-section" className="bg-[#faf9f6] text-[#015de4] px-6 md:px-16 pt-8 pb-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold mb-10 text-center" style={{ fontFamily: 'head' }}>
          OUR LOCATIONS
        </h2>

        {/* Primary Filter: States (Added Telangana here) */}
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          {["All", "Kerala", "Karnataka", "Tamil Nadu", "Telangana"].map((state) => (
            <button
              key={state}
              onClick={() => handleStateChange(state)}
              className={`px-8 py-3 rounded-full border-2 border-[#015de4] font-bold transition-all ${
                stateFilter === state ? "bg-[#015de4] text-white" : "hover:bg-[#015de4] hover:text-white"
              }`}
            >
              {state}
            </button>
          ))}
        </div>

        {/* Secondary Filter: Districts */}
        {stateFilter !== "All" && availableDistricts.length > 0 && (
          <div className="flex flex-wrap justify-center gap-2 mb-12 animate-fade-in">
            <button
              onClick={() => setDistrictFilter("All")}
              className={`px-5 py-2 text-sm rounded-full border border-[#015de4] transition-all ${
                districtFilter === "All" ? "bg-[#015de4] text-white" : "text-[#015de4] hover:bg-blue-100"
              }`}
            >
              All Districts
            </button>
            {availableDistricts.map((district) => (
              <button
                key={district}
                onClick={() => setDistrictFilter(district)}
                className={`px-5 py-2 text-sm rounded-full border border-[#015de4] transition-all ${
                  districtFilter === district ? "bg-[#015de4] text-white" : "text-[#015de4] hover:bg-blue-100"
                }`}
              >
                {district}
              </button>
            ))}
          </div>
        )}

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLocations.map((loc, index) => (
            <div key={index} className="bg-white border border-blue-100 p-6 rounded-[2rem] shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold leading-tight">Feel Laban - {loc.name}</h3>
                  <span className={`text-[10px] uppercase font-bold px-3 py-1 rounded-full whitespace-nowrap ${
                    loc.status === "Working" ? "bg-green-100 text-green-600" : "bg-orange-100 text-orange-600"
                  }`}>
                    {loc.status}
                  </span>
                </div>
                <p className="flex items-start text-sm gap-2 mb-6 opacity-80">
                  <MapPin size={16} className="mt-0.5 flex-shrink-0" /> 
                  <span>{loc.address} <br/> <span className="font-semibold text-xs opacity-75">{loc.district}</span></span>
                </p>
              </div>

              {loc.phone && (
                <a 
                  href={`tel:+91${loc.phone.replace(/\s/g, '')}`}
                  className="w-full bg-[#015de4] text-white py-3 rounded-xl flex items-center justify-center gap-2 font-bold hover:bg-blue-700 transition"
                >
                  <Phone size={18} /> Call Now
                </a>
              )}
            </div>
          ))}
          
          {filteredLocations.length === 0 && (
            <div className="col-span-full text-center py-10 opacity-70">
              No locations found for this selection.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}