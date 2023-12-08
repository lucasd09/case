"use-client";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { TabsGeneral } from "./tabs-general";
import { TabsPortfolio } from "./tabs-portfolio";

export default function TabsCreate() {
  return (
    <Tabs defaultValue="general" className=" m-4">
      <TabsList className="w-full flex justify-start">
        <TabsTrigger value="general">Dados Gerais</TabsTrigger>
        <TabsTrigger value="socialmedia">Redes Sociais</TabsTrigger>
        <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
        <TabsTrigger value="links">Links adicionais</TabsTrigger>
        <TabsTrigger value="customization">Customização do link</TabsTrigger>
      </TabsList>
      <TabsContent value="general">
        <TabsGeneral />
      </TabsContent>
      <TabsContent value="socialmedia">
        <Card className="w-full">
          <CardHeader className="max-w-md">
            <CardTitle>Redes Sociais</CardTitle>
            <CardDescription>
              Adicione suas redes sociais para contato
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2 max-w-md">
            <div className="space-x-1 flex items-center">
              <Label htmlFor="instagram">Instagram</Label>
              <Input id="name" placeholder="lucas.dalan" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Salvar</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="portfolio">
        <TabsPortfolio />
      </TabsContent>
      <TabsContent value="links">
        <Card>
          <CardHeader className="max-w-md">
            <CardTitle>Links Adicionais</CardTitle>
            <CardDescription>
              Adicione aqui sites, ou qualquer link que possa ser de interesse
              seu
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2 max-w-md"></CardContent>
          <CardFooter></CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="customization">
        <Card>
          <CardHeader className="max-w-md">
            <CardTitle>Customização do Link</CardTitle>
            <CardDescription>
              Selecione uma URL personalizada, caso ela esteja disponível, ela
              será sua!
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2 max-w-md"></CardContent>
          <CardFooter></CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
