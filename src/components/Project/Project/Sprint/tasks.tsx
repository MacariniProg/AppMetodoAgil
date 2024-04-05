import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/src/components/ui/accordion";
import { AnimatedTooltip } from "@/src/components/ui/animated-tooltip";
import { ScrollArea } from "@/src/components/ui/scroll-area";
import { Tabs, TabsList, TabsTrigger } from "@/src/components/ui/tabs";
import { UserBaseProps } from "@/src/types/user.types";
import {
  CircleCheckIcon,
  CircleDashedIcon,
  CircleMinusIcon,
  CircleX,
} from "lucide-react";

export function SprintTasks() {
  const subtitleStatus = (status: string) => {
    const obj = {
      complete: <CircleCheckIcon className="text-green-500" />,
      "in-progress": <CircleDashedIcon className="text-blue-500" />,
      blocked: <CircleMinusIcon className="text-yellow-500" />,
      canceled: <CircleX className="text-red-500" />,
    };
    if (!obj[status as keyof typeof obj]) return null;
    return obj[status as keyof typeof obj];
  };

  return (
    <>
      <div className="flex items-center justify-between mt-4">
        <p className="font-semibold text-xl">Tarefas</p>

        <Tabs defaultValue="all">
          <TabsList>
            <TabsTrigger value="all">Todos</TabsTrigger>
            <TabsTrigger value="myTasks">Minhas tarefas</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <ScrollArea className="flex-1 pr-2">
        <Accordion type="single" collapsible className="w-full">
          {tasks.map((task, index) => (
            <AccordionItem value={index.toString()} key={index}>
              <AccordionTrigger>
                <div className="flex-1 flex gap-1 items-center">
                  <AnimatedTooltip
                    items={task.responsable.map((user) => ({
                      id: user.id,
                      name: user.name,
                      designation: user.office,
                      image: "https://placebear.com/g/200/200",
                    }))}
                    imageDimensions={35}
                  />
                  <p className="ml-6">{task.name}</p>
                </div>
                <div className="mr-2">{subtitleStatus(task.status)}</div>
              </AccordionTrigger>
              <AccordionContent>{task.history}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </ScrollArea>
    </>
  );
}

const tasks: {
  id: number;
  responsable: UserBaseProps[];
  name: string;
  status: "complete" | "in-progress" | "blocked" | "canceled";
  history: string; //a long string that explains what must be done in the task
}[] = [
  {
    responsable: [
      {
        id: 1,
        name: "John Doe",
        office: "Frontend",
      },
      {
        id: 2,
        name: "Joana Doe",
        office: "Backend",
      },
    ],
    name: "Create the project structure",
    status: "complete",
    id: 1,
    history:
      "For this task, you must create the project structure using the following technologies: React, Typescript, and TailwindCSS",
  },
  {
    responsable: [
      {
        id: 2,
        name: "Jane Doe",
        office: "Backend",
      },
    ],
    name: "Create the database structure",
    status: "in-progress",
    id: 2,
    history:
      "For this task, you must create the database structure using the following technologies: PostgreSQL, TypeORM, and NodeJS",
  },
  {
    responsable: [
      {
        id: 3,
        name: "John Doe",
        office: "Frontend",
      },
    ],
    name: "Create the login page",
    status: "blocked",
    id: 3,
    history:
      "For this task, you must create the login page using the following technologies: React, Typescript, and TailwindCSS",
  },
  {
    responsable: [
      {
        id: 4,
        name: "Jane Doe",
        office: "Backend",
      },
    ],
    name: "Create the authentication system",
    status: "canceled",
    id: 4,
    history:
      "For this task, you must create the authentication system using the following technologies: PostgreSQL, TypeORM, and NodeJS",
  },
  {
    responsable: [
      {
        id: 1,
        name: "John Doe",
        office: "Frontend",
      },
      {
        id: 2,
        name: "Joana Doe",
        office: "Backend",
      },
    ],
    name: "Create the project structure",
    status: "complete",
    id: 1,
    history:
      "For this task, you must create the project structure using the following technologies: React, Typescript, and TailwindCSS",
  },
  {
    responsable: [
      {
        id: 2,
        name: "Jane Doe",
        office: "Backend",
      },
    ],
    name: "Create the database structure",
    status: "in-progress",
    id: 2,
    history:
      "For this task, you must create the database structure using the following technologies: PostgreSQL, TypeORM, and NodeJS",
  },
  {
    responsable: [
      {
        id: 3,
        name: "John Doe",
        office: "Frontend",
      },
    ],
    name: "Create the login page",
    status: "blocked",
    id: 3,
    history:
      "For this task, you must create the login page using the following technologies: React, Typescript, and TailwindCSS",
  },
  {
    responsable: [
      {
        id: 4,
        name: "Jane Doe",
        office: "Backend",
      },
    ],
    name: "Create the authentication system",
    status: "canceled",
    id: 4,
    history:
      "For this task, you must create the authentication system using the following technologies: PostgreSQL, TypeORM, and NodeJS",
  },
  {
    responsable: [
      {
        id: 1,
        name: "John Doe",
        office: "Frontend",
      },
      {
        id: 2,
        name: "Joana Doe",
        office: "Backend",
      },
    ],
    name: "Create the project structure",
    status: "complete",
    id: 1,
    history:
      "For this task, you must create the project structure using the following technologies: React, Typescript, and TailwindCSS",
  },
  {
    responsable: [
      {
        id: 2,
        name: "Jane Doe",
        office: "Backend",
      },
    ],
    name: "Create the database structure",
    status: "in-progress",
    id: 2,
    history:
      "For this task, you must create the database structure using the following technologies: PostgreSQL, TypeORM, and NodeJS",
  },
  {
    responsable: [
      {
        id: 3,
        name: "John Doe",
        office: "Frontend",
      },
    ],
    name: "Create the login page",
    status: "blocked",
    id: 3,
    history:
      "For this task, you must create the login page using the following technologies: React, Typescript, and TailwindCSS",
  },
  {
    responsable: [
      {
        id: 4,
        name: "Jane Doe",
        office: "Backend",
      },
    ],
    name: "Create the authentication system",
    status: "canceled",
    id: 4,
    history:
      "For this task, you must create the authentication system using the following technologies: PostgreSQL, TypeORM, and NodeJS",
  },
];
