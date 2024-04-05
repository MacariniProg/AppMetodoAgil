import { Sidebar } from "@/src/components/layout/sidebar";

export default async function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-[100vh] w-[100vw] overflow-hidden ">
      <Sidebar />
      <div className="flex-1 flex flex-col px-6 py-4">{children}</div>
    </div>
  );
}
