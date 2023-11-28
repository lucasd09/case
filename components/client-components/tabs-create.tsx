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
import { Textarea } from "../ui/textarea";

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
              <Input id="name" placeholder="Lucas Dalan" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="title">Título</Label>
              <Input id="title" placeholder="Software Developer" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="bio">Bio</Label>
              <Textarea placeholder="Escreva um pouco sobre você." />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Salvar</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="socialmedia">
        <Card className="w-full">
          <CardHeader className="max-w-md">
            <CardTitle>Redes Sociais</CardTitle>
            <CardDescription>texto</CardDescription>
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
    </Tabs>
  );
}
