"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarContent
} from "@heroui/navbar";


import { Button } from "@heroui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    {
        name: "home",
        path: "/landing",
    },
    {
        name: "instruction",
        path: "/landing/instruction",
    },
    {
        name: "plan",
        path: "/landing/plan",
    },

];

export const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathname = usePathname();

  return (
    <Navbar
      className="px-3 sm:flex bg-[#B3D1B4] shadow-lg rounded-md sm:px-6 sm:py-4 justify-center items-center w-full"
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

     <NavbarContent className="sm:hidden pr-3" justify="start">
        <NavbarBrand className="text-green-800 font-bold text-xl ">
          Stocky
        </NavbarBrand>
      </NavbarContent>
      {/* Left side brand */}
      <NavbarContent className="hidden sm:flex pr-3" justify="start">

        <NavbarBrand className="text-white font-bold text-2xl">
          Stocky
        </NavbarBrand>
      </NavbarContent>

      {/* Centered menu items */}
      <nav className="hidden sm:flex flex-row w-full justify-center sm:gap-14 md:gap-20 items-center text-white text-lg">
          {links.map((link, index) => {
              return (
                  <Link 
                      href={link.path} 
                      key={index} 
                      className={`${link.path === pathname && "text-[#84A27E] border-b-2 border-[#84A27E] font-bold"}  capitalize font-medium hover:text-[#84A27E] transition-all`}>
                      {link.name}
                  </Link>
              );
          })}
      </nav>

      {/* Right side button */}
      <div className="flex flex-row ">
        <Button as={Link} href="/signup" className="w-28 h-8 bg-[#84A27E] hover:bg-green-600 text-white px-4 py-2 rounded-lg font-bold sm:h-10">
          Get Started
        </Button>
      </div>

      <NavbarMenu className="py-5">
        {/* Expandable menu for smaller screens */}
          {links.map((link, index) => {
              return (
                <NavbarMenuItem key={index}>
                  <Link 
                      href={link.path} 
                      key={index} 
                      className={`${link.path === pathname && "text-[#84A27E] border-b-2 border-[#84A27E] font-bold"}  text-lg capitalize font-medium hover:text-[#84A27E] transition-all`}>
                      {link.name}
                  </Link>
                </NavbarMenuItem>
              );
          })}
      </NavbarMenu>
    </Navbar>
  );
};
