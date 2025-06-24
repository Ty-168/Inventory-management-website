"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const sections = ["dashboard", "inventory", "product", "setting"];

export const ProfileBanner = () => {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    console.log("⏳ Pathname changed:", pathname); // Debug: Check if useEffect runs

    // Extract correct section
    const pathSegments = pathname.split("/");
    let currentPath = "dashboard"; // Default when on `/content`

    if (pathSegments.length >= 3 && sections.includes(pathSegments[2])) {
      currentPath = pathSegments[2]; // Extract `/content/{section}`
    }

    console.log("✅ Extracted Section:", currentPath); // Debug: Verify correct section
    setActiveSection(currentPath);

  }, [pathname]); // React to pathname changes

  return (
    <div className=" bg-blue-200 w-full h-28 ">
      <h1>{activeSection ? `Current Section: ${activeSection}` : "Loading..."}</h1>
    </div>
  );
};
