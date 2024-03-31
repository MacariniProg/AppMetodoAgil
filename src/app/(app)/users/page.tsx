import { UserCard } from "@/src/components/Users/user-card";
import { UserProps } from "@/src/types/user.types";

export default async function Users() {
  const res = await fetch("http://localhost:3000/api/user", {
    method: "GET",
  });
  const data: { data: UserProps[] } = await res.json();

  return (
    <>
      <h2 className="text-3xl font-bold tracking-tight">Usuários</h2>
      <div
        className="flex-1 mt-4 grid gap-4 items-baseline content-start"
        style={{
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
        }}
      >
        {data.data.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </>
  );
}
