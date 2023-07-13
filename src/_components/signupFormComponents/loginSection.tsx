import { ChangeEventHandler, MouseEventHandler } from "react";

interface ILoginSection {
  handlePasswordChange: ChangeEventHandler<HTMLInputElement>;
  handleEmailChange: ChangeEventHandler<HTMLInputElement>;
  submitLoginForm: MouseEventHandler<HTMLButtonElement>;
}
export default function LoginSection({ handlePasswordChange,handleEmailChange,submitLoginForm }: ILoginSection) {
  return (
    <>
      <div className="w-full flex flex-col">
        <label htmlFor="email" className="text-dark-brown">
          E-mail
        </label>
        <input
          type="email"
          id="email"
          className="bg-light-accent px-2 py-1 rounded-md text-dark-brown placeholder:italic placeholder:text-dark-brown placeholder:text-sm"
          placeholder="xyz@mail.com"
          onChange={handleEmailChange}
        ></input>
      </div>
      <div className="w-full flex flex-col">
        <label htmlFor="password" className="text-dark-brown">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          className="bg-light-accent px-2 py-1 rounded-md text-dark-brown placeholder:italic placeholder:text-dark-brown placeholder:text-sm"
          placeholder="Enter your password"
          onChange={handlePasswordChange}
        />
      </div>
      <button onClick={submitLoginForm} className="w-full mt-2 bg-dark-brown text-latte px-2 py-1 rounded-md">
        Login
      </button>
    </>
  );
}
