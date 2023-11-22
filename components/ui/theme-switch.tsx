"use client";
import { Label } from "./label";
import { Switch } from "./switch";
import { useTheme } from "next-themes";

export function ThemeSwitch() {
  const { setTheme } = useTheme();

  return (
    <div className="flex items-center space-x-2">
      <Switch id="theme-switch" onCheckedChange={() => setTheme("light")} />
      <Label htmlFor="theme-switch">Tema Escuro</Label>
    </div>
  );
}
