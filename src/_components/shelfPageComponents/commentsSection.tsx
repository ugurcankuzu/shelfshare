"use client"
import EPreviewMode from "@/_enums/EPreviewMode";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

export default function CommentsSection({
  shelfId
}:{shelfId: string}) {
    const [comments,setComments] = useState([])
    const handleComments = ()=>{
      
    }
    useEffect(()=>{
    })
  return (
    <div className="w-full h-fit bg-latte px-2 py-1 flex flex-col gap-2">
      <h2 className="text-dark-accent text-2xl">Comments</h2>
      <div className="w-full h-[50px] relative">
        <textarea
          name="comment"
          id=""
          className="w-full h-full resize-none overflow-y-scroll rounded-md bg-dark-accent placeholder:text-latte placeholder:italic px-2 py-1 "
          maxLength={256}
          placeholder="I think this shelf..."
        ></textarea>
        <button className="absolute right-[10px] top-1/2 -translate-y-1/2 w-[35px] h-[35px] bg-latte rounded-full text-dark-accent">
          <FontAwesomeIcon icon={faMessage} />
        </button>
      </div>
      <div className="flex flex-col gap-2">
        {comments.length > 0 &&
          comments.map((comment) => (
            <div>
              <h2>{comment.ownerId.email} says:</h2>
              <p>{comment.commentContent}</p>
            </div>
          ))}
      </div>
    </div>
  );
}
