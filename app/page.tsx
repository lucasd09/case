import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/ui/navbar";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="h-screen flex items-center justify-around">
        <div></div>
        <div className="text-right flex flex-col justify-around h-[406px]">
          <div>
            <h1 className="text-7xl font-bold">SUA MARCA</h1>
            <h2 className="text-4xl">TEM ENDEREÇO</h2>
          </div>
          <p className="w-[600px]">
            Com o case, você pode destacar links importantes, redes sociais para
            contato, trabalhos anteriores e compartilhar tudo isso com um único
            clique.
          </p>
          <div className="flex justify-end">
            <Link href={"/register"}>
              <Button>Crie uma conta grátis</Button>
            </Link>
            <Separator orientation="vertical" className="mx-4" />
            <Link href={"/create"}>
              <Button variant={"outline"}>Conhecer o produto</Button>
            </Link>
          </div>
        </div>
      </div>
      <div>
        <Separator />
        footer
      </div>
    </div>
  );
}
