"use client";
import { Label } from "../ui/label";
import { Switch } from "../ui/switch";
import { useTheme } from "next-themes";

export function ThemeSwitch() {
  const { setTheme, theme } = useTheme();

  return (
    <div className="flex items-center space-x-2">
      <Switch
        id="theme-switch"
        checked={theme == "dark"}
        onCheckedChange={() => {
          theme == "light" ? setTheme("dark") : setTheme("light");
        }}
      />
      <Label htmlFor="theme-switch">Tema Escuro</Label>
    </div>
  );
}
