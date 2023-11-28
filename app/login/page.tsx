import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export default function Login() {
  return (
    <div className="flex h-screen bg-secondary items-center justify-end">
      <div className="flex flex-col bg-card justify-center w-[385px] h-[600px] p-4 m-16 rounded-lg text-center border">
        <h1 className="mb-8 text-lg">Faça login em sua conta</h1>
        <Input placeholder="Email" className="mb-4" />
        <Input placeholder="Senha" className="mb-4" />
        <Button className="mb-4">Login</Button>
        <div className="flex items-center justify-center mb-8">
          <Separator className="w-32 mr-2" />
          <p>OU</p>
          <Separator className="w-32 ml-2" />
        </div>
        <Button className="mb-4" variant={"outline"}>
          Google
        </Button>
      </div>
    </div>
  );
}
