import "@/styles/globals.css";
import { fontSans } from "@/config/fonts";
import clsx from "clsx";
import { Nav } from "@/components/navbar";
import { Footer } from "./footer";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
        <section className={clsx( "min-h-screen text-foreground bg-[#B3D1B4] font-sans antialiased", fontSans.variable, )}>
            <Nav/>
        <div className="inline-block w-full text-center justify-center">
            {children}
        </div>
            <Footer/>
        </section>
    
    </>
  );
}
