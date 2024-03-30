import Image from "next/image";

export function UserCard() {
  const UserOffice = () => {
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
  };

  return (
    <div className="border rounded-2xl px-2 py-3 flex gap-2 items-center cursor-pointer hover:border-primary transition-colors">
      <div className="rounded-full overflow-hidden border h-10 w-10">
        <Image
          src="https://placebear.com/200/200"
          alt="User"
          width={40}
          height={40}
        />
      </div>

      <div className="overflow-hidden">
        <h3 className="font-semibold">John Doe</h3>
        <div className="flex justify-between items-start">
          <p className="text-xs opacity-90">32 Projetos</p>
        </div>
      </div>
    </div>
  );
}
