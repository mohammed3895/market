"use client";
import { Session } from "next-auth";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { redirect } from "next/navigation";
import { signIn } from "next-auth/react";

interface UserMenuProps {
  session: Session | null;
}

const UserMenu = ({ session }: UserMenuProps) => {
  const user = session?.user;

  // if (!user) redirect("/auth/sign-in");

  return (
    <button onClick={() => signIn()}>
      <Avatar>
        <AvatarImage src={user?.image!} alt={user?.name!} />
        <AvatarFallback>M</AvatarFallback>
      </Avatar>
    </button>
  );
};

export default UserMenu;
