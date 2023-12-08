"use client";
import { useState } from "react";
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

export function TabsPortfolio() {
  const [dialog, setDialog] = useState(false);

  return (
    <Card>
      <CardHeader className="max-w-md">
        <CardTitle>Seu Portfolio</CardTitle>
        <CardDescription>
          Adicione trabalhos anteriores, não se esqueça de deixar essa aba
          atualizada
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2 max-w-md">
        {dialog && <div>alo</div>}
      </CardContent>
      <CardFooter>
        <Button
          onClick={() => {
            setDialog(true);
          }}
        >
          Adicionar
        </Button>
      </CardFooter>
    </Card>
  );
}
