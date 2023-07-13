"use client";
import createShelf from "@/_lib/createShelf";
import { faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function CreateShelfButton({ push }: Function) {
  const [createCard, setCreateCard] = useState(false);
  const [shelfName, setShelfName] = useState("");
  const handleShelfName = (event: any) => {
    setShelfName(event.target.value);
  };
  return (
    <div
      onClick={() => {
        setCreateCard((cardState) => !cardState);
      }}
      className={`fixed bottom-[20px] bg-latte flex justify-center items-center rounded-full text-dark-accent shadow-lg z-[100]${
        createCard
          ? " w-[90%] h-[60px] flex justify-around items-center gap-2 rounded-md p-2 left-1/2 -translate-x-1/2"
          : " w-[50px] h-[50px] mx-1  right-[20px]"
      } transition-all duration-[.25s]`}
    >
      {!createCard && <FontAwesomeIcon icon={faPlus} width={50} height={50} />}
      {createCard && (
        <>
          <input
            className="bg-dark-accent placeholder:text-latte text-latte rounded-md h-full px-1"
            placeholder="New shelf's name..."
            onChange={handleShelfName}
            onClick={(event) => {
              event.stopPropagation();
            }}
          />
          <button
            className=""
            onClick={(event) => {
              event.stopPropagation();
              createShelf(shelfName, push);
            }}
          >
            Create
          </button>
        </>
      )}
    </div>
  );
}
