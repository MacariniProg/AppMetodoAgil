import { UserProps } from "@/src/types/user.types";
import Image from "next/image";

//Extends div props
interface UserCardProps extends React.HTMLAttributes<HTMLDivElement> {
  user: UserProps;
  selected?: boolean;
  notSelectable?: boolean;
}

export function UserCard({
  user,
  selected,
  notSelectable,
  ...props
}: UserCardProps) {
  const UserOffice = (office: string) => {
    const obj = {
      front: {
        color: "bg-blue-500",
        text: "Front-end",
      },
      back: {
        color: "bg-green-500",
        text: "Back-end",
      },
      fullstack: {
        color: "bg-yellow-500",
        text: "Fullstack",
      },
      QA: {
        color: "bg-red-500",
        text: "QA",
      },
      design: {
        color: "bg-pink-500",
        text: "Design",
      },
    };

    if (!obj[office as keyof typeof obj]) return obj.front;
    return obj[office as keyof typeof obj];
  };

  return (
    <div
      className={`border rounded-2xl px-2 py-3 flex gap-2 items-center cursor-pointer ${
        !notSelectable && "hover:border-primary"
      } transition-colors ${selected ? "border-primary" : ""}`}
      {...props}
    >
      <div className="rounded-full overflow-hidden border h-10 w-10">
        <Image
          src="https://placebear.com/200/200"
          alt="User"
          width={40}
          height={40}
        />
      </div>

      <div className="overflow-hidden flex-1">
        <h3 className="font-semibold text-left">{user.name}</h3>
        <div className="text-xs flex justify-between items-start w-full">
          <p className="opacity-90">{user.projects?.length} Projetos</p>

          <div
            className={`${
              UserOffice(user.office).color
            } rounded-full px-2 text-neutral-50`}
          >
            {UserOffice(user.office).text}
          </div>
        </div>
      </div>
    </div>
  );
}
