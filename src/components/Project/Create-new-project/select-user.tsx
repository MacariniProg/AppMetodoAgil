"use client";

import { PlusIcon } from "lucide-react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogHeader,
} from "../../ui/dialog";
import { useEffect, useState } from "react";
import { UserCard } from "../../Users/user-card";
import { FieldError } from "react-hook-form";
import { LabelWithError } from "../../ui/label-with-error";
import { UserProps } from "@/src/types/user.types";

export function SelectUser({
  onChange,
  title,
  error,
}: {
  onChange: (id: number) => void;
  title: string;
  error: FieldError | undefined;
}) {
  const [user, setUser] = useState<UserProps | null>(null);
  const [users, setUsers] = useState<UserProps[]>([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    getUsers().then((data) => setUsers(data.data));
  }, []);

  const getUsers = async () => {
    const res = await fetch("http://localhost:3000/api/user", {
      method: "GET",
    });
    const data: { data: UserProps[] } = await res.json();
    return data;
  };

  return (
    <div className="flex-1 flex flex-col gap-2">
      <LabelWithError error={error} htmlFor="user" title={title} />

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger>
          <div className="">
            {user?.id ? (
              <UserCard user={user} />
            ) : (
              <div className="h-16 w-16 rounded-full border flex items-center justify-center text-stone-600 hover:border-primary cursor-pointer transition-all overflow-hidden">
                <PlusIcon />
              </div>
            )}
          </div>
        </DialogTrigger>

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
                  setUser(user);
                  onChange(user.id);
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
