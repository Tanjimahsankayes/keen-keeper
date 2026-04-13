import React from 'react';
import { CiInstagram } from 'react-icons/ci';
import { FaFacebookF } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
      <div className="bg-[#244D3F] text-white text-center  mt-15">
        <div className="space-y-4 py-10 w-8/12 mx-auto ">
          <h2 className="text-4xl"> KeenKeeper</h2>
          <p className="text-sm text-white/80">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>

          <div>
            <h2>Social Links</h2>
            <div className="flex gap-4 text-center justify-center py-4">
              <div className="bg-white rounded-full text-black p-4 ">
                <CiInstagram className="w-5 h-5" />
              </div>
              <div className="bg-white rounded-full text-black p-4 ">
                <FaFacebookF className="w-5 h-5" />
              </div>
              <div className="bg-white rounded-full text-black p-4 ">
                <FaXTwitter className="w-5 h-5" />
              </div>
            </div>
          </div>

          <div className="flex justify-between text-white/80 border-t border-dashed pt-8 ">
            <div>
              <p>© 2026 KeenKeeper. All rights reserved.</p>
            </div>
            <div className="flex gap-4">
              <a href="/">Privacy Policy </a>
              <a href="/">Terms of Service</a>
              <a href="/">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Footer;