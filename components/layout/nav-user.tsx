"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "../ui/button";
import { ChevronsUpDown, LogOut, User } from "lucide-react";
import Image from "next/image";
import { LoginUser } from "@/types/auth.types";
import { signOut } from "next-auth/react";

export function NavUser({ user }: { user: LoginUser }) {
  const { email, name, image_url } = user;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="secondary"
          className="bg-background h-14 w-full hover:bg-muted"
        >
          <div className="mr-1 h-10 w-10 rounded-lg relative">
            <Image src={image_url} alt={name} fill className="object-contain" />
          </div>

          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-medium">{name}</span>
            <span className="truncate text-xs text-muted-foreground">
              {email}
            </span>
          </div>

          <ChevronsUpDown className="ml-auto h-4 w-4" />
          <span className="sr-only">Open user menu</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="start" className="w-64">
        <DropdownMenuLabel className="p-0 font-normal">
          <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
            <div className="h-8 w-8 rounded-lg relative">
              <Image
                src={image_url}
                alt={name}
                fill
                className="object-contain"
              />
            </div>

            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-medium">{name}</span>

              <span className="text-muted-foreground truncate text-xs">
                {email}
              </span>
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuItem>
          <User />
          Profile
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => signOut()} className="cursor-pointer">
          <LogOut />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
