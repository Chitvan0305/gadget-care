"use client";

import { useState } from "react";
import { PhoneCall, Menu, X } from "lucide-react";
import "../globals.css";
import Image from "next/image";

export default function AboutUs() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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
          <a href="/" className="text-gray-600 font-medium">
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
              <a
                href="/"
                className="text-gray-600 hover:text-primary"
              >
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
            <span className="text-green-700 font-bold">Privacy</span>
          </div>
        </div>
      </div>

      <div class="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-2xl">
        <h1 class="text-2xl font-bold mb-4">GKB solutions Policy</h1>

        <p class="mb-4">
          <strong>GKB solutions</strong> is a product of{" "}
          <strong>Tecmicra Solutions</strong> with all rights reserved. We are
          an online platform that allows people to book home and business
          support services with ease and at the best prices.
        </p>

        <p class="mb-4">
          Our platform allows customers wanting home and business support
          services to connect with related professionals registered and verified
          on our platform. However, the registered partners do not have any
          claim on the domain <strong>GKB solutions</strong> as their own.
          GKB solutions reserves the right to terminate association with a
          vendor anytime without prior consent. All the bills and invoices for
          services will be issued solely by GKB solutions.
        </p>

        <h2 class="text-xl font-semibold mb-2">Refund & Charge-back Policy</h2>
        <p class="mb-4">
          No claim of charge-back or refund shall be admissible in case of
          satisfactory service delivery and feedback marked as "Satisfied" or
          "Very Satisfied". Requests for changes in ordered services or the
          duration of the plan opted will not be entertained, and no charge-back
          or refund can be claimed during the contract period.
        </p>

        <p class="mb-4">
          Once feedback is given by the user as "Satisfied" for a service
          mentioned in ticket details, the user cannot later claim non-receipt
          of service. For further correspondence, users must email{" "}
          <a
            href="mailto:services@gkbsolutions.in"
            class="text-blue-600 underline"
          >
            services@gkbsolutions.in
          </a>{" "}
          or call support numbers provided in the transaction confirmation
          email.
        </p>

        <h2 class="text-xl font-semibold mb-2">Complaint Handling</h2>
        <p class="mb-4">
          In case of alleged deficient or unsatisfactory service delivery, the
          user must provide supporting documents. The company holds sole
          discretion to evaluate the complaint and report on the delivery of
          services. The company's decision shall be final and binding. If the
          services are found deficient, users may claim a proportionate
          charge-back for unrendered services.
        </p>

        <p class="mb-4">
          To file a complaint, please email your order number to{" "}
          <a
            href="mailto:services@gkbsolutions.in"
            class="text-blue-600 underline"
          >
            services@gkbsolutions.in
          </a>{" "}
          or call{" "}
          <a href="tel:+918076406998" class="text-blue-600 underline">
            +91 8076406998
          </a>
          . Provide a valid email ID when placing your order. If acknowledgment
          isn't received, include the order date to help us track your order.
        </p>

        <h2 class="text-xl font-semibold mb-2">Data Privacy</h2>
        <p class="mb-4">
          We do not share customer data with third parties except registered
          partners who are bound by agreements prohibiting sharing of personal
          information beyond service fulfillment.
        </p>

        <h2 class="text-xl font-semibold mb-2">Advertising & Media Usage</h2>
        <p class="mb-4">
          We may use Google’s “re-marketing” service to target ads based on
          prior use of our site when you visit other sites in Google's content
          network.
        </p>

        <p class="mb-4">
          Some images displayed on the site are royalty-free stock images
          sourced from Pexels and Pixabay, used for display purposes only.
          Actual service details or work samples are shared via WhatsApp or
          email during customer communication.
        </p>

        <h2 class="text-xl font-semibold mb-2">Additional Policies</h2>
        <p class="mb-4">
          Kindly review our{" "}
          <a href="#" class="text-blue-600 underline">
            Terms and Conditions
          </a>
          ,{" "}
          <a href="#" class="text-blue-600 underline">
            Privacy Policy
          </a>
          , and{" "}
          <a href="#" class="text-blue-600 underline">
            GKB solutions Partner App Pricing Policy
          </a>{" "}
          on the website as they form part of this agreement between the user
          and the company.
        </p>
      </div>

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
                  <a
                    href="/"
                    className="text-gray-600 hover:text-green-500"
                  >
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
                    href="/terms-of-use"
                    className="text-gray-600 hover:text-green-500"
                  >
                    Terms of Use
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-600 hover:text-green-500"
                  >
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
    </main>
  );
}
