import { SprintHeader } from "./header";
import { SprintProgress } from "./progress";
import { SprintTasks } from "./tasks";

export function Sprint() {
  return (
    <div className="space-y-2">
      <SprintHeader />
      <SprintProgress />
      <SprintTasks />
    </div>
  );
}
