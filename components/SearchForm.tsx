import { Search } from "lucide-react";
import Form from "next/form";
import ResetBtn from "./ResetBtn";
import { Button } from "./ui/button";

export default function SearchForm({ query }: { query?: string }) {
  return (
    <Form
      action="/"
      scroll={false}
      className="flex flex-nowrap items-center bg-white gap-2 pl-4 pr-2 rounded-full w-full search-form"
    >
      <input
        type="text"
        name="query"
        defaultValue={query}
        className="flex-1 text-black border-none outline-none"
        placeholder="Search here..."
      />
      {query && <ResetBtn />}
      <Button
        className="rounded-full h-10 w-10 my-1 hover:bg-gray-700 cursor-pointer"
        type="submit"
      >
        <Search className="size-5" />
      </Button>
    </Form>
  );
}
