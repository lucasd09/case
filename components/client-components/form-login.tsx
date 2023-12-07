"use client";
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
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { signInRequest } from "@/app/services/axiosRequests";
import { useState } from "react";

const schema = z.object({
  email: z.string().email(),
  password: z.string(),
});

type formLogin = z.infer<typeof schema>;

export default function FormLogin() {
  const [login, setLogin] = useState<boolean>(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formLogin>({});
  const router = useRouter();

  async function handleLogin({ email, password }: formLogin) {
    const res = await signInRequest({ email, password });

    if (res) {
      router.push("/create");
    }
    setLogin(false);
  }

  return (
    <form onSubmit={handleSubmit(handleLogin)}>
      <Card className="m-16">
        <CardHeader className="max-w-md">
          <CardTitle>Login</CardTitle>
          <CardDescription>Faça login em sua conta</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2 max-w-md text-left">
          <div className="space-y-1">
            <Label htmlFor="email" className={!login ? "text-red-500" : ""}>
              Email
            </Label>
            <Input id="email" {...register("email")} />
            {!login && (
              <span className="text-red-500 text-xs">
                Email ou senha inválidos
              </span>
            )}
          </div>
          <div className="space-y-1">
            <Label htmlFor="password" className={!login ? "text-red-500" : ""}>
              Senha
            </Label>
            <Input id="password" {...register("password")} type="password" />
            {!login && (
              <span className="text-red-500 text-xs">
                Email ou senha inválidos
              </span>
            )}
          </div>
        </CardContent>
        <CardFooter className="flex flex-col ">
          <Button className="mb-4 w-full" type="submit">
            Login
          </Button>
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
    </form>
  );
}
