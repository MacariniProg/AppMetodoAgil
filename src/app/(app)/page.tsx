import { atom } from "jotai";
import { Header } from "../../components/Project/header";
import { SearchArea } from "../../components/Project/search-area";
import { ProjectList } from "@/src/components/Project/projects-list";

export const SearchAtom = atom({
  search: "",
  status: "in_progress",
});

export default function Home() {
  return (
    <div className="flex-1 flex gap-4 flex-col">
      <Header />
      <SearchArea />
      <ProjectList />
    </div>
  );
}
