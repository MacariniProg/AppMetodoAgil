"use client";

import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { ProjectProps } from "@/src/types/project.types";

export default function Project() {
  const { id } = useParams();
  const { data, isPending, error } = useQuery<ProjectProps>({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch(`http://localhost:3000/api/projects/${id}`)
        .then((res) => res.json())
        .then((data) => data.project),
  });
  if (isPending) return "Loading...";
  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="flex-1 flex gap-4 flex-col">
      <h2 className="text-3xl font-bold tracking-tight">Projeto {data.name}</h2>
    </div>
  );
}
