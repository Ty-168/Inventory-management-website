"use client";
import { UserProp } from "@/prop/UserProp";
import { cn } from "@/lib/utils"
import { Label } from "../ui/content-ui/label"
import { Input } from "../ui/content-ui/input"
import { Button } from "../ui/content-ui/button";
import React from "react";

export function ProfileEditor({
  user,
  onRefresh,
}: {
  user: UserProp;
  onRefresh: () => void;
}) {
    const [editingUser, setEditingUser] = React.useState<UserProp>(user);

    const [newPassword, setNewPassword] = React.useState("");
    const [confirmPassword, setConfirmPassword] = React.useState("");
    const [error, setError] = React.useState("");

    React.useEffect(() => {
        if (user && user.name) {
            setEditingUser(user);
        }
    })

    const handleUpdate = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Check if profile changed
        const hasProfileChanged =
            editingUser.name !== user.name || editingUser.email !== user.email;

        // Check if password update is requested
        const wantsPasswordChange = newPassword || confirmPassword;

        if (wantsPasswordChange) {
            if (newPassword === user.password) {
            setError("The new password must be different from your current password.");
            return;
            }
            if (newPassword !== confirmPassword) {
            setError("New passwords do not match!");
            return;
            }
            editingUser.password = newPassword;
        }

        if (!hasProfileChanged && !wantsPasswordChange) {
            setError("No changes detected.");
            return;
        }

        // Save everything
        const userEmail = user.email;
        localStorage.setItem("loggedInUser", JSON.stringify(editingUser));
        localStorage.setItem(`user-${userEmail}`, JSON.stringify(editingUser));
        localStorage.setItem(`products-${userEmail}`, JSON.stringify(editingUser));
        setEditingUser(editingUser);
        setError("");
        onRefresh();
    };

    return(
        <form className={cn("grid items-start gap-6 px-5")} onSubmit={handleUpdate}>
            <h1>Personal Profile</h1>

            <div className="grid gap-3">
                <Label htmlFor="id">Username</Label>
                <Input
                type="text"
                id="name"
                value={editingUser.name || ""}
                onChange={(e) =>
                    setEditingUser({ ...editingUser, name: e.target.value })
                }
                />
            </div>
            <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input
                id="email"
                type="email"
                value={editingUser.email || ""}
                onChange={(e) =>
                    setEditingUser({ ...editingUser, email: e.target.value })
                }
                />
            </div>
          

          <h1>Change Password</h1>
          <div className="grid gap-3">
            <Label htmlFor="password">Current Password</Label>
            <Input
            id="password"
            type="password"
            value={editingUser.password || ""}
            disabled
            />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="newpassword">New Password</Label>
            <Input
            id="newpassword"
            type="password"
            onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="confirmpassword">Confirm Password</Label>
            <Input
            id="confirmpassword"
            type="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
            <Button type="submit">Save</Button>
        </form>
    )
}