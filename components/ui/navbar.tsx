import Link from "next/link";
import { ThemeSwitch } from "../client-components/theme-switch";
import { Button } from "./button";
import { Separator } from "./separator";

export default function Navbar() {
  return (
    <div className="h-16 border-b-2 flex items-center justify-around fixed w-screen top-0 bg-background">
      <ul className="flex space-x-4">
        <li>
          <a href="" className="">
            Home
          </a>
        </li>
        <li>
          <Separator orientation="vertical" />
        </li>
        <li>
          <a href="/create" className="">
            Criar
          </a>
        </li>
      </ul>
      <div className="flex h-5 items-center space-x-4 text-sm">
        <ThemeSwitch />
        <Separator orientation="vertical" />
        <Link href={"/login"}>
          <Button>Login</Button>
        </Link>
        <p>Ou</p>
        <Link href={"/register"}>
          <Button variant={"secondary"}>Cadastre-se</Button>
        </Link>
      </div>
    </div>
  );
}
