import { ProjectProps } from "@/src/types/project.types";
import { Progress } from "../ui/progress";
import { AnimatedTooltip } from "../ui/animated-tooltip";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../ui/card";

interface ProjectCardProps extends React.HTMLAttributes<HTMLDivElement> {
  project: ProjectProps;
}

export function ProjectCard({ project, ...props }: ProjectCardProps) {
  return (
    <Card {...props} className="hover:border-primary cursor-pointer">
      <CardHeader className="pb-1">
        <CardTitle>{project.name}</CardTitle>
        <CardDescription className="overflow-hidden text-dots">
          {project.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
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
      </CardContent>
    </Card>
  );
}
