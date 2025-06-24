import Image from "next/image"

export const Signupimage = () => {
    return (
        <div className="w-full h-screen">
            <Image
            src="/assets/register.jpg"
            alt="A woman holding an iPad"
            width={900} /* Adjust based on design needs */
            height={1200} /* Keeps aspect ratio */
            className="object-cover w-full h-full"
            priority
            />
        </div>
    )
}