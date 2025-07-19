"use client";

import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitter,
} from "@tabler/icons-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-neutral-950 text-neutral-400 py-10 px-6 md:px-16 ">
      <div className="max-w-7xl mx-auto content-center grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-white text-lg font-semibold mb-3">DocuMind</h3>
          <p className="">
            Instantly interact with your documents using AI. Upload PDFs, ask
            questions, get answers — fast and simple.
          </p>
        </div>

        <div>
          <h4 className="text-white font-medium mb-3">Product</h4>
          <ul className="space-y-2 ">
            <li>
              <a href="#" className="hover:text-white transition">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Use Cases
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-medium mb-3">Resources</h4>
          <ul className="space-y-2 ">
            <li>
              <a href="#" className="hover:text-white transition">
                Docs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Support
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-medium mb-3">Socials</h4>
          <ul className="space-y-2 ">
            <li>
              <a href="#" className="hover:text-white transition">
                <div className="flex gap-1.5">
                  <IconBrandTwitter />
                  <p>Twitter</p>
                </div>
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                <div className="flex gap-1.5 ">
                  <IconBrandInstagram />
                  <p>Instagram</p>
                </div>{" "}
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition  justify-center gap-1 "
              >
                <div className="flex gap-1.5">
                  <IconBrandLinkedin />
                  <p>LinkedIn</p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-neutral-800 mt-10 pt-6 text-sm text-center text-neutral-600">
        <p>© {new Date().getFullYear()} DocuMind. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
