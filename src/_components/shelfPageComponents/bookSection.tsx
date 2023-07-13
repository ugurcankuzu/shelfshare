"use client"
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Book from "../dashboardPageComponents/book";
import EPreviewMode from "@/_enums/EPreviewMode";
import { useState } from "react";
import AddBook from "./addBook";

interface IBooksSection {
  books: Array<Object>;
  previewMode: EPreviewMode;
  shelfId: string;
  handleAddedBook: Function;
}
export default function BooksSection({ books, previewMode,shelfId,handleAddedBook }: IBooksSection) {
  const [addBookSection,setAddBookSection] = useState(false)
  const formVisibilityHandler = (visibility = true) => {
    setAddBookSection(visibility);
  }

  return (
    <div className="py-4 px-2 w-full">
      <div className="w-full h-full flex justify-start items-start flex-wrap gap-2">
        {books &&
          books.map((book) => (
            <Book imgUrl="" name={book.name} author={book.author} />
          ))}
        {previewMode === EPreviewMode.OWNER_MODE && (
          <button onClick={()=> formVisibilityHandler()} className="border-4 border-latte border-dashed w-[100px] h-[150px] rounded-md px-2">
            <FontAwesomeIcon
              icon={faPlus}
              className="text-latte w-[50px] h-[50px]"
            />
            <p className="text-latte text-sm font-thin">
              Please click to add book.
            </p>
          </button>
        )}
        {addBookSection && <AddBook formVisibilityHandler={formVisibilityHandler} shelfId={shelfId} handleAddedBook={handleAddedBook}/>}
      </div>
    </div>
  );
}
