"use client";

import createBook from "@/_lib/createBook";
import getCropData from "@/_lib/imageResize";
import "cropperjs/dist/cropper.css";
import { ChangeEvent, useRef, useState } from "react";
import { Cropper, ReactCropperElement } from "react-cropper";

interface IAddBook {
  formVisibilityHandler: Function;
  shelfId: string;
  handleAddedBook: Function
}
export default function AddBook({ formVisibilityHandler, shelfId,handleAddedBook }: IAddBook) {
  const [file, setFile] = useState("");
  const cropperRef = useRef<ReactCropperElement>(null);
  const [bookDetails, setBookDetails] = useState({
    name: "",
    author: "",
  });
  const handleBackgroundClick = ()=>{
    formVisibilityHandler(false);
  }
  const handleBookName = (event: any) => {
    setBookDetails((detail) => ({ ...detail, name: event.target.value }));
  };
  const handleBookAuthor = (event: any) => {
    setBookDetails((detail) => ({ ...detail, author: event.target.value }));
  };
  const handleCoverChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(URL.createObjectURL(event.target.files[0]));
    }
  };
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const file = await getCropData(cropperRef.current?.cropper);

    if (file) {
      await createBook(
        file,
        shelfId,
        bookDetails.name,
        bookDetails.author,
        formVisibilityHandler,
        handleAddedBook
      );
    }
  };
  return (
    <div onClick={handleBackgroundClick} className="fixed w-full h-full z-[150] bg-black/50 left-0 top-0 flex flex-col items-center justify-center px-2">
      <form onClick={(event)=>{event.stopPropagation()}} className="bg-latte w-full h-[550px] rounded-md flex flex-col gap-4 py-4 px-2">
        <h1 className="text-3xl text-dark-accent">Add Book to Shelf</h1>
        <div className="w-full flex flex-col gap-4">
          <div className="flex flex-col gap-4">
            <label htmlFor="imgUrl" className="text-dark-brown">Book Cover Image</label>
            <input
              type="file"
              name="img"
              id="imgUrl"
              className="w-full text-sm file:bg-dark-accent file:border-0 file:text-latte file:px-2 file:py-1 file:rounded-md file:hover:bg-dark-brown text-dark-brown"
              accept="image/png"
              onChange={handleCoverChange}
            />
          </div>
          <div className="flex flex-col gap-4">
            <label htmlFor="name" className="text-dark-brown">Book Title</label>
            <input type="text" id="name" className="bg-dark-accent text-latte placeholder:text-latte/30 placeholder:italic px-2 py-1 rounded-md" placeholder="Lord of the Rings" onChange={handleBookName} />
          </div>
          <div className="flex flex-col gap-4">
            <label htmlFor="author" className="text-dark-brown">Author Name</label>
            <input type="text" id="author" className="bg-dark-accent text-latte placeholder:text-latte/30 placeholder:italic px-2 py-1 rounded-md" placeholder="J.R.R. Tolkien" onChange={handleBookAuthor} />
          </div>
        </div>
        {file && (
          <>
            <Cropper
              src={file}
              className="w-full h-[150px]"
              initialAspectRatio={3 / 4}
              minCropBoxHeight={150}
              minCropBoxWidth={100}
              cropBoxResizable={false}
              guides={true}
              checkOrientation={true}
              ref={cropperRef}
            />
            <button className="self-end bg-dark-accent text-latte px-2 py-1 rounded-md" onClick={handleSubmit}>Add Book</button>
          </>
        )}
      </form>
    </div>
  );
}
