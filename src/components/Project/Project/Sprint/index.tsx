import { SprintHeader } from "./header";
import { SprintProgress } from "./progress";
import { SprintTasks } from "./tasks";

export function Sprint() {
  return (
    <div className="flex-1 flex flex-col gap-1 overflow-hidden">
      <SprintHeader />
      <SprintProgress />
      <SprintTasks />
    </div>
  );
}
