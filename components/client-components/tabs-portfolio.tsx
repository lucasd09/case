"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { PortfolioDialog } from "./dialogs/portfolio-dialog";

export function TabsPortfolio() {
  return (
    <Card>
      <CardHeader className="max-w-md">
        <CardTitle>Seu Portfolio</CardTitle>
        <CardDescription>
          Adicione trabalhos anteriores, não se esqueça de deixar essa aba
          atualizada
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2 max-w-md"></CardContent>
      <CardFooter className="flex justify-end ">
        <PortfolioDialog />
      </CardFooter>
    </Card>
  );
}
