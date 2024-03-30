"use client";

import { HomeIcon, LogOutIcon, User2Icon } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";

export function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="w-14 h-full overflow-hidden flex flex-col  text-primary items-center border-r-2">
      <div className="size-14 flex items-center justify-center border-b">
        <p>Logo</p>
      </div>

      {arr.map((item) => (
        <div
          className={`w-full py-3 flex justify-center cursor-pointer hover:bg-primary hover:text-neutral-50 transition-all
          ${pathname === item.link ? "bg-primary text-neutral-50" : ""} `}
          key={item.name}
          onClick={() => router.push(item.link)}
        >
          {item.icon}
        </div>
      ))}

      <div className="w-full py-3 flex justify-center mt-auto cursor-pointer hover:bg-primary hover:text-neutral-50 transition-all">
        <LogOutIcon />
      </div>
    </div>
  );
}

const arr = [
  {
    name: "Home",
    icon: <HomeIcon />,
    link: "/",
  },
  {
    name: "Users",
    icon: <User2Icon />,
    link: "/users",
  },
];
