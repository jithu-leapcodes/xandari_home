import Image from "next/image";
import React from "react";
import {
  SlSocialYoutube,
  SlSocialFacebook,
  SlSocialInstagram,
  SlSocialLinkedin,
} from "react-icons/sl";
import { SiWhatsapp } from "react-icons/si";

const Footer = () => {
  const linkClass =
    "cursor-pointer text-white/80 hover:text-[#6B87FF] transition-colors duration-200";

  return (
    <footer className="w-full bg-[#0C1128] text-white py-16">
      {/* Logo Section */}
      <div className="flex justify-center mb-16">
        <div className="w-40">
          <Image
            src="/images/logo_1.png"
            alt="Logo"
            width={400}
            height={400}
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* Quick Links */}
        <div>
          <h3 className="text-[1.5rem] font-semibold mb-4 text-[#6B87FF] fontcronos">
            Quick Links
          </h3>
          <ul className="space-y-2 text-[1rem] fontcronos">
            <li className={linkClass}>Home</li>
            <li className={linkClass}>About Us</li>
            <li className={linkClass}>Resorts</li>
            <li className={linkClass}>Events</li>
            <li className={linkClass}>Gallery</li>
          </ul>
        </div>

        {/* Our Resorts */}
        <div>
          <h3 className="text-[1.5rem] font-semibold mb-4 text-[#6B87FF] fontcronos">
            Our Resorts
          </h3>
          <ul className="space-y-2 text-[1rem] fontcronos">
            <li className={linkClass}>Xandari Costa Rica</li>
            <li className={linkClass}>Xandari Pearl</li>
            <li className={linkClass}>Cardamom County</li>
            <li className={linkClass}>Xandari Riverscapes</li>
            <li className={linkClass}>Xandari Harbour</li>
          </ul>
        </div>

        {/* Policies */}
        <div>
          <h3 className="text-[1.5rem] font-semibold mb-4 text-[#6B87FF] fontcronos">
            Policies
          </h3>
          <ul className="space-y-2 text-[1rem] fontcronos">
            <li className={linkClass}>Privacy Policy</li>
            <li className={linkClass}>Terms & Conditions</li>
            <li className={linkClass}>Cancellation Policy</li>
            <li className={linkClass}>Community Exclusive T & C</li>
            <li className={linkClass}>Media</li>
          </ul>
        </div>

        {/* Costa Rica */}
        <div>
          <h3 className="text-[1.5rem] font-semibold mb-4 text-[#6B87FF] fontcronos">
            Costa Rica
          </h3>
          <ul className="space-y-2 text-[1rem] fontcronos">
            <li className={linkClass}>18663633212 (Toll Free)</li>
            <li className={linkClass}>+506 2443 2020</li>
            <li className={linkClass}>+506 8814 7967</li>
            <li className={linkClass}>info@xandari.com</li>
          </ul>
        </div>

        {/* India */}
        <div>
          <h3 className="text-[1.5rem] font-semibold mb-4 text-[#6B87FF] fontcronos">
            India
          </h3>
          <ul className="space-y-2 text-[1rem] fontcronos">
            <li className={linkClass}>+91 484 434 4666</li>
            <li className={linkClass}>(Landline Reservation)</li>
            <li className={linkClass}>+91 75580 63366</li>
            <li className={linkClass}>reservations@xandari.com</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto mt-16 px-6 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-[1rem] text-white/70 fontcronos text-center md:text-left max-w-2xl">
          © {new Date().getFullYear()} Xandari Resorts is a registered service
          mark protected by copyright law. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          {[
            SlSocialYoutube,
            SiWhatsapp,
            SlSocialFacebook,
            SlSocialInstagram,
            SlSocialLinkedin,
          ].map((Icon, index) => (
            <div
              key={index}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-[#6B87FF]
              text-white cursor-pointer transition-all duration-300
              hover:bg-[#6B87FF] hover:text-[#0C1128] hover:scale-110 hover:shadow-[0_0_12px_#6B87FF]"
            >
              <Icon size={18} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
