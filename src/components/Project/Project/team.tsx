import { UserInProjectProps } from "@/src/types/user.types";
import { AnimatedTooltip } from "../../ui/animated-tooltip";
import { UserPlusIcon } from "lucide-react";

export function Team({ users }: { users: UserInProjectProps[] }) {
  return (
    <div>
      <h3 className="font-semibold">Time</h3>
      <div className="flex">
        <AnimatedTooltip
          items={users.map((user) => ({
            id: user.userId,
            name: user.user.name,
            designation: user.role,
            image: "https://placebear.com/g/200/200",
          }))}
          imageDimensions={50}
        />
        <div className="h-[55px] px-4 border hover:border-primary rounded-full flex items-center justify-center transition-all ml-8 gap-2 cursor-pointer">
          <UserPlusIcon size={24} />
          <p>Novo usuário</p>
        </div>
      </div>
    </div>
  );
}
