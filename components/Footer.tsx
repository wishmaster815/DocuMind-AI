"use client";

import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconFlare,
  IconNote,
  IconReceipt2,
  IconSettings,
  IconUserQuestion,
} from "@tabler/icons-react";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer
      className="bg-neutral-950 w-full text-neutral-400 pt-10 px-6 md:px-16 "
      id="footer"
    >
      <div className="max-w-7xl mx-auto content-center grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center space-x-2 mb-4 ">
            <Image src="/logo.svg" alt="logo" width={32} height={32} />
            <h3 className="text-white text-lg font-semibold ">DocuMind</h3>
          </div>
          <p className="">
            Instantly interact with your documents using AI. Upload PDFs, ask
            questions, get answers — fast and simple.
          </p>
        </div>

        <div>
          <h4 className="text-white font-bold mb-3">Product</h4>
          <ul className="space-y-2 ">
            <li>
              <a
                href="#features"
                className="hover:text-white transition  justify-center gap-1 "
              >
                <div className="flex gap-1.5">
                  <IconFlare />
                  <p>Features</p>
                </div>
              </a>
            </li>
            <li>
              <a
                href="#pricing"
                className="hover:text-white transition  justify-center gap-1 "
              >
                <div className="flex gap-1.5">
                  <IconReceipt2 />
                  <p>Pricing</p>
                </div>
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-3">Resources</h4>
          <ul className="space-y-2 ">
            <li>
              <a
                href="#"
                className="hover:text-white transition  justify-center gap-1 "
              >
                <div className="flex gap-1.5">
                  <IconNote />
                  <p>Docs</p>
                </div>
              </a>
            </li>
            <li>
              <a
                href="#faq"
                className="hover:text-white transition  justify-center gap-1 "
              >
                <div className="flex gap-1.5">
                  <IconUserQuestion />
                  <p>FAQ</p>
                </div>
              </a>
            </li>
            <li>
              <a
                href="/terms"
                className="hover:text-white transition  justify-center gap-1 "
              >
                <div className="flex gap-1.5">
                  <IconSettings />
                  <p>Terms and Conditions</p>
                </div>
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-3">Socials</h4>
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
                </div>
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
