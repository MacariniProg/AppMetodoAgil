import { ProjectProps } from "@/src/types/project.types";
import { Progress } from "../ui/progress";
import { AnimatedTooltip } from "../ui/animated-tooltip";

interface ProjectCardProps extends React.HTMLAttributes<HTMLDivElement> {
  project: ProjectProps;
}

export function ProjectCard({ project, ...props }: ProjectCardProps) {
  return (
    <div
      className="border rounded-2xl px-2 py-3 cursor-pointer hover:border-primary transition-colors"
      {...props}
    >
      <h2 className="font-semibold text-lg">{project.name}</h2>
      <p className="text-xs overflow-hidden text-dots">{project.description}</p>
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
  );
}
