"use client";

import { ProjectProps } from "@/src/types/project.types";
import { Progress } from "../ui/progress";
import { AnimatedTooltip } from "../ui/animated-tooltip";
import { useEffect, useState } from "react";
import { useAtomValue } from "jotai";
import { SearchAtom } from "@/src/app/(app)/page";

export function ProjectList() {
  const [list, setList] = useState<ProjectProps[]>([]);
  const search = useAtomValue(SearchAtom);

  useEffect(() => {
    fetch(`http://localhost:3000/api/projects?status=${search.status}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setList(data.data.reverse()));
  }, [search.status]);

  return (
    <div>
      {/* {data.data.map((project) => (
        <p>{project.name}</p>
      ))} */}
      <div
        className="flex-1 mt-4 grid gap-4 items-baseline content-start"
        style={{
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
        }}
      >
        {list.map((project) => (
          <div className="border rounded-2xl px-2 py-3 cursor-pointer hover:border-primary transition-colors">
            <h2 className="font-semibold text-lg">{project.name}</h2>
            <p className="text-xs overflow-hidden text-dots">
              {project.description}
            </p>
            <p className="mt-2 text-sm">Sprint 1</p>
            <div className="flex gap-2 items-center text-xs">
              <Progress value={33} className="h-2" />
              33%
            </div>
            <p className="mt-2 text-sm">Time</p>
            <div className="flex">
              <AnimatedTooltip
                items={project.users.map((user) => ({
                  id: user.userId,
                  name: user.user.name,
                  designation: user.role,
                  image: "https://placebear.com/g/200/200",
                }))}
                imageDimensions={50}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
