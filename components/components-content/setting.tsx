"use client";

import { UserProp } from "@/prop/UserProp";
import React from "react";
import { ProfileEditor } from "./profile-editor";
import { BioForm } from "./bio-form";


export function Setting() {
    const [user, setUser] = React.useState<UserProp>({} as UserProp);


    const refreshUser = () => {
        const storedUser = JSON.parse(localStorage.getItem("loggedInUser") || "{}");
        const normalizedUser = {
            id: storedUser.id,
            name: storedUser.username, //  map username → name
            email: storedUser.email,
            password: storedUser.password,
        };
        setUser(normalizedUser);
    };
    console.log(user);
    React.useEffect(() => {
        if (typeof window !== "undefined") {
            refreshUser();
        }
    }, []);
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-auto gap-4 w-full h-auto">
            <div className="border py-2 md:row-span-2">
                <ProfileEditor user={user} onRefresh={refreshUser} />
            </div>
            <div className="border px-5 py-2">
                <BioForm />
            </div>
        </div>
    )
}

