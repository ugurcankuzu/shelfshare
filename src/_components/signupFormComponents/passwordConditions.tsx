"use client";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";

interface IPasswordConditions {
  containCapital: boolean;
  containNonCapital: boolean;
  containNumeric: boolean;
  minLength: boolean;
  passwordMatch: boolean;
}

export default function PasswordConditions({
  containCapital,
  containNonCapital,
  containNumeric,
  minLength,
  passwordMatch
}: IPasswordConditions) {
  const rules = [
    {
      condition: containCapital,
      text: "Password must contain at least 1 capital letter",
    },
    {
      condition: containNonCapital,
      text: "Password must contain at least 1 Non-capital letter",
    },
    {
      condition: containNumeric,
      text: "Password must contain at least 1 Numeric character",
    },
    {
      condition: minLength,
      text: "Password must be minimum 8 characters length",
    },
    {
      condition: passwordMatch,
      text: "Password and confirmation password must match"
    }
  ];
  return (
    <div className="w-full">
      <ul className="flex flex-col justify-center items-center gap-3">
        {rules.map((rule,index) => (
          <li
            className={`text-xs transition-all duration-[.25s] ${
              rule.condition ? "text-green-500" : "text-red-500"
            } flex justify-center items-center gap-4`}
            key={index}
          >
            <span>
              <FontAwesomeIcon
                icon={rule.condition ? faCheck : faXmark}
                className="text-xl"
              />
            </span>{" "}
            {rule.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
