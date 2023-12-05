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
import { Textarea } from "@/components/ui/textarea";

export default function Login() {
  return (
    <div className="flex h-screen bg-secondary items-center justify-end text-center">
      <Card className="m-16">
        <CardHeader className="max-w-md">
          <CardTitle>Login</CardTitle>
          <CardDescription>Faça login em sua conta</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2 max-w-md text-left">
          <div className="space-y-1">
            <Label htmlFor="name">Email</Label>
            <Input id="name" />
          </div>
          <div className="space-y-1">
            <Label htmlFor="title">Senha</Label>
            <Input id="title" />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col ">
          <Button className="mb-4 w-full">Login</Button>
          <div className="flex items-center justify-center mb-8">
            <Separator className="w-32 mr-2" />
            <p>OU</p>
            <Separator className="w-32 ml-2" />
          </div>
          <Button className="mb-4 w-full" variant={"outline"}>
            Google
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
