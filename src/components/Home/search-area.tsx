"use client";

import { SearchIcon } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useAtom } from "jotai";
import { SearchAtom } from "@/src/app/page";

export function SearchArea() {
  const [search, setSearch] = useAtom(SearchAtom);

  return (
    <div className="flex gap-4">
      <div className="relative w-64">
        <SearchIcon className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Pesquisar por nome do projeto"
          className="pl-8"
          onChange={(e) => setSearch({ ...search, search: e.target.value })}
        />
      </div>

      {arr.map((item) => (
        <Button
          key={item.value}
          className={`text-sm`}
          variant={item.value == search.status ? "default" : "secondary"}
          onClick={() => setSearch({ ...search, status: item.value })}
        >
          {item.name}
        </Button>
      ))}
    </div>
  );
}

const arr = [
  {
    name: "Em andamento",
    value: "in_progress",
  },
  {
    name: "Concluído",
    value: "finished",
  },
  {
    name: "Cancelado",
    value: "canceled",
  },
  {
    name: "Todos",
    value: "all",
  },
];
