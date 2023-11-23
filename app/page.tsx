import { Avatar, AvatarImage } from "@/components/ui/avatar";
import Navbar from "@/components/ui/navbar";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="h-screen flex items-center justify-around">
        <div className="bg-secondary w-96 rounded-xl">
          <div className="h-32 flex items-center">
            <Avatar className="m-8">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            </Avatar>
            <div>
              <h1 className=" ">Lucas Dalan</h1>
              <p>Software Developer</p>
            </div>
          </div>
          <div className="h-[256px] text-center">
            <Separator />
            <h1>Redes Sociais</h1>
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
