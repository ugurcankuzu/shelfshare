"use client";

import Link from "next/link";
import ShelveShowCase from "./shelveShowCase";

interface IMyShelves {
  shelves: Array<Object>;
  push: Function;
}
export default function MyShelves({ shelves, push }: IMyShelves) {
  return (
    <>
      <div className="w-full py-4 px-2 flex flex-col gap-6">
        <h2 className="text-latte text-3xl">Your Shelves</h2>

        {shelves.length > 0 &&
          shelves.map((shelf, index) => (
            <Link href={`/shelf/${shelf._id}`}>
              <ShelveShowCase
                key={index}
                shelfName={shelf.shelfName}
                id={shelf._id}
                push={push}
              />
            </Link>
          ))}
      </div>
    </>
  );
}
