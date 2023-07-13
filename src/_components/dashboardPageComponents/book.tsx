"use client";
import pathCheck from "@/_lib/pathCheck";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

interface IBook {
  imgUrl: string;
  name: string;
  author: string;
}
export default function Book({ imgUrl, name, author }: IBook) {
  const router = usePathname();
  const routeBasedCondition = pathCheck(router, "shelf");

  return (
    <div
      className={`w-[100px] flex flex-col items-center p-2 ${
        routeBasedCondition ? "bg-latte h-[150px]" : "bg-dark-brown h-full"
      } rounded-md shadow-lg snap-center`}
    >
      <Image
        src={imgUrl}
        width={routeBasedCondition ? 50 : 100}
        height={routeBasedCondition ? 75 : 150}
        alt={`${name} cover image`}
      />
      <p
        className={`max-w-[100px] text-center text-ellipsis overflow-hidden  ${
          routeBasedCondition ? "text-dark-brown text-xs" : "text-latte text-lg"
        } font-bold`}
      >
        {name}
      </p>
      <p className={`max-w-[100px] text-center text-ellipsis overflow-hidden ${routeBasedCondition ? "text-dark-brown text-xs": "text-latte text-sm"} font-thin italic`}>
        {author}
      </p>
    </div>
  );
}
