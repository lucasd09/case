"use client";
import axiosClient from "@/app/services/axiosClient";
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
import useAuthStore from "@/app/stores/authStore";

const schema = z.object({
  email: z.string().email(),
  password: z.string(),
});

type formLogin = z.infer<typeof schema>;

async function handleLogin(data: formLogin) {
  const res = await axiosClient.post("/login", data);

  if (res.status === 200) {
    const token = res.data.access_token;
    useAuthStore.getState().setAccessToken(token);

    //console.log(useAuthStore.getState().accessToken);
  }
}

export default function FormLogin() {
  const { register, handleSubmit } = useForm<formLogin>({});
  return (
    <form onSubmit={handleSubmit(handleLogin)}>
      <Card className="m-16">
        <CardHeader className="max-w-md">
          <CardTitle>Login</CardTitle>
          <CardDescription>Faça login em sua conta</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2 max-w-md text-left">
          <div className="space-y-1">
            <Label htmlFor="email">Email</Label>
            <Input id="email" {...register("email")} />
          </div>
          <div className="space-y-1">
            <Label htmlFor="password">Senha</Label>
            <Input id="password" {...register("password")} type="password" />
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
