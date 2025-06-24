import "@/styles/globals.css";
import clsx from "clsx";
import { fontSans } from "@/config/fonts";
export default function ContentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className={clsx( "flex flex-col w-full items-center justify-center gap-4 font-sans antialiased", fontSans.variable, )}>
      <div className="inline-block w-full text-center justify-center">
        {children}
      </div>
    </section>
  );
}
