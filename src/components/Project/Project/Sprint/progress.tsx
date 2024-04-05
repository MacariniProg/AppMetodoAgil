import { Progress } from "@/src/components/ui/progress";

export function SprintProgress() {
  return (
    <div>
      <div className="flex items-center justify-between mb-1">
        <p className="font-semibold">Progresso</p>
        <p className="text-sm">33%</p>
      </div>
      <Progress value={33} className="h-2" />
    </div>
  );
}
