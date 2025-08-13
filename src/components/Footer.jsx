import React from "react";

const Footer = () => {
  return (
    <footer className="bg-amber-950 text-white py-12 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Contact</h3>
          <p className="mb-2">
            Our support Hotline is available 10am-5pm & WhatsApp us 24 Hours a
            day:
          </p>
          <p className="mb-2 font-medium text-orange-400">
            +91 8807695607
          </p>
          <p className="mb-6 underline underline-offset-2 hover:text-orange-400 cursor-pointer">
            info@aathilife.com
          </p>
        </div>

        {/* Address */}
        <div>
          <h4 className="text-xl font-semibold mb-3">Building Address</h4>
          <p>3/33 Manakkarai Villukuri,</p>
          <p>Kanyakumari district,</p>
          <p>Tamil Nadu 629180</p>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center mt-10 text-sm text-orange-400">
        © {new Date().getFullYear()} Aathi Life. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
