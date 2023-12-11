"use client";
import { LogOutIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Label } from "../ui/label";
import { SettingsDialog } from "./dialogs/settings-dialog";
import { destroyCookie } from "nookies";
import { useRouter } from "next/navigation";

export function Topbar() {
  const router = useRouter();
  async function logout() {
    destroyCookie(undefined, "case-token");

    router.refresh;
    router.replace("/");
  }
  return (
    <div className="h-14 flex items-center justify-end">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <div className="flex items-center mx-4">
            <Label className="mr-4">Lucas</Label>
            <Avatar>
              <AvatarImage
                src="https://github.com/lucasd09.png"
                alt="@shadcn"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Conta</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <SettingsDialog />
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={() => {
              logout();
            }}
          >
            <LogOutIcon className="mr-2 h-4 w-4" />
            <span>Logout</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
