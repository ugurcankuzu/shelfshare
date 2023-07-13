"use client"
import EFormSection from "@/_enums/EFormSection";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect,useState } from "react";

export default function SignupFailSection({handleFormSectionChange,message}:any) {
    const [isDisplayed, changeDisplay] = useState(true);
    useEffect(() => {
      const timer = setTimeout(() => {
          handleFormSectionChange(EFormSection.SIGNUP)
          changeDisplay(false)
      }, 5000);
      return ()=>{
          clearTimeout(timer);
      };
    });
    return (
      <>
        {isDisplayed && (
          <div className="w-full flex flex-col items-center gap-4">
            <FontAwesomeIcon icon={faXmark} className="text-dark-brown w-24 h-24 drop-shadow-md bg-light-accent rounded-md shadow-md p-2"/>
            <p className="text-center text-dark-brown">
              {message}
            </p>
          </div>
        )}
      </>
    );
  }
  