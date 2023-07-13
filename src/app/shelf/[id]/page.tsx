"use client";
import Navbar from "@/_components/Navbar";
import BooksSection from "@/_components/shelfPageComponents/bookSection";
import CommentsSection from "@/_components/shelfPageComponents/commentsSection";
import TitleSection from "@/_components/shelfPageComponents/titleSection";
import getBooksInShelf from "@/_lib/getBooksInShelf";
import getShelf from "@/_lib/getShelf";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Shelf({ params }: { params: { id: string } }) {
  const { push,refresh } = useRouter();
  const { id } = params;
  const [shelfInfo, setShelfInfo] = useState({});
  const handleShelfInformation = (shelfInfo: any) => {
    setShelfInfo(shelfInfo);
  };
  const handleAddedBook = (book:any)=>{
    setShelfInfo((shelfInfo)=> ({...shelfInfo, books: [...shelfInfo.books, book]}))
  }
  useEffect(() => {
    const getShelfInformation = async () => {
      await getShelf(id, push, handleShelfInformation);
    };
    getShelfInformation();
  }, []);
  return (
    <>
      <Navbar />
      <TitleSection
        title={shelfInfo.shelfName}
        previewMode={shelfInfo.previewMode}
      />
      <BooksSection
        books={shelfInfo.books}
        previewMode={shelfInfo.previewMode}
        shelfId={id}
        handleAddedBook={handleAddedBook}
      />
      <CommentsSection shelfId={id}/>
    </>
  );
}
