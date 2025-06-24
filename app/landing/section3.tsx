import { PriceList1, PriceList2 } from "@/components/pricelist";

export function Section3(){
    return (
        <div className="flex flex-col w-full h-fit md:h-screen justify-start items-center lg:gap-20">

            
            <div className="w-full h-24 flex justify-center items-start">
                <h1 className="text-4xl  text-white font-black lg:text-6xl">Access Full Tools</h1>
            </div>

            <div className="relative flex flex-row justify-center items-start w-[60%] h-fit gap-10">
                <div className="absolute hidden top-0 w-2/3 h-96 bg-white rounded-t-full -z-5 md:block"></div>
                <div className="relative flex flex-col gap-16 py-10 md:py-0 md:gap-40 md:flex-row md:absolute md:top-20 ">
                    <PriceList1/>
                    <PriceList2/>
                </div>
            </div>

        </div>
    );
}