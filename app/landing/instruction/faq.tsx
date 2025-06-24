"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/landing-ui/sticky-scroll-reveal";
import { FaqStructure } from "@/components/components-instruction/faqstructure";


const content = [
  {
    question: "1. How do I add a new product to my inventory?",
    answer: 'You can add a new product by navigating to the Product section in the sidebar and clicking the "Add Product" button. Fill in the product details like name, category, quantity, and image.',
  },
  {
    question: "2. Can I set alerts for low stock levels?",
    answer: "Yes, you can enable low stock alerts in the Settings section. Set a minimum quantity threshold, and the system will notify you when any product falls below that level.",
  },
  {
    question: "3. How is the sales data calculated?",
    answer: "Sales data shown in the Sale Summary chart is calculated based on recorded transactions. Make sure to log sales properly to keep reports accurate.",
  },
  {
    question: "4. Can I export my reports?",
    answer: 'Absolutely. In the Reports section, click on the "Export" button to download your stock and sales summaries in CSV or PDF format.',
  },
  {
    question: '5. How do I manage user access?',
    answer: 'User roles and permissions can be managed in the Settings > User Management section. You can add team members and assign them roles like Admin, Manager, or Viewer.',
  },
  {
    question: '6. What should I do if a product is out of stock?',
    answer: 'The Inventory section highlights low or out-of-stock items. You can create a purchase order from there to restock directly.',
  },
  {
    question: '7. Can I customize product categories?',
    answer: 'Yes, you can create, edit, or delete categories in the Settings > Categories & Tags section to better organize your products.',
  },
];
export function Faq() {
  return (
    <div className="w-full py-4 lg:px-20">
      <FaqStructure content={content} />
    </div>
  );
}
