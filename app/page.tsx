import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ThemeSwitch } from "@/components/ui/theme-switch";

export default function Home() {
  return (
    <div>
      <div className="h-16 border-b-2 flex items-center justify-around">
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
            <a href="#" className="">
              Como funciona
            </a>
          </li>
        </ul>
        <div className="flex h-5 items-center space-x-4 text-sm">
          <ThemeSwitch />
          <Separator orientation="vertical" />
          <Button>Login</Button>
        </div>
      </div>
      <div>body</div>
      <div>footer</div>
    </div>
  );
}
