"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/landing-ui/sticky-scroll-reveal";


const content = [
  {
    title: "Dashboard",
    description:
      "The Dashboard is the central hub of the stock management website, providing a quick and visual summary of the current inventory status. It helps users monitor product levels, stock trends, and overall warehouse health at a glance.",
    content: (
      <div className="flex h-full w-full items-center justify-center">
        <img
          src="/assets/dashboard.png" // path to image
          alt="Dashboard Preview"
          className="h-full w-full object-cover rounded-md"
        />
      </div>
    ),
  },
  {
    title: "Inventory",
    description:
      "This Inventory section displays a clear overview of your inventory list. It includes essential details such as product ID, name, category, price, and available stock. You can easily browse, sort, or filter products to monitor stock levels and manage your inventory efficiently.",
    content: (
      <div className="flex h-full w-full items-center justify-center">
        <img
          src="/assets/inventory.png" // path to image
          alt="Dashboard Preview"
          className="h-full w-full object-cover rounded-md"
        />
      </div>
    ),
  },
  {
    title: "Product",
    description:
      'This product section lets you view and manage your product catalog visually. Each product is displayed as a card with an image, name, price, stock count, and category. You can search for specific products or click the "Create Product" button to add new items to your catalog.',
    content: (
      <div className="flex h-full w-full items-center justify-center">
        <img
          src="/assets/product.png" // path to image
          alt="Dashboard Preview"
          className="h-full w-full object-cover rounded-md"
        />
      </div>
    ),
  },
  {
    title: "Setting",
    description:
      "The Settings page allows users to manage their personal profile and account credentials in a secure and user-friendly way. It includes options to update the username, email address, change the password, and add a personal bio for profile customization.",
    content: (
      <div className="flex h-full w-full items-center justify-center">
        <img
          src="/assets/setting.png" // path to image
          alt="Dashboard Preview"
          className="h-full w-full object-cover rounded-md"
        />
      </div>
    ),
  },
];
export function Utilization() {
  return (
    <div className="relative w-full h-full lg:py-4">
      {/* <div className="absolute bg-white w-[50%] h-full z-0 rounded-lg"/> */}
      <StickyScroll content={content} />
    </div>
  );
}
