import { Button } from "@heroui/button"
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card"

export const PriceList1 = () =>{
    return(
        <Card className="w-[300px] h-[400px] flex flex-col bg-[#84A27E] items-center justify-center text-[#D0E5D4] rounded-2xl italic shadow-lg shadow-gray-400">
            <CardHeader className="flex flex-col justify-center">

                <div className="border-[#D0E5D4] border-b-2 text-2xl font-black">
                    <h1>Pro Plan</h1>
                </div>

                <div className="flex flex-col gap-2 border-b-2 border-[#D0E5D4] text-base font-bold py-5 w-full items-start">
                    <h2>Cost: 9.99$/<span className="font-light">Month</span></h2>
                    <h2>Bring Managing To Next Level</h2>
                </div>
            </CardHeader>

            <CardBody>
                <ul className="list-disc px-5 text-base font-extralight ">
                    <li>Unlimited spaces</li>
                    <li>Automated Low Stock Alerts</li>
                    <li>Profit & Cost Analysis</li>
                    <li>Gain full access to all tool</li>
                </ul>
            </CardBody>

            <CardFooter className="flex justify-center my-5">
                <Button className="bg-[#D0E5D4] text-[#84A27E] font-bold rounded-3xl px-5 text-base hover:bg-[#c2d5c6] transition duration-500">Upgrade Now</Button>
            </CardFooter>
        </Card>
    )
};

export const PriceList2 = () =>{
    return(
        <Card className="w-[300px] h-[400px] flex flex-col bg-[#84A27E] items-center justify-center text-[#D0E5D4] rounded-2xl italic shadow-lg shadow-gray-400">
            <CardHeader className="flex flex-col justify-center">

                <div className="border-[#D0E5D4] border-b-2 text-2xl font-black">
                    <h1>Free Plan</h1>
                </div>

                <div className="flex flex-col gap-2 border-b-2 border-[#D0E5D4] text-base font-bold py-5 w-full items-start">
                    <h2>Cost: Free</h2>
                    <h2>Manage Your Storage Freely!</h2>
                </div>
            </CardHeader>

            <CardBody>
                <ul className="list-disc px-5 text-base font-extralight ">
                    <li>Limited spaces (25 Space) </li>
                    <li>Automated Low Stock Alerts</li>
                    <li>Basic Analysis Report</li>
                </ul>
            </CardBody>

            <CardFooter className="flex justify-center my-5">
                <Button className="bg-[#D0E5D4] text-[#84A27E] font-bold rounded-3xl px-5 text-sm hover:bg-[#c2d5c6] transition duration-500">Try Now</Button>
            </CardFooter>
        </Card>
    )
}