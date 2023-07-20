"use client";
import pathCheck from "@/_lib/pathCheck";
import urlFormatter from "@/_lib/urlFormatter";
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
      className={`w-[100px] flex flex-col items-center ${
        routeBasedCondition ? "bg-latte h-[150px]" : "bg-dark-brown h-[200px]"
      } rounded-md shadow-lg snap-center relative`}
    >
      <Image
        src={process.env.baseCDN + urlFormatter(imgUrl)}
        alt={`${name} cover image`}
        fill={true}
      />
      <div className="absolute z-[100] bg-black/50 w-full h-full flex flex-col justify-center items-center transition-all duration-[.25s] hover:bg-black/80 p-2">
        <p
          className={`max-w-[100px] text-center text-ellipsis overflow-hidden text-white ${
            routeBasedCondition
              ? "text-xs"
              : "text-lg"
          } font-bold`}
        >
          {name}
        </p>
        <p
          className={`max-w-[100px] text-center text-ellipsis overflow-hidden text-white ${
            routeBasedCondition
              ? "text-xs"
              : "text-sm"
          } font-thin italic`}
        >
          {author}
        </p>
      </div>
    </div>
  );
}
