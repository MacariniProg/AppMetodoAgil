import { atom } from "jotai";
import { Header } from "../components/Home/header";
import { SearchArea } from "../components/Home/search-area";

export const SearchAtom = atom({
  search: "",
  status: "in_progress",
});

export default function Home() {
  return (
    <div className="flex-1 flex gap-4 flex-col">
      <Header />
      <SearchArea />
    </div>
  );
}
