"use client";

import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";

export default function Project() {
  const { id } = useParams();
  const { isPending, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch(`http://localhost:3000/api/projects/${id}`)
        .then((res) => res.json())
        .then((data) => data.project),
  });

  return <div>Project</div>;
}
