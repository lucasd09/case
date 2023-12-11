"use client";
import { z } from "zod";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { getCase, updateCase } from "@/app/services/axiosRequests";
import { useState, useEffect } from "react";

const generalSchema = z.object({
  name: z.string(),
  title: z.string(),
  bio: z.string(),
});

type generalForm = z.infer<typeof generalSchema>;

export function TabsGeneral() {
  const [profile, setProfile] = useState<CaseProps>();
  const { register, handleSubmit } = useForm<generalForm>({
    resolver: zodResolver(generalSchema),
  });

  async function handleForm({ name, title, bio }: generalForm) {
    const updatedData = await updateCase({ name, title, bio });
  }
  useEffect(() => {
    const fetchCase = async () => {
      try {
        const profile = await getCase();
        setProfile(profile ?? undefined);
      } catch (error) {
        console.error("Erro ao buscar profile:", error);
      }
    };
    fetchCase();
  });
  return (
    <form onSubmit={handleSubmit(handleForm)}>
      <Card>
        <CardHeader className="max-w-md">
          <CardTitle>Dados gerais</CardTitle>
          <CardDescription>
            Faça alterações em seus dados para que eles estejam sempre
            atualizados. Não se esqueça de salvar após as alterações.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2 max-w-md">
          <div className="space-y-1">
            <Label htmlFor="name">Nome</Label>
            <Input
              id="name"
              {...register("name")}
              defaultValue={profile?.name}
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="title">Título</Label>
            <Input
              id="title"
              {...register("title")}
              defaultValue={profile?.title}
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="bio">Bio</Label>
            <Textarea
              placeholder="Escreva um pouco sobre você."
              {...register("bio")}
              defaultValue={profile?.bio}
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit">Salvar</Button>
        </CardFooter>
      </Card>
    </form>
  );
}
