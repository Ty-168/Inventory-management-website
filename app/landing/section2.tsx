import { AutoAnimatedImages } from "@/components/ui/landing-ui/picture-slider";
import {Button} from "@heroui/button";
import Link from "next/link";

export function Section2(){
const testimonials = [
    {
      src: "/product/1.png ",
    },
    {
      src: "/product/2.png ",
    },
    {
      src: "/product/3.png ",
    },
    {
      src: "/product/4.png ",
    },
]
    return (
        <div className="flex flex-col w-full h-[550px] justify-center items-center py-20 lg:px-40 lg:py-20 lg:flex-row"> 
            <div className="relative w-[50%] h-full flex items-start">
                <AutoAnimatedImages testimonials={testimonials}/>
            </div>

            <div className="flex flex-col justify-center items-center lg:items-start lg:w-[60%] h-fit gap-10">
                <div className="flex flex-col gap-5 text-center lg:text-left italic text-[#84A27E] sm:w-4/5">
                    <h1 className="font-bold text-3xl lg:text-7xl">Infinite Stock Space</h1>
                    <p className="font-light text-lg">
                        Enjoy seamless stock management with unlimited capacity and zero hassle.
                    </p>
                </div>
                <Button className="bg-[#84A27E] text-[#D0E5D4] px-8 rounded-lg hover:bg-[#70896b] transition duration-500">
                    <Link href="/signup">
                        Try Now
                    </Link>
                </Button>
            </div>

        </div>
    );
}