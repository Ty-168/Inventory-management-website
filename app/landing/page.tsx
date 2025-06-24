import { Banner } from "@/components/components-home/banner";
import Image from "next/image";

import { Section2 } from "./section2";
import { Section3 } from "./section3";
import { Section1 } from "./section1";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full justify-center items-center gap-10">
      <div className="w-[80%] bg-[#84A27E] h-fit   rounded-xl flex flex-col justify-center items-center">

        <div className="flex flex-col justify-center items-center md:w-8/12">
          <span className="text-3xl text-[#D0E5D4] text-center font-bold px-9 py-5 md:py-10 md:text-4xl lg:text-6xl lg:px-20">Control Your Stock With Ease!</span>
          <p className="text-xs text-white text-center font-light px-8 lg:text-base lg:px-20">Effective stock management is essential 
            for maintaining the right inventory levels to meet 
            customer demand and avoid overspending.
          </p>
        </div>


        {/* Image Section */}
        <div className="relative w-full flex justify-center items-center lg:-mt-16">
          <div className="absolute top-10 w-[250px] h-40 md:w-[400px] md:h-48 md:top-24 lg:top-28 lg:w-1/2 lg:h-80 bg-white rounded-t-full -z-5"></div>
          {/* Box Image (Move Up) */}
          <Image
            src="/product/box.png"
            width={600}
            height={200}
            alt="an open box"
            className="z-10 relative w-[250px] md:w-[350px] lg:w-[600px]"
          />
          <Banner/>
        </div>
      </div>

      {/* Section 1 */}
      <div className="relative py-10  w-full h-full mt-20 flex flex-col">
        <div className=" bg-[#84A27E]  w-full h-full text-[#D0E5D4] z-0">
          <Section1/>
        </div>
        <div className=" w-full h-full bg-[#D0E5D4] text-[#84A27E] z-10">
          <Section2/>
        </div>
      </div>

      <div className=" w-full h-full">
        <Section3/>
      </div>
    </div>
  );
}
