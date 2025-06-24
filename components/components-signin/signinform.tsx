"use client";
import React, { useState } from "react";
import { Label } from "../ui/landing-ui/label";
import { Input } from "../ui/landing-ui/input";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { UserProp } from "@/prop/UserProp";
import { redirect } from 'next/navigation';
import { useRouter } from "next/navigation";

export function Signinform() {

  const router = useRouter(); // ✅ Initialize router


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState<UserProp | null>(null);

  const handleLogin = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem(`user-${email}`) || "{}");
    if (storedUser.email === email && storedUser.password === password) {
      setUser(storedUser); // Load user data
      console.log("Log in successfully");
      localStorage.setItem("loggedInUser", JSON.stringify(storedUser));
      router.push("/dashboard"); // Redirect after login
    } else {
      alert("User not found! Please register.");
    }
  };


  return (
    <div className="text-center mx-auto w-full max-w-md p-4 md:p-8">
      <h2 className="text-4xl font-bold text-neutral-800 dark:text-neutral-200">
        Stocky
      </h2>
      <p className="mt-2 max-w-md text-base text-neutral-600 dark:text-neutral-300">
        Log in
      </p>

      <form className="my-8 text-left space-y-5" onSubmit={handleLogin}>
        
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email</Label>
          <Input id="email" placeholder="Enter your email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input id="password" placeholder="Enter your password" type="password" onChange={(e) => setPassword(e.target.value)}/>
        </LabelInputContainer>

        <span className="flex justify-end text-[#0000FF] underline hover:text-[#800080]"><Link href="#">Forgot password?</Link></span>
        <button
          className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
          type="submit"
        >
          Log in
          <BottomGradient />
        </button>

        <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />

        <div className="text-center">
            <p className="text-black">Don't have an account? <span className="text-[#0000FF] underline hover:text-[#800080]"><Link href="/signup">Sign up</Link></span></p>
        </div>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
