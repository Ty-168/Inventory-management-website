import { Signinform } from "@/components/components-signin/signinform";
import { Signinimage } from "@/components/components-signin/signinimage";
import Link from "next/link";

export default function SigninPage() {

  return (
    <div className="flex flex-row justify-start items-center w-full h-full md:h-screen">
        <div className="relative w-[60%] hidden md:block">
          <Link href="/landing" className="absolute flex flex-row justify-center items-center left-5 py-5">
            <svg width="24" height="24" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(0 0 0)">
              <path d="M18.125 6.62502C18.125 6.32168 17.9423 6.0482 17.662 5.93211C17.3818 5.81603 17.0592 5.88019 16.8447 6.09469L10.5947 12.3447C10.3018 12.6376 10.3018 13.1125 10.5947 13.4054L16.8447 19.6554C17.0592 19.8699 17.3818 19.934 17.662 19.8179C17.9423 19.7018 18.125 19.4284 18.125 19.125V6.62502Z" fill="#FFFFFF"/>
              <path d="M13.4053 7.15535C13.6982 6.86246 13.6982 6.38758 13.4053 6.09469C13.1124 5.8018 12.6376 5.8018 12.3447 6.09469L6.09467 12.3447C5.80178 12.6376 5.80178 13.1125 6.09467 13.4054L12.3447 19.6554C12.6376 19.9482 13.1124 19.9482 13.4053 19.6554C13.6982 19.3625 13.6982 18.8876 13.4053 18.5947L7.68566 12.875L13.4053 7.15535Z" fill="#FFFFFF"/>
            </svg>
            <span className="text-white font-bold text-lg">Back</span>
          </Link>
          <Signinimage/>
        </div>

        <div className="w-full h-screen bg-white flex items-center md:w-[40%]">
          <Link href="/landing" className="absolute flex flex-row justify-center items-center top-0 left-5 py-5 md:hidden">
            <svg width="24" height="24" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(0 0 0)">
              <path d="M18.125 6.62502C18.125 6.32168 17.9423 6.0482 17.662 5.93211C17.3818 5.81603 17.0592 5.88019 16.8447 6.09469L10.5947 12.3447C10.3018 12.6376 10.3018 13.1125 10.5947 13.4054L16.8447 19.6554C17.0592 19.8699 17.3818 19.934 17.662 19.8179C17.9423 19.7018 18.125 19.4284 18.125 19.125V6.62502Z" fill="#000000"/>
              <path d="M13.4053 7.15535C13.6982 6.86246 13.6982 6.38758 13.4053 6.09469C13.1124 5.8018 12.6376 5.8018 12.3447 6.09469L6.09467 12.3447C5.80178 12.6376 5.80178 13.1125 6.09467 13.4054L12.3447 19.6554C12.6376 19.9482 13.1124 19.9482 13.4053 19.6554C13.6982 19.3625 13.6982 18.8876 13.4053 18.5947L7.68566 12.875L13.4053 7.15535Z" fill="#000000"/>
            </svg>
            <span className="text-black font-bold text-lg">Back</span>
          </Link>
          <Signinform/>
        </div>
    </div>
  );
}
