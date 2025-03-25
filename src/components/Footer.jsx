import React from 'react'

const Footer = () => (
    <div className="bg-gray-200 text-gray-700 text-sm p-6">
      {/* Row 1 */}
      <div className="flex justify-center space-x-6 font-medium">
        <a href="#" className="hover:underline">About Cisco</a>
        <a href="#" className="hover:underline">Contact Us</a>
        <a href="#" className="hover:underline">Careers</a>
        <a href="#" className="hover:underline">Connect with a Partner</a>
      </div>
  
      {/* Divider */}
      <hr className="my-4 border-gray-300" />
  
      {/* Row 2 */}
      <div className="flex justify-center flex-wrap space-x-6">
        <a href="#" className="hover:underline">Feedback</a>
        <a href="#" className="hover:underline">Help</a>
        <a href="#" className="hover:underline">Terms & Conditions</a>
        <a href="#" className="hover:underline">Privacy Statement</a>
        <a href="#" className="hover:underline">Cookies</a>
        <a href="#" className="hover:underline">Trademarks</a>
        <a href="#" className="hover:underline">Supply Chain Transparency</a>
        <a href="#" className="hover:underline">E-Waste Recycling Program</a>
        <a href="#" className="hover:underline">Sitemap</a>
      </div>
  
      {/* Row 3 */}
      <div className="text-center mt-4 text-gray-500">
        ©2025 Cisco Systems, Inc.
      </div>
    </div>
  );
  
  export default Footer;
  