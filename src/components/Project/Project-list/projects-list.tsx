"use client";

import { ProjectProps } from "@/src/types/project.types";
import { useEffect, useState } from "react";
import { useAtomValue } from "jotai";
import { SearchAtom } from "@/src/app/(app)/page";
import { ProjectCard } from "../project-card";
import { useRouter } from "next/navigation";

export function ProjectList() {
  const [list, setList] = useState<ProjectProps[]>([]);
  const search = useAtomValue(SearchAtom);
  const router = useRouter();

  useEffect(() => {
    fetch(`http://localhost:3000/api/projects?status=${search.status}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setList(data.data.reverse()));
  }, [search.status]);

  return (
    <div>
      <div
        className="flex-1 mt-4 grid gap-4  content-start"
        style={{
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
        }}
      >
        {list.map((project) => (
          <ProjectCard
            project={project}
            key={project.id}
            onClick={() => {
              router.push(`/project/${project.id}`);
            }}
          />
        ))}
      </div>
    </div>
  );
}
