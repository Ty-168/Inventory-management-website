import { Button1, Button2, Button3 } from "@/components/components-instruction/buttonlist";
import { title } from "@/components/primitives";
import { Button } from "@heroui/button";
import { Utilization } from "./utilization";
import { Faq } from "./faq";
import { Helpcenter } from "./helpcenter";

export default function InstructionPage() {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="relative bg-[url('/managing_stock.jpg')] bg-cover bg-center h-[36rem] w-full flex flex-col justify-center items-center gap-10">
        <div className="absolute top-0 w-full h-full bg-black opacity-50 -z-0"></div>
        <h1 className="text-white text-3xl lg:text-6xl font-bold z-10 lg:w-2/5 leading-snug">Getting Started: Your Quick Guide</h1>
        <p className="text-white text-base px-5 lg:text-lg font-light z-10">Follow these step-by-step instructions to easily get started and make the most of our features.</p>
      </div>
      <div className="flex flex-row justify-center items-center gap-5 md:gap-10 py-10">
        <Button1/>
        <Button2/>
        <Button3/>
      </div>

      <div id="utilize-section" className="h-screen bg-[#D0E5D4] flex flex-col px-20 py-20 gap-10">
        <div className="w-full text-left">
          <h1 className="text-3xl lg:text-6xl font-bold text-black">Guide Step by Step</h1>
          <div className="pt-2 border-b-4 border-black w-full"/>
        </div>
        <Utilization/>
      </div>

      <div id="faq-section" className="h-fit flex flex-col px-20 py-20 gap-5">
        <div className="w-full text-left">
          <h1 className="text-3xl lg:text-6xl font-bold text-black">FaQ</h1>
          <div className="pt-2 border-b-4 border-black w-full"/>
        </div>
        <Faq />   
      </div>

      <div id="helpcenter-section" className="h-fit flex flex-col px-20 py-20 gap-5 bg-[#D0E5D4]">
        <div className="w-full text-left">
          <h1 className="text-3xl lg:text-6xl font-bold text-black">Submit a Request</h1>
          <div className="pt-2 border-b-4 border-black w-full"/>
        </div>
        <Helpcenter />   
      </div>
    </div>
  );
}
