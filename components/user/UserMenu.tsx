"use client";
import { Session } from "next-auth";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { redirect } from "next/navigation";
import { signIn, signOut } from "next-auth/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

interface UserMenuProps {
  session: Session | null;
}

const UserMenu = ({ session }: UserMenuProps) => {
  const user = session?.user;

  // if (!user) redirect("/auth/sign-in");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src={user?.image!} alt={user?.name!} />
          <AvatarFallback>M</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {user && (
          <>
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
          </>
        )}
        {user ? (
          <DropdownMenuItem>
            <button onClick={() => signOut({ callbackUrl: "/" })}>
              Sign out
            </button>
          </DropdownMenuItem>
        ) : (
          <DropdownMenuItem>
            <button onClick={() => signIn()}>Sign in</button>
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserMenu;
