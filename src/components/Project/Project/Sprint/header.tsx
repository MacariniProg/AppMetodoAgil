import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { pt } from "date-fns/locale";
import { Button } from "@/src/components/ui/button";

export function SprintHeader() {
  return (
    <div className="flex items-center justify-between">
      <h2 className="text-2xl font-semibold">Sprint 4</h2>
      <div>
        <Button variant={"outline"} size="sm">
          <CalendarIcon className="mr-2 h-4 w-4" />
          {format(new Date(), "dd MMM, yyyy", { locale: pt })} -{" "}
          {format(new Date(), "dd MMM, yyyy", { locale: pt })}
        </Button>
      </div>
    </div>
  );
}
