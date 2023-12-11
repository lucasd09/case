"use client";
import { addPortfolio, getCase } from "@/app/services/axiosRequests";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import { Plus } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  title: z.string(),
  description: z.string(),
  image: z.string(),
  link: z.string(),
});

type formPortfolio = z.infer<typeof schema>;

export function PortfolioDialog() {
  const { register, handleSubmit, control } = useForm<formPortfolio>({
    resolver: zodResolver(schema),
    defaultValues: {
      image: undefined,
    },
  });

  async function handleForm({
    description,
    image,
    link,
    title,
  }: formPortfolio) {
    try {
      const caseUser = await getCase();
      const caseId = caseUser?.id;

      if (caseId) {
        const portfolio = await addPortfolio({
          caseId,
          description,
          image,
          link,
          title,
        });

        return portfolio;
      }
    } catch {
      console.log("deu erro");
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default">
          <Plus />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit(handleForm)}>
          <DialogHeader>
            <DialogTitle>Portfolio</DialogTitle>
            <DialogDescription>
              Adicione um item ou faça alterações no seu portfolio
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="title" className="text-right">
                Título
              </Label>
              <Input id="title" className="col-span-3" {...register("title")} />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Descrição
              </Label>
              <Input
                id="description"
                className="col-span-3"
                {...register("description")}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="image" className="text-right">
                Foto de capa
              </Label>
              <Controller
                name="image"
                control={control}
                render={({ field }) => (
                  <Input
                    id="image"
                    className="col-span-3"
                    type="file"
                    {...field}
                    value={field.value ?? ""}
                    accept="image/"
                  />
                )}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="link" className="text-right">
                Link (opcional)
              </Label>
              <Input id="link" className="col-span-3" {...register("link")} />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Salvar</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
