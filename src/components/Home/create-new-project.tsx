"use client";

import { SheetContent, SheetHeader, SheetTitle } from "../ui/sheet";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { CalendarIcon } from "lucide-react";
import { format, isFuture, isToday } from "date-fns";
import { pt } from "date-fns/locale";
import { Calendar } from "../ui/calendar";
import { LabelWithError } from "../ui/label-with-error";

const newProjectSchema = z.object({
  name: z.string().min(1, "O nome do projeto é obrigatório"),
  description: z.string().min(1, "A descrição do projeto é obrigatória"),
  initialDate: z
    .string({
      required_error: "Obrigatório",
    })
    .refine(
      (value) => {
        return isToday(value) || isFuture(value);
      },
      {
        message: "A data não pode ser no passado",
      }
    ),
  endDate: z.string().optional(),
});

type NewProjectSchema = z.infer<typeof newProjectSchema>;

export function CreateNewProject() {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<NewProjectSchema>({
    resolver: zodResolver(newProjectSchema),
  });
  const initialDate = watch("initialDate");
  const endDate = watch("endDate");

  const onSubmit = (data: NewProjectSchema) => {
    console.log(data);

    // fetch('/api/projetos/create', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(projeto),
    // })
    // .then(response => response.json())
    // .then(data => setProjetos(prevProjetos => [...prevProjetos, data]));
  };

  return (
    <SheetContent className="w-[50vw] !max-w-[50vw] flex flex-col">
      <SheetHeader>
        <SheetTitle>Criar novo projeto</SheetTitle>
      </SheetHeader>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <div className="space-y-2">
          <LabelWithError
            htmlFor="name"
            title="Nome do projeto"
            error={errors.name}
          />
          <Input id="name" {...register("name")} />
        </div>
        <div className="space-y-2">
          <LabelWithError
            htmlFor="description"
            title="Descrição"
            error={errors.description}
          />
          <Input id="description" {...register("description")} />
        </div>

        <div className="flex gap-4">
          <div className="space-y-1 flex-1 flex flex-col">
            <LabelWithError
              htmlFor="initialDate"
              title="Data de início"
              error={errors.initialDate}
            />
            <Popover>
              <PopoverTrigger asChild>
                <Button variant={"outline"}>
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {initialDate ? (
                    format(initialDate, "PPP", { locale: pt })
                  ) : (
                    <span>Selecionar data</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  id="initialDate"
                  mode="single"
                  selected={new Date(initialDate)}
                  onDayClick={(e) => setValue("initialDate", e.toISOString())}
                  {...register("initialDate")}
                />
              </PopoverContent>
            </Popover>
          </div>

          <div className="space-y-1 flex-1 flex flex-col">
            <LabelWithError
              htmlFor="endDate"
              title="Data de termino"
              error={errors.endDate}
              optional
            />
            <Popover>
              <PopoverTrigger asChild>
                <Button variant={"outline"}>
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {endDate ? (
                    format(endDate, "PPP", { locale: pt })
                  ) : (
                    <span>Selecionar data</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  id="endDate"
                  mode="single"
                  selected={endDate ? new Date(endDate) : new Date()}
                  onDayClick={(e) => setValue("endDate", e.toISOString())}
                  {...register("endDate")}
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>

        <Button>Criar projeto</Button>
      </form>
    </SheetContent>
  );
}
