import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export default function Register() {
  return (
    <div className="flex h-screen bg-secondary items-center justify-end">
      <div className="flex flex-col bg-card justify-center w-[385px] h-[600px] p-4 m-16 rounded-lg text-center border">
        <h1 className="text-lg">Cadastre-se gratuitamente</h1>
        <h3 className="mb-8 text-sm">
          Insira um email para continuar seu cadastro
        </h3>
        <Input placeholder="Email" className="mb-4" />
        <Button className="mb-4">Cadastre-se</Button>
        <div className="flex items-center justify-center mb-8">
          <Separator className="w-24 mr-2" />
          <p>Ou continue com</p>
          <Separator className="w-24 ml-2" />
        </div>
        <Button className="mb-4" variant={"outline"}>
          Google
        </Button>
      </div>
    </div>
  );
}
