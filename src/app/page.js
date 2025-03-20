"use client";

import { useState } from "react";
import {
  Check,
  ArrowRight,
  PhoneCall,
  Activity,
  SunMoon,
  Ear,
  Siren,
  Menu,
  X,
} from "lucide-react";
import "./globals.css";
import ContactForm from "./components/ContactForm";
import Image from "next/image";

export default function AboutUs() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [openModal, setModalOpen] = useState(false);

  const services = [
    {
      img: "/img/computer-repair.avif",
      href: "/",
      title: "Laptop repair in Delhi NCR",
    },
    {
      img: "/img/amc.webp",
      href: "/",
      title: "Computer AMC Delhi NCR",
    },
    {
      img: "/img/security.webp",
      href: "/",
      title: "IT Security Delhi NCR",
    },
    {
      img: "/img/survelliance.jpg",
      href: "/",
      title: "CCTV Surveillance Delhi NCR",
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Header/Navigation */}
      <header className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <a href="/">
            <img
              src="/img/logo.png"
              alt="GKB solutions Logo"
              className="w-[120px]"
            />
          </a>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a href="/" className="text-gray-600 hover:text-primary">
            Home
          </a>
          <a href="/" className="text-gray-600 hover:text-primary">
            How It Works
          </a>
          <a href="/" className="text-green-500 font-medium">
            About Us
          </a>
          <a href="/" className="text-gray-600 hover:text-primary">
            Contact
          </a>
        </nav>

        <div>
          <a
            href="tel:+918076406998"
            className="hidden md:flex items-center bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-colors"
          >
            <PhoneCall className="me-2" size={20} /> 8076406998
          </a>
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsSidebarOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      {/* Sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-opacity-50 z-50"
          onClick={() => setIsSidebarOpen(false)}
        >
          <div
            className="fixed top-0 left-0 w-3/4 h-full bg-white shadow-lg p-6 z-50"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="mb-4 text-gray-700"
              onClick={() => setIsSidebarOpen(false)}
            >
              <X className="h-6 w-6" />
            </button>
            <nav className="flex flex-col space-y-4">
              <a href="/" className="text-gray-600 hover:text-primary">
                Home
              </a>
              <a href="/" className="text-gray-600 hover:text-primary">
                How It Works
              </a>
              <a href="/" className="text-green-500 font-medium">
                About Us
              </a>
              <a href="/" className="text-gray-600 hover:text-primary">
                Contact
              </a>
            </nav>
          </div>
        </div>
      )}

      {/* Breadcrumb */}
      <div className="bg-green-50 rounded-2xl px-3 py-2 my-3 container">
        <div className="container mx-auto px-4">
          <div className="text-sm text-gray-500">
            <a href="/" className="hover:text-green-500">
              HOME
            </a>
            <span className="mx-2">/</span>
            <span className="text-green-700 font-bold">ABOUT US</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-5 md:py-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-green-500 mb-6">
              About us
            </h1>
            <p className="text-gray-600 mb-8">
              We specialize in top-notch security solutions for homes and
              businesses, ensuring your safety and peace of mind with our
              professional system setup & installation services.
            </p>
            <a
              href="https://wa.me/918076406998?text=How%20can%20we%20help%20you?"
              className="inline-flex items-center bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition-colors"
            >
              <span className="font-medium mr-2">CHAT NOW</span>
              <ArrowRight size={18} />
            </a>
          </div>
          <div className="relative flex justify-end max-md:justify-center">
            <img
              src="/img/support.png"
              alt="Security Solutions"
              className="rounded-lg w-4/5 h-auto"
            />
          </div>
        </div>
      </section>

      {/* Available For You Section */}
      <section className="container-fluid mx-auto px-4 py-5 md:py-8 bg-green-50">
        <div className="grid md:grid-cols-2 gap-8 items-center container">
          <div className="order-2 md:order-1 flex justify-start max-md:justify-center">
            <img
              src="/img/computer.png"
              alt="IT Support Expert"
              className="rounded-lg w-4/5 h-auto"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold text-green-500 mb-6">
              AVAILABLE FOR YOU
            </h2>
            <p className="text-gray-600 mb-8">
              Welcome, we are one of your reliable partner in IT system setup &
              security solutions! With a commitment to safeguarding your home
              and business, we specialize in professional laptop, desktop,
              gaming console and CCTV setup & installation services tailored to
              meet your specific needs.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                <p className="text-gray-700 font-medium">
                  Professional Experts
                </p>
              </div>
              <div className="flex items-start">
                <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                <p className="text-gray-700 font-medium">Quality assurance</p>
              </div>
              <div className="flex items-start">
                <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                <p className="text-gray-700 font-medium">
                  Seamless and hassle-free Installation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Features Section */}
      <section className=" py-12 md:py-8">
        <h2 className="container text-3xl font-bold pb-8 text-[#22C55E]">
            Trending Services in Delhi NCR
        </h2>
        <div className="flex gap-[16px] container mx-auto flex-wrap px-4">
          {services.map((service, index) => {
            return (
              <a
                href={service.href}
                key={index}
                className="max-w-sm w-full sm:flex-1 rounded overflow-hidden shadow-lg justify-center"
              >
                <img
                  className="h-[250px] w-full object-cover"
                  src={service.img || "/img/card-top.jpg"}
                  alt={service.title || "Service Image"}

                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2 text-center">
                    {service.title || "Service Title"}
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </section>

      {/* Mission Section */}

      <div className="container-fluid bg-green-50 max-md:py-3">
        <div className="container bg-green-50 flex max-md:flex-col">
          <section className="bg-green-50 py-12 max-md:py-2">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-green-500 text-center mb-8 max-md:mb-3">
                OUR MISSION
              </h2>
              <p className="text-gray-600 text-center max-w-3xl mx-auto mb-8">
                Our mission is simple: to provide high-quality security
                solutions that give you peace of mind. We understand the
                importance of safety in today's world, and we are dedicated to
                helping you protect what matters most.
              </p>
            </div>
          </section>

          {/* Team Section */}
          <section className="bg-green-50 py-12 max-md:py-2">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-green-500 text-center mb-8 max-md:mb-3">
                OUR TEAM
              </h2>
              <p className="text-gray-600 text-center max-w-3xl mx-auto">
                Our skilled technicians are not just experts in laptop setup &
                installation; they are also dedicated to providing exceptional
                customer service for all IT security & surveillance system. We
                pride ourselves on our friendly and knowledgeable staff who are
                always ready to assist you with any questions or concerns.
              </p>
            </div>
          </section>
        </div>
      </div>

      {/* Promotion Section */}
      <section className="bg-green-500 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Get 20% off your first Installation
              </h2>
              <p className="text-white max-w-xl">
                Enjoy 20% off your first service with us! Enhance your security
                at home or work while saving money. Contact us today to schedule
                your installation and claim your discount! T&C apply.
              </p>
            </div>
            <button
              className="inline-flex items-center bg-white text-green-500 px-6 py-3 rounded-full hover:bg-gray-100 transition-colors border-0 outline-0"
              onClick={() => setModalOpen(true)}
            >
              <span className="font-medium mr-2">AVAIL DISCOUNT TODAY</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold text-green-500 mb-4">
                About Us
              </h3>
              <p className="text-gray-600">
                Your trusted partner for security solutions. Our expert
                technicians specialize in smart home systems, networking, and
                laptop setup. We're committed to delivering exceptional customer
                service for all IT security and surveillance needs.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-green-500 mb-4">Address</h3>
              <p className="text-gray-600 mb-0">Building No./Flat No.: 12</p>
              <p className="text-gray-600 mb-0">
                Name of Premises/Building: LAXMI BAZAAR
              </p>
              <p className="text-gray-600 mb-0">Road/Street: Madanpuri Road </p>
              <p className="text-gray-600 mb-0">
                Nearby Landmark: LAXMI BAZAAR{" "}
              </p>
              <p className="text-gray-600 mb-0">
                Locality/Sub Locality: LAXMI BAZAAR{" "}
              </p>
              <p className="text-gray-600 mb-0">City/Town/Village: Gurugram</p>
              <p className="text-gray-600 mb-0">District: Gurugram</p>
              <p className="text-gray-600 mb-0">State: Haryana</p>
              <p className="text-gray-600">PIN Code: 122006</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-green-500 mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="/" className="text-gray-600 hover:text-green-500">
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/privacy-policy"
                    className="text-gray-600 hover:text-green-500"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/terms-and-conditions"
                    className="text-gray-600 hover:text-green-500"
                  >
                    Terms of Use
                  </a>
                </li>
                <li>
                  <a href="/" className="text-gray-600 hover:text-green-500">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-12 pt-6 text-center text-gray-500 text-sm">
            <p>
              Copyright © {new Date().getFullYear()} - GKBsolutions | All Rights
              Reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float Button */}
      <div className="fixed bottom-6 left-6 z-50">
        <a
          href="https://wa.me/918076406998?text=How%20can%20we%20help%20you?"
          className="flex items-center justify-center w-12 h-12 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>
      </div>
      <div className="fixed bottom-22 left-6 z-50">
        <a
          href="tel:+918076406998"
          className="flex items-center justify-center w-12 h-12 text-white rounded-full shadow-lg transition-colors"
        >
          <Image src="/img/phone.png" width={32} height={32} alt="call" />
        </a>
      </div>
      <ContactForm open={openModal} setOpen={setModalOpen} />
    </main>
  );
}
