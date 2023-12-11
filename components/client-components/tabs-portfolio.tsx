"use client";
import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { PortfolioDialog } from "./dialogs/portfolio-dialog";
import { getPortfolios } from "@/app/services/axiosRequests";
import { Label } from "../ui/label";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";

export function TabsPortfolio() {
  const [portfolios, setPortfolios] = useState<PortofolioProps[]>([]);

  useEffect(() => {
    const fetchPortfolios = async () => {
      try {
        const portfoliosData = await getPortfolios();
        setPortfolios(portfoliosData ?? []);
      } catch (error) {
        console.error("Erro ao buscar portfolios:", error);
      }
    };
    fetchPortfolios();
  }, []);

  return (
    <Card>
      <CardHeader className="max-w-md">
        <CardTitle>Seu Portfolio</CardTitle>
        <CardDescription>
          Adicione trabalhos anteriores, não se esqueça de deixar essa aba
          atualizada
        </CardDescription>
      </CardHeader>
      <CardContent className="flex max-w-screen-lg">
        <ScrollArea>
          <div className="flex">
            {portfolios.map((portfolio) => (
              <Card key={portfolio.id} className="w-40">
                <CardHeader className="p-0 m-0 mb-2 ">
                  {portfolio.image}
                </CardHeader>
                <CardContent>
                  <Label>{portfolio.title}</Label>
                  <p className="text-sm">{portfolio.description}</p>
                </CardContent>
                <CardFooter>
                  <Label className="text-sm">
                    <a href={"https://" + portfolio.link} target="_blank">
                      {portfolio.link}
                    </a>
                  </Label>
                </CardFooter>
              </Card>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </CardContent>
      <CardFooter className="flex justify-end ">
        <PortfolioDialog />
      </CardFooter>
    </Card>
  );
}
