import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";

function Footer() {
  return (
    <section
  className="relative overflow-hidden py-10 border-t-2 border-blue-300"
  style={{ backgroundColor: "#333446" }}
>
  <div className="relative z-10 mx-auto max-w-7xl px-4">
    <div className="flex flex-wrap -mx-4">
      {/* Logo & Copyright */}
      <div className="w-full sm:w-1/2 lg:w-5/12 px-4 mb-4 sm:mb-0 flex align-middle justify-center">
        <div className="flex flex-col justify-between h-full ">
          <div className="m-auto bg-amber-50 rounded-4xl">
            <Logo width="200px" />
          </div>
          <p className="text-sm text-white mt-4">
            &copy; 2023. All Rights Reserved by DevUI.
          </p>
        </div>
      </div>

      {/* Company Section */}
      <div className="w-1/2 sm:w-1/2 md:w-1/4 lg:w-2/12 px-4 mb-8">
        <h3 className="mb-4 text-xs font-semibold uppercase text-white">
          Company
        </h3>
        <ul>
          <li className="mb-2">
            <Link to="/" className="text-base text-white hover:text-gray-700">
              Features
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/" className="text-base text-white hover:text-gray-700">
              Pricing
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/" className="text-base text-white hover:text-gray-700">
              Affiliate Program
            </Link>
          </li>
          <li>
            <Link to="/" className="text-base text-white hover:text-gray-700">
              Press Kit
            </Link>
          </li>
        </ul>
      </div>

      {/* Support Section */}
      <div className="w-1/2 sm:w-1/2 md:w-1/4 lg:w-2/12 px-4 mb-8">
        <h3 className="mb-4 text-xs font-semibold uppercase text-white">
          Support
        </h3>
        <ul>
          <li className="mb-2">
            <Link to="/" className="text-base text-white hover:text-gray-700">
              Account
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/" className="text-base text-white hover:text-gray-700">
              Help
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/" className="text-base text-white hover:text-gray-700">
              Contact Us
            </Link>
          </li>
          <li>
            <Link to="/" className="text-base text-white hover:text-gray-700">
              Customer Support
            </Link>
          </li>
        </ul>
      </div>

      {/* Legal Section */}
      <div className="w-full md:w-1/2 lg:w-3/12 px-4 ">
        <h3 className="mb-4 text-xs font-semibold uppercase text-white">
          Legals
        </h3>
        <ul>
          <li className="mb-2">
            <Link to="/" className="text-base text-white hover:text-gray-700">
              Terms &amp; Conditions
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/" className="text-base text-white hover:text-gray-700">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link to="/" className="text-base text-white hover:text-gray-700">
              Licensing
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>

  );
}

export default Footer;
