import TabsCreate from "@/components/client-components/tabs-create";
import { Topbar } from "@/components/client-components/top-bar";
import { Separator } from "@/components/ui/separator";
import { jwtDecode } from "jwt-decode";
import { parseCookies } from "nookies";

export default function Create() {
  return (
    <div className="flex h-screen">
      <div className="w-14 bg-secondary hover:w-40 transition-width duration-300 ease-in-out"></div>
      <Separator orientation="vertical" />
      <div className="flex flex-col w-full">
        <Topbar />
        <Separator />
        <TabsCreate />
      </div>
    </div>
  );
}
