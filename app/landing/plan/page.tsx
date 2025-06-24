import { PriceList1, PriceList2 } from "@/components/pricelist";

export default function PlanPage() {
  return (
    <div className="flex flex-col justify-start items-center w-full gap-10 h-fit md:h-screen">
      <div className="text-[#84A27E]">
        <h1 className="font-bold text-4xl">Choose Your Plan</h1>
        <p className="font-light text-base py-5 px-5">Flexible pricing for teams of all sizes. Start with a free plan and upgrade when you're ready.</p>
      </div>

      <div className="flex flex-col gap-20 md:flex-row">
        <PriceList1/>
        <PriceList2/>
      </div>
    </div>
  );
}
