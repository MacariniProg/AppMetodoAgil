import { UserCard } from "@/src/components/Users/user-card";

export default function Users() {
  return (
    <>
      <h2 className="text-3xl font-bold tracking-tight">Usuários</h2>
      <div
        className="flex-1 mt-4 grid gap-4 items-baseline content-start"
        style={{
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
        }}
      >
        <UserCard />
      </div>
    </>
  );
}
