"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import EFormSection from "../../_enums/EFormSection";
import { checkPassword, checkPasswordMatch } from "../../_lib/checkPassword";
import FormSectionSwitch from "./formSectionSwitch";
import LoginSection from "./loginSection";
import SignupSection from "./signupSection";
import submitSignupFormToAPI from "@/_lib/submitSignupForm";
import SignupSuccessSection from "./SignupSuccessSection";
import SignupFailSection from "./signupFailSection";
import submitLoginFormToAPI from "@/_lib/submitLoginForm";
import { useRouter } from "next/navigation";
export default function SignupForm() {
  const router = useRouter()
  const [formSection, changeFormSection] = useState(EFormSection.SIGNUP);
  const [failureMessage, setFailureMessage] = useState("");
  const [formInput, setFormInput] = useState({
    email: "",
    password: "",
    confirmationPassword: "",
  });
  const [passwordStatus, setPasswordStatus] = useState({
    containCapital: false,
    containNonCapital: false,
    containNumeric: false,
    minLength: false,
    passwordMatch: false,
  });
  const submitLoginForm = async (event:any)=>{
    event.preventDefault();
    await submitLoginFormToAPI(formInput,router);
  }
  const handleFailureMessage = (message: string) => {
    setFailureMessage(message);
  };
  const handleFormSectionChange = (section: EFormSection) => {
    changeFormSection(section);
  };
  const handleEmailChange = (event: any) => {
    setFormInput((inputs) => ({
      ...inputs,
      email: event.target.value,
    }));
  };
  const handlePasswordChange = (event: any) => {
    setFormInput((inputs) => ({
      ...inputs,
      password: event.target.value,
    }));
  };
  const handleConfirmationPasswordChange = (event: any) => {
    setFormInput((inputs) => ({
      ...inputs,
      confirmationPassword: event.target.value,
    }));
  };
  const submitSignupForm = (event: any) => {
    event.preventDefault();
    if (!Object.values(passwordStatus).some((criteria) => criteria === false)) {
      submitSignupFormToAPI(formInput, handleFormSectionChange,handleFailureMessage);
    } else {
      alert("Please check registration form fields.");
    }
  };
  useEffect(() => {
    if (formSection === EFormSection.SIGNUP) {
      checkPassword(formInput.password, setPasswordStatus);
      checkPasswordMatch(
        formInput.password,
        setPasswordStatus,
        formInput.confirmationPassword
      );
    }
  }, [formInput.password, formInput.confirmationPassword, formSection]);
  return (
    <form className="w-[300px] h-fit bg-latte rounded-md shadow-md flex flex-col justify-center items-center p-8 gap-2 mt-24">
      <Image
        src={"/logo_transparent.png"}
        width={200}
        height={200}
        alt="ShelfShare Logo"
      />
      <FormSectionSwitch
        formSection={formSection}
        handleFormSectionChange={handleFormSectionChange}
      />
      {formSection === EFormSection.SIGNUP && (
        <SignupSection
          handleEmailChange={handleEmailChange}
          handlePasswordChange={handlePasswordChange}
          handleConfirmationPasswordChange={handleConfirmationPasswordChange}
          passwordStatus={passwordStatus}
          formInput={formInput}
          submitSignupForm={submitSignupForm}
        />
      )}
      {formSection === EFormSection.LOGIN && (
        <LoginSection
          handleEmailChange={handleEmailChange}
          handlePasswordChange={handlePasswordChange}
          submitLoginForm={submitLoginForm}
        />
      )}
      {formSection === EFormSection.SIGNUP_SUCCESS && (
        <SignupSuccessSection
          handleFormSectionChange={handleFormSectionChange}
        />
      )}
      {formSection === EFormSection.SIGNUP_FAIL && (
        <SignupFailSection handleFormSectionChange={handleFormSectionChange} message={failureMessage}/>
      )}
    </form>
  );
}
