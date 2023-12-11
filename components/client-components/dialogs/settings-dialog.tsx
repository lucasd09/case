import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { Settings } from "lucide-react";

export function SettingsDialog() {
  return (
    <Dialog>
      <DialogTrigger className="flex">
        <Settings className="mr-2 h-4 w-4" />
        <span>Configurações</span>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Configurações</DialogTitle>
          <Separator />
        </DialogHeader>
        <DialogFooter></DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
