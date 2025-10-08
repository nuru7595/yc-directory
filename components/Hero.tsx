import { Search, X } from "lucide-react";

export default function Hero() {
  return (
    <div className="section-container max-w-2/3 mx-auto flex flex-col gap-5 !py-12 items-center justify-center">
      <h3 className="bg-yellow-400 text-black px-2 py-1 uppercase">
        Pitch, Vote and Grow
      </h3>
      <h1 className="text-center bg-black p-2 uppercase">
        Pitch your startup,
        <br />
        connect with entrepreneurs
      </h1>
      <p>
        Submit ideas, Vote on Pitches and get noticed in Virtual Competitions
      </p>
      <form
        action={""}
        className="flex flex-nowrap items-center bg-white gap-2 pl-4 pr-2 rounded-full w-full"
      >
        <input
          type="text"
          name="search"
          defaultValue=""
          className="flex-1 text-black border-none outline-none"
          placeholder="Search here..."
        />
        <button className="bg-black rounded-full h-10 w-10 my-1 flex justify-center items-center">
          <X className="size-5" />
        </button>
        <button className="bg-black rounded-full h-10 w-10 my-1 flex justify-center items-center">
          <Search className="size-5" />
        </button>
      </form>
    </div>
  );
}
