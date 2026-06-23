import React, { useState } from "react";
import Nav2 from "../Components/Nav2"

export default function FranchiseForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", street: "", state: "", city: "", pincode: "",
    job: "", ownedBusiness: false, beenFranchise: false, businessType: "",
    businessDesc: "", locationCity: "", locationPref: "", hasCommercialSpace: false,
    shopDesc: "", spaceArea: "", frontage: "", demographics: "",
    agreeCertify: false, agreePromotions: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleReset = () => {
    setFormData({
      name: "", email: "", phone: "", street: "", state: "", city: "", pincode: "",
      job: "", ownedBusiness: false, beenFranchise: false, businessType: "",
      businessDesc: "", locationCity: "", locationPref: "", hasCommercialSpace: false,
      shopDesc: "", spaceArea: "", frontage: "", demographics: "",
      agreeCertify: false, agreePromotions: false,
    });
  };

  // The new Email submission logic
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          // Replace this string with the actual key they email you
          access_key: "a9fab2e6-a32f-41ac-8f53-a2335cbd12a7", 
          subject: "New Franchise Enquiry - Feel Laban",
          ...formData
        }),
      });

      const result = await response.json();
      if (result.success) {
        alert("Success! Your franchise application has been sent to our team.");
        handleReset();
      } else {
        alert("Something went wrong. Please try again later.");
      }
    } catch (error) {
      console.error(error);
      alert("Error sending form. Please check your internet connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
        <Nav2/>
      <div className="flex flex-col items-center py-5 ">
        <h1 className="text-4xl font-bold mb-8 text-center">Franchise Queries</h1>

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-2xl p-10 w-full max-w-6xl border border-gray-200"
        >
          {/* GENERAL INFORMATION */}
          <h2 className="text-xl font-bold text-blue-500 text-center mb-6">
            GENERAL INFORMATION
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <input name="name" required value={formData.name} onChange={handleChange} placeholder="Your Name*" className="border-2 border-blue-400 rounded-xl p-3 w-full" />
            <input type="email" required name="email" value={formData.email} onChange={handleChange} placeholder="Your Email*" className="border-2 border-blue-400 rounded-xl p-3 w-full" />
            <input name="phone" required value={formData.phone} onChange={handleChange} placeholder="Your Phone*" className="border-2 border-blue-400 rounded-xl p-3 w-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <input name="street" value={formData.street} onChange={handleChange} placeholder="Street" className="border-2 border-blue-400 rounded-xl p-3 w-full" />
            <select name="state" value={formData.state} onChange={handleChange} className="border-2 border-blue-400 rounded-xl p-3 w-full">
              <option value="">Select State</option>
              <option>Tamil Nadu</option>
              <option>Kerala</option>
              <option>Karnataka</option>
            </select>
            <input name="city" value={formData.city} onChange={handleChange} placeholder="City" className="border-2 border-blue-400 rounded-xl p-3 w-full" />
            <input name="pincode" value={formData.pincode} onChange={handleChange} placeholder="Pincode" className="border-2 border-blue-400 rounded-xl p-3 w-full" />
          </div>

          {/* BUSINESS EXPERIENCE */}
          <h2 className="text-xl font-bold text-blue-500 text-center mb-6">
            BUSINESS / WORK EXPERIENCE
          </h2>

          <input name="job" value={formData.job} onChange={handleChange} placeholder="Current Job / Business" className="border-2 border-blue-400 rounded-xl p-3 w-full mb-4" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <label className="flex items-center gap-2">
              <input type="checkbox" name="ownedBusiness" checked={formData.ownedBusiness} onChange={handleChange} className="accent-blue-500" />
              Have You Ever Owned A Business?
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" name="beenFranchise" checked={formData.beenFranchise} onChange={handleChange} className="accent-blue-500" />
              Have You Ever Been A Franchise?
            </label>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <input name="businessType" value={formData.businessType} onChange={handleChange} placeholder="If Yes, Then What Type?" className="border-2 border-blue-400 rounded-xl p-3 w-full" />
            <input name="businessDesc" value={formData.businessDesc} onChange={handleChange} placeholder="If Yes, Please Describe" className="border-2 border-blue-400 rounded-xl p-3 w-full" />
          </div>

          {/* LOCATION INFORMATION */}
          <h2 className="text-xl font-bold text-blue-500 text-center mb-6">
            LOCATION INFORMATION
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input name="locationCity" required value={formData.locationCity} onChange={handleChange} placeholder="City*" className="border-2 border-blue-400 rounded-xl p-3 w-full" />
            <input name="locationPref" required value={formData.locationPref} onChange={handleChange} placeholder="Location Preference*" className="border-2 border-blue-400 rounded-xl p-3 w-full" />
          </div>

          <label className="flex items-center gap-2 mb-4">
            <input type="checkbox" name="hasCommercialSpace" checked={formData.hasCommercialSpace} onChange={handleChange} className="accent-blue-500" />
            Do you own an existing commercial space?
          </label>

          <input name="shopDesc" value={formData.shopDesc} onChange={handleChange} placeholder="Describe The Shop Location" className="border-2 border-blue-400 rounded-xl p-3 w-full mb-4" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input name="spaceArea" value={formData.spaceArea} onChange={handleChange} placeholder="Retail Space Area (sq.ft)" className="border-2 border-blue-400 rounded-xl p-3 w-full" />
            <input name="frontage" value={formData.frontage} onChange={handleChange} placeholder="Frontage of the Retail Space" className="border-2 border-blue-400 rounded-xl p-3 w-full" />
          </div>

          <input name="demographics" value={formData.demographics} onChange={handleChange} placeholder="Demographics of the Location" className="border-2 border-blue-400 rounded-xl p-3 w-full mb-6" />

          <div className="flex flex-col gap-3 mb-6">
            <label className="flex items-center gap-2">
              <input type="checkbox" required name="agreeCertify" checked={formData.agreeCertify} onChange={handleChange} className="accent-blue-500" />
              By submitting this form, I certify that the information furnished is true and correct.*
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" name="agreePromotions" checked={formData.agreePromotions} onChange={handleChange} className="accent-blue-500" />
              I agree to receive promotions and newsletters related to Sign Laban.
            </label>
          </div>

          {/* Buttons updated with loading state */}
          <div className="flex justify-center gap-6">
            <button type="button" onClick={handleReset} disabled={isSubmitting} className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition disabled:opacity-50">
              Reset
            </button>
            <button type="submit" disabled={isSubmitting} className="bg-[#00aaff] text-white px-8 py-3 rounded-full hover:bg-blue-600 transition disabled:opacity-50">
              {isSubmitting ? "Sending..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}