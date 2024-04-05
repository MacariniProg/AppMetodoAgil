"use client";

import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { ProjectProps } from "@/src/types/project.types";
import { Team } from "@/src/components/Project/Project/team";
import { Sprint } from "@/src/components/Project/Project/Sprint";

export default function Project() {
  const { id } = useParams();
  const {
    data: project,
    isPending,
    error,
  } = useQuery<ProjectProps>({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch(`http://localhost:3000/api/projects/${id}`)
        .then((res) => res.json())
        .then((data) => data.project),
  });
  if (isPending) return "Loading...";
  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="flex-1 flex gap-4 flex-col overflow-hidden">
      <h2 className="text-3xl font-bold tracking-tight">
        Projeto {project.name}
      </h2>
      <div className="flex-1 gap-2 flex overflow-hidden">
        <div className="flex-[2] border-r pr-2  flex flex-col overflow-hidden">
          <Team users={project.users} />
          <Sprint />
        </div>
        <div className="flex-1 ">b</div>
      </div>
    </div>
  );
}
