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
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpRequest } from "@/app/services/axiosRequests";
import { useRouter } from "next/navigation";

const schema = z
  .object({
    email: z.string().email({ message: "Por favor, insira um e-mail válido" }),
    password: z
      .string()
      .min(6, { message: "A senha deve ter no mínimo 6 caracteres" }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
  });

type formRegister = z.infer<typeof schema>;

export default function FormRegister() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formRegister>({ resolver: zodResolver(schema) });
  const router = useRouter();

  async function handleRegister({ email, password }: formRegister) {
    const res = await signUpRequest({ email, password });

    if (res) {
      router.push("/create");
    }
  }

  return (
    <form onSubmit={handleSubmit(handleRegister)}>
      <Card className="m-16">
        <CardHeader className="max-w-md">
          <CardTitle>Cadastre-se gratuitamente</CardTitle>
          <CardDescription>
            Insira seus dados para continuar seu cadastro
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2 max-w-md text-left">
          <div className="space-y-1">
            <Label htmlFor="name">Email</Label>
            <Input id="name" {...register("email")} />
            {errors.email && (
              <span className="text-red-500 text-xs">
                {errors.email.message}
              </span>
            )}
          </div>
          <div className="space-y-1">
            <Label htmlFor="password">Senha</Label>
            <Input id="password" {...register("password")} type="password" />
            {errors.password && (
              <span className="text-red-500 text-xs">
                {errors.password.message}
              </span>
            )}
          </div>
          <div className="space-y-1">
            <Label htmlFor="confirmPassword">Confirmar senha</Label>
            <Input
              id="confirmPassword"
              {...register("confirmPassword")}
              type="password"
            />
            {errors.confirmPassword && (
              <span className="text-red-500 text-xs">
                {errors.confirmPassword.message}
              </span>
            )}
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
    </form>
  );
}
