import { formatDate } from "@/lib/utils";
import { Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

type StartupCardType = {
  _createdAt: string;
  views: number;
  author: { _id: number; name: string };
  _id: number;
  description: string;
  image: string;
  category: string;
  title: string;
};

export default function StartupCard({ post }: { post: StartupCardType }) {
  const {
    _createdAt,
    views,
    author: { _id: authorID, name },
    _id,
    description,
    image,
    category,
    title,
  } = post;

  return (
    <li className="border rounded-xl p-2 border-white border-s-4 border-t-4 border-r-8 border-b-8 space-y-3">
      <div className="flex justify-between items-center">
        <p>{formatDate(_createdAt)}</p>
        <p className="flex flex-nowrap gap-1">
          <Eye className="size-5" />
          {views}
        </p>
      </div>
      <div className="flex justify-between items-center">
        <div>
          <Link href={`/user/${authorID}`}>
            <p className="line-clamp-1 text-sm">{name}</p>
          </Link>
          <Link href={`/startup/${_id}`}>
            <p className="line-clamp-1 text-xl">{title}</p>
          </Link>
        </div>
        <Link href={`/startup/${_id}`}>
          <Image
            src="https://placehold.co/36x36"
            alt="placeholder"
            height={36}
            width={36}
            className="rounded-full"
          />
        </Link>
      </div>
      <Link href={`/startup/${_id}`}>
        <p>{description}</p>
        <img
          src={image}
          alt="placeholder"
          className="aspect-video object-cover mt-3"
        />
      </Link>
      <div className="flex justify-between items-center gap-3 mt-3">
        <Link href={`/?query=${category.toLowerCase()}`}>
          <p>{category}</p>
        </Link>
        <Button asChild>
          <Link href={`/startup/${_id}`}>Details</Link>
        </Button>
      </div>
    </li>
  );
}
