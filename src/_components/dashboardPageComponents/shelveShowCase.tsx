"use client";

import { useEffect, useState } from "react";
import Book from "./book";
import getBooksInShelf from "@/_lib/getBooksInShelf";

interface IShelfShowCase {
  id: string;
  push: Function;
  shelfName: string;
}
export default function ShelveShowCase({
  id,
  push,
  shelfName,
}: IShelfShowCase) {
  const [books, setBooksList] = useState([]);
  const handleBookList = (bookList: any) => {
    setBooksList(bookList);
  };
  useEffect(() => {
    const getBookInfo = async () => {
      await getBooksInShelf(id, handleBookList, push);
      console.log(books);
    };
    getBookInfo();
  }, []);
  return (
    <>
      <div className="bg-latte p-4 rounded-md flex flex-col gap-4">
        <h2 className="text-2xl text-dark-brown">{shelfName}</h2>
        <div className="flex items-center gap-2 overflow-x-auto snap-mandatory">
          {books.length > 0 &&
            books.map((book: any) => (
              <Book name={book.name} imgUrl={book.url} author={book.author} />
            ))}
        </div>
      </div>
    </>
  );
}
