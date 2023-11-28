import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export default function Login() {
  return (
    <div className="flex">
      <div className="bg-secondary h-screen w-full">a</div>
      <div className="flex flex-col justify-center w-[660px]">
        <h1>Faça login em sua conta</h1>
        <Input placeholder="Email" />
        <Input placeholder="Senha" />
        <Button>Login</Button>
        <Separator />
      </div>
    </div>
  );
}
