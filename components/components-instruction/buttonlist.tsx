"use client";
import { Button } from "@heroui/button";

export const Button1 = () =>{
    return (
        <Button className="w-[100px] h-[80px] md:w-[300px] md:h-[100px] bg-white shadow-lg shadow-gray-500 rounded-xl text-3xl font-bold text-[#84A27E] hover:bg-[#ebebeb] transition duration-300"
                onPress={() => document.getElementById("utilize-section")?.scrollIntoView({ behavior: "smooth" })}>
            <svg width="80" height="80" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(0 0 0)">
            <path d="M6.75 2.5C5.50736 2.5 4.5 3.50736 4.5 4.75V19.5C4.5 21.1569 5.84315 22.5 7.5 22.5H18.75C19.1642 22.5 19.5 22.1642 19.5 21.75C19.5 21.3358 19.1642 21 18.75 21H18V18H18.75C19.1642 18 19.5 17.6642 19.5 17.25V4.75C19.5 3.50736 18.4926 2.5 17.25 2.5H6.75ZM7.5 21C6.67157 21 6 20.3284 6 19.5C6 18.6716 6.67157 18 7.5 18H16.5V21H7.5ZM8.625 5.875H15.375C15.7892 5.875 16.125 6.21079 16.125 6.625V9.875C16.125 10.2892 15.7892 10.625 15.375 10.625H8.625C8.21079 10.625 7.875 10.2892 7.875 9.875V6.625C7.875 6.21079 8.21079 5.875 8.625 5.875Z" fill="#84a27e"/>
            </svg>
            <span className="hidden md:block">Utilization</span>
            
        </Button>
    );
}
export const Button2 = () =>{
    return (
        <Button className="w-[100px] h-[80px] md:w-[300px] md:h-[100px] bg-white shadow-lg shadow-gray-500 rounded-xl text-3xl font-bold text-[#84A27E] hover:bg-[#ebebeb] transition duration-300"
                onPress={() => document.getElementById("faq-section")?.scrollIntoView({ behavior: "smooth" })}>
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(0 0 0)">
            <path fillRule="evenodd" clipRule="evenodd" d="M2.5 6C2.5 4.75736 3.50736 3.75 4.75 3.75H19.25C20.4926 3.75 21.5 4.75736 21.5 6V16.5484C21.5 17.791 20.4926 18.7984 19.25 18.7984H7.635L3.75032 22.277C3.52993 22.4743 3.21411 22.5237 2.94401 22.403C2.67391 22.2823 2.5 22.0141 2.5 21.7182V6ZM12.0001 8.63281C11.4037 8.63281 10.9202 9.11633 10.9202 9.71277C10.9202 10.127 10.5844 10.4628 10.1702 10.4628C9.75595 10.4628 9.42017 10.127 9.42017 9.71277C9.42017 8.2879 10.5753 7.13281 12.0001 7.13281C13.425 7.13281 14.5801 8.2879 14.5801 9.71277C14.5801 10.5885 14.1431 11.362 13.4787 11.8272C13.2443 11.9913 13.0472 12.1531 12.9126 12.3157C12.7808 12.4748 12.7501 12.584 12.7501 12.659C12.7501 13.0732 12.4143 13.409 12.0001 13.409C11.5859 13.409 11.2501 13.0732 11.2501 12.659C11.2501 12.1175 11.4911 11.6804 11.7573 11.359C12.0205 11.0411 12.3476 10.788 12.6183 10.5985C12.899 10.4019 13.0801 10.0784 13.0801 9.71277C13.0801 9.11633 12.5966 8.63281 12.0001 8.63281ZM11.2494 14.667C11.2494 14.2528 11.5852 13.917 11.9994 13.917C12.4136 13.917 12.7501 14.2528 12.7501 14.667C12.7501 15.0812 12.4136 15.417 11.9994 15.417C11.5852 15.417 11.2494 15.0812 11.2494 14.667Z" fill="#84a27e"/>
            </svg>
            <span className="hidden md:block">FaQ</span>
        </Button>
    );
}
export const Button3 = () =>{
    return (
        <Button className="w-[100px] h-[80px] md:w-[300px] md:h-[100px] bg-white shadow-lg shadow-gray-500 rounded-xl text-3xl font-bold text-[#84A27E] hover:bg-[#ebebeb] transition duration-300"
                onPress={() => document.getElementById("helpcenter-section")?.scrollIntoView({ behavior: "smooth" })}>
            <svg width="80" height="80" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(0 0 0)">
            <path d="M12 3.53125C7.16753 3.53125 3.25 7.44878 3.25 12.2813L3.25003 17.5312C3.25003 18.7739 4.25739 19.7812 5.50003 19.7812H6.50003C7.74267 19.7812 8.75003 18.7739 8.75003 17.5312V14.0312C8.75003 12.7886 7.74267 11.7812 6.50003 11.7812H5.50003C5.24061 11.7812 4.99144 11.8252 4.75955 11.9059C4.95486 8.0763 8.12185 5.03125 12 5.03125C15.8782 5.03125 19.0452 8.07627 19.2405 11.9059C19.0087 11.8251 18.7596 11.7812 18.5002 11.7812H17.5002C16.2576 11.7812 15.2502 12.7886 15.2502 14.0312V17.5312C15.2502 18.7739 16.2576 19.7812 17.5002 19.7812H18.5002C19.7429 19.7812 20.7502 18.7739 20.7502 17.5312L20.7501 12.2813C20.7501 7.44878 16.8326 3.53125 12 3.53125Z" fill="#84a27e"/>
            </svg>
            <span className="hidden md:block">Help Center</span>
            
        </Button>
    );
}