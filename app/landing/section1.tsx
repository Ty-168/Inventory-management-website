import Image from "next/image";
import {Button} from "@heroui/button"
import Link from "next/link";
export function Section1(){
    return (
        <div className="flex flex-col  w-full h-[480px] justify-center items-center lg:py-20 lg:px-40 lg:flex-row ">
            
            <div className="flex flex-col justify-center items-center lg:items-start w-full lg:w-[60%] h-fit gap-10 order-2 lg:order-1 ">
                <div className="flex flex-col gap-5 text-center lg:text-left italic text-[#D0E5D4] sm:w-4/5">
                    <h1 className="font-bold text-3xl lg:text-7xl">Upgrade Your Business</h1>
                    <p className="font-light text-lg">Gain full visibility into your stock levels, sales, and supplier performance—right when you need it.</p>
                </div>
                <Button className="flex flex-row justify-center items-center italic text-[#D0E5D4] text-lg font-light transform hover:translate-x-10 transition duration-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                    <Link href="/landing/instruction">
                        Explore More
                    </Link>
                </Button>
            </div>
            
            <div className="relative w-[50%] h-full flex justify-center items-center order-1 lg:order-2">
                <div className="absolute top-0 bottom-10 w-[250px] h-[250px] lg:w-[450px] lg:h-[450px] rounded-full bg-white -z-0">
                     <div className="absolute top-7 left-6 bg-[#D0E5D4] w-[200px] h-[200px] lg:top-10 lg:left-10 lg:w-[370px] lg:h-[370px] rounded-full z-[10] flex justify-center items-center"></div>
                        <Image
                        src="/product/man using phone.png"
                        width={400}
                        height={200}
                        alt="a man using phone"
                        className="absolute top-0 left-0 right-10 z-[20] w-[200px] lg:w-[400px]"
                        />
                </div>
            </div>
        </div>
    );
}