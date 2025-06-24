import Link from "next/link";

export const Banner = () => {
    return(
        <div className="absolute top-40  w-[80%] h-32 bg-[#84A27E] z-20 rounded-lg lg:rounded-2xl shadow-lg  shadow-gray-700 sm:w-[70%] md:top-44 lg:h-52 lg:w-[90%] lg:top-96">
          <div className="absolute top-4 w-[90%] h-24 left-4 bg-white z-30 rounded-lg lg:rounded-2xl flex flex-row justify-center items-center gap-10 text-[#84A27E] pr-24 lg:h-40 lg:left-10 lg:top-7">
            <div className="hidden flex-col items-center justify-center lg:flex">
              <span className=" text-7xl font-bold italic ">20K+</span>
              <span>User</span>
            </div>
            <div className="hidden h-28 border-r-4 border-[#84A27E] lg:block"/>
            <div>
              <span className="font-bold text-base  lg:text-2xl">What Do We Provide?</span>
              <ul className="pl-5 text-xs list-disc text-left lg:text-base">
                <li>Real-time stock tracking</li>
                <li>Low stock alerts</li>
                <li>Supplier management</li>
              </ul>
            </div>
            <div className="absolute bottom-0 right-0 bg-[#84A27E] w-24 h-11 rounded-tl-md lg:rounded-tl-xl flex justify-center items-center lg:w-48 lg:h-20">
                <button className="inline-flex h-8 text-xs px-1 animate-shimmer items-center justify-center rounded-md lg:rounded-xl lg:text-lg lg:h-14 lg:px-6 bg-[linear-gradient(110deg,#B3D1B4,45%,#bfdfc0,55%,#B3D1B4)] bg-[length:200%_100%]  font-black text-[#84A27E] transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                  <Link href="/signup">
                    Try Free Now
                  </Link>
                </button>          
            </div>
          </div>
          
        </div>
    );
}