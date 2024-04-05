"use client";

import { SearchIcon } from "lucide-react";
import { Input } from "../../ui/input";
import { useAtom } from "jotai";
import { SearchAtom } from "@/src/app/(app)/page";
import { Tabs, TabsList, TabsTrigger } from "@/src/components/ui/tabs";

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

      <Tabs defaultValue="inProgress">
        <TabsList>
          {arr.map((item) => (
            <TabsTrigger
              key={item.value}
              value={item.value}
              onClick={() => setSearch({ ...search, status: item.value })}
            >
              {item.name}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  );
}

const arr = [
  {
    name: "Em andamento",
    value: "inProgress",
  },
  {
    name: "Concluído",
    value: "completed",
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
