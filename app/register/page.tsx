import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

export default function Register() {
  return (
    <div className="flex h-screen bg-secondary items-center justify-end text-center">
      <Card className="m-16">
        <CardHeader className="max-w-md">
          <CardTitle>Cadastre-se gratuitamente</CardTitle>
          <CardDescription>
            Insira um email para continuar seu cadastro
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2 max-w-md text-left">
          <div className="space-y-1">
            <Label htmlFor="name">Email</Label>
            <Input id="name" />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col ">
          <Button className="mb-4 w-full">Cadastre-se</Button>
          <div className="flex items-center justify-center mb-8">
            <Separator className="w-24 mr-2" />
            <p>Ou continue com</p>
            <Separator className="w-24 ml-2" />
          </div>
          <Button className="mb-4 w-full" variant={"outline"}>
            Google
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
