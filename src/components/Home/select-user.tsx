"use client";

import { PlusIcon } from "lucide-react";
import { Label } from "../ui/label";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogHeader,
  DialogClose,
} from "../ui/dialog";
import { useEffect, useState } from "react";
import { UserCard } from "../Users/user-card";
import { Button } from "../ui/button";
import Image from "next/image";

type userProps = {
  id: number;
  name: string;
  office: string;
};

export function SelectUser({
  user,
  onChange,
  title,
}: {
  user?: userProps;
  onChange: (user: userProps) => void;
  title: string;
}) {
  const [users, setUsers] = useState<userProps[]>([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    getUsers().then((data) => setUsers(data.data));
  }, []);

  const getUsers = async () => {
    const res = await fetch("http://localhost:3000/api/user", {
      method: "GET",
    });
    const data: { data: userProps[] } = await res.json();
    return data;
  };

  return (
    <div className="flex-1 flex flex-col gap-2">
      <Label>{title}</Label>

      <Dialog open={open} onOpenChange={setOpen}>
        <div className="flex w-full bg-red-400">
          <DialogTrigger>
            <div className="h-16 w-16 rounded-full border flex items-center justify-center text-stone-600 hover:border-primary cursor-pointer transition-all overflow-hidden">
              {user?.id ? (
                <Image
                  src="https://placebear.com/200/200"
                  alt="User"
                  width={90}
                  height={90}
                />
              ) : (
                <PlusIcon />
              )}
            </div>
          </DialogTrigger>

          {user?.id && (
            <div>
              <h3 className="font-semibold">{user.name}</h3>
            </div>
          )}
        </div>

        <DialogContent className="!w-[600px]">
          <DialogHeader>
            <DialogTitle>Selecione o {title}</DialogTitle>
          </DialogHeader>
          <div
            className="flex-1 grid gap-4 items-baseline content-start max-h-[40vh] overflow-y-auto pb-6"
            style={{
              gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            }}
          >
            {users.map((user) => (
              <UserCard
                key={user.id}
                user={user}
                onClick={() => {
                  onChange(user);
                  setOpen(false);
                }}
              />
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
