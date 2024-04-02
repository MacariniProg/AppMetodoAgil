import { PlusCircleIcon } from "lucide-react";
import { Button } from "../../ui/button";
import { SheetTrigger, Sheet } from "../../ui/sheet";
import { CreateNewProject } from "../Create-new-project/create-new-project";

export function Header() {
  return (
    <div className="flex items-center justify-between space-y-2">
      <h2 className="text-3xl font-bold tracking-tight">Projetos</h2>

      <Sheet>
        <SheetTrigger asChild>
          <Button>
            <PlusCircleIcon className="mr-2 h-4 w-4" />
            Novo projeto
          </Button>
        </SheetTrigger>

        <CreateNewProject />
      </Sheet>
    </div>
  );
}
