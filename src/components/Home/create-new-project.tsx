"use client";

import { SheetContent, SheetHeader, SheetTitle } from "../ui/sheet";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const newProjectSchema = z.object({
  // initialDate: z.string().datetime(),
  // endDate: z.string().datetime(),
  name: z.string().min(1, "O nome do projeto é obrigatório"),
  description: z.string(),
});

type NewProjectSchema = z.infer<typeof newProjectSchema>;

export function CreateNewProject() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewProjectSchema>({
    resolver: zodResolver(newProjectSchema),
  });

  const onSubmit = (data: NewProjectSchema) => {
    console.log(data);
  };

  return (
    <SheetContent className="w-[50vw] !max-w-[50vw] flex flex-col">
      <SheetHeader>
        <SheetTitle>Criar novo projeto</SheetTitle>
      </SheetHeader>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">Nome do projeto</Label>
          <Input id="name" required {...register("name")} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="description">Descrição</Label>
          <Input id="description" required {...register("description")} />
        </div>

        <Button>Criar projeto</Button>
      </form>
    </SheetContent>
  );
}
