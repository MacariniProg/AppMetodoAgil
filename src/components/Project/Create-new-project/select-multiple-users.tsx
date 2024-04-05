"use client";

import { FieldError } from "react-hook-form";
import { LabelWithError } from "../../ui/label-with-error";
import { Button } from "../../ui/button";
import { PlusIcon } from "lucide-react";
import { UserProps } from "@/src/types/user.types";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogHeader,
} from "../../ui/dialog";
import { UserCard } from "../../Users/user-card";
import { ScrollArea } from "../../ui/scroll-area";

export function SelectMultipleUsers({
  onChange,
  error,
}: {
  onChange: (ids: number[]) => void;
  error: FieldError | undefined | any;
}) {
  const [selecteds, setSelecteds] = useState<UserProps[]>([]);
  const [users, setUsers] = useState<UserProps[]>([]);

  useEffect(() => {
    getUsers().then((data) => setUsers(data.data));
  }, []);

  useEffect(() => {
    onChange(selecteds.map((selected) => selected.id));
  }, [selecteds]);

  const getUsers = async () => {
    const res = await fetch("http://localhost:3000/api/user", {
      method: "GET",
    });
    const data: { data: UserProps[] } = await res.json();
    return data;
  };

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      <div className="flex justify-between items-end     gap-4">
        <LabelWithError htmlFor="devs" title="DEVS" error={error} />

        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="sm" type="button">
              <PlusIcon className="h-4 w-4" />
              Adicionar dev
            </Button>
          </DialogTrigger>

          <DialogContent className="!w-[600px]">
            <DialogHeader>
              <DialogTitle>Selecione os devs</DialogTitle>
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
                    selecteds.some((selected) => selected.id === user.id)
                      ? setSelecteds(
                          selecteds.filter(
                            (selected) => selected.id !== user.id
                          )
                        )
                      : setSelecteds([...selecteds, user]);
                  }}
                  selected={selecteds.some(
                    (selected) => selected.id === user.id
                  )}
                />
              ))}
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <ScrollArea>
        <div
          className="flex-1 grid gap-4 items-baseline content-start max-h-[40vh] overflow-y-auto pb-6 mt-4"
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          }}
        >
          {selecteds.map((user) => (
            <div className="relative" key={user.id}>
              <div
                className="absolute right-1 top-1  rounded-full h-5 w-5 text-xs flex items-center justify-center cursor-pointer hover:border"
                onClick={() => {
                  setSelecteds(
                    selecteds.filter((selected) => selected.id !== user.id)
                  );
                }}
              >
                x
              </div>
              <UserCard user={user} notSelectable />
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
