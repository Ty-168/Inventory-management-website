"use client";
import React, { useState } from "react";
import { Label } from "../ui/landing-ui/label";
import { Input } from "../ui/landing-ui/input";
import { cn } from "@/lib/utils";
import { Checkbox } from "../ui/landing-ui/checkbox";
import { useRouter } from "next/navigation";
import Link from "next/link";

export function Signupform() {
  const [user, setUser] = useState({ username: "", email: "", password: "" });
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Password match validation
    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    // Terms & conditions validation
    if (!agreed) {
      setError("You must agree to the terms and conditions!");
      return;
    }

    // Clear errors & save user data
    setError("");

    const newUser = { ...user, password }; // Merge password into user object
    localStorage.setItem(`user-${user.email}`, JSON.stringify(newUser));

    router.push("/signin");
    console.log("User saved:", newUser);
  };


  return (
    <div className="text-center mx-auto w-full max-w-md p-4 md:p-8">
      <h2 className="text-4xl font-bold text-neutral-800 dark:text-neutral-200 ">
        Stocky
      </h2>
      <p className="mt-2 max-w-md text-base text-neutral-600 dark:text-neutral-300 ">
        Create an account
      </p>

      <form className="my-8 text-left space-y-5" onSubmit={handleSubmit}>
          <LabelInputContainer>
            <Label htmlFor="username">Username</Label>
            <Input id="username" placeholder="Enter your username" type="text" value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })}/>
          </LabelInputContainer>

        
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email</Label>
          <Input id="email" placeholder="Enter your email" type="email" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })}/>
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input id="password" placeholder="Enter your password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="confirmpassword">Confirm password</Label>
          <Input id="confirmPassword" placeholder="Re-enter your password" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        </LabelInputContainer>

        <LabelInputContainer className="mb-4 flex flex-row justify-start gap-3">
            <Checkbox checked={agreed} onChange={(e) => setAgreed(e.target.checked)} />
            <Label htmlFor="password">I agree to the terms and conditions</Label>
        </LabelInputContainer>
        

        <button
          className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
          type="submit"
        >
          Create
          <BottomGradient />
        </button>

        <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />

        <div className="text-center">
            <p className="text-black">Already have account? <span className="text-[#0000FF] underline hover:text-[#800080]"><Link href="/signin">Log in</Link></span></p>
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
