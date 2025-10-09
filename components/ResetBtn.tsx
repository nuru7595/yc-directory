"use client";
import { X } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

export default function ResetBtn() {
  const resetForm = () => {
    const form = document.querySelector(".search-form") as HTMLFormElement;
    if (form) form.reset();
  };

  return (
    <Button
      className="rounded-full h-10 w-10 my-1 hover:bg-gray-700 cursor-pointer"
      type="reset"
      onClick={resetForm}
    >
      <Link href="/">
        <X className="size-5" />
      </Link>
    </Button>
  );
}
