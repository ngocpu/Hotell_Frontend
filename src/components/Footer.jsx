import { FacebookIcon, Instagram, Mail, Phone } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-900 py-6 my-[40px]" >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1 */}
          <div>
            <a href="#" className="text-lg font-bold mb-4 text-center">Home</a>
            {/* Add your home logo here */}
          </div>
          {/* Column 2 */}
          <div className="text-center" style={{fontFamily:"sans-serif"}}>
            <h6 className="text-lg font-bold mb-4">Liên hệ</h6>
            <div className="flex justify-center items-center gap-2 mb-4">
              <Mail />
              <p>: Home@gmail.com</p>
            </div>
            <div className="flex justify-center items-center gap-2">
              <Phone />
              <p>: +123456789</p>
            </div>
          </div>
          {/* Column 3 */}
          <div className="text-center" style={{fontFamily:"sans-serif"}}>
            <h6 className="text-lg font-bold mb-4">Địa chỉ</h6>
            <p>123 Street, City, Country</p>
            <div className="flex mt-4 justify-center">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-4"
              >
                <FacebookIcon />
              </a>
              <a href="mailto:example@example.com" className="mr-4">
                <Mail />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
