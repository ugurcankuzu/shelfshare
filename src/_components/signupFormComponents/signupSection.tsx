import { ChangeEventHandler, MouseEventHandler } from "react";
import PasswordConditions from "./passwordConditions";
interface ISignupSection {
  handleEmailChange: ChangeEventHandler<HTMLInputElement>;
  handlePasswordChange: ChangeEventHandler<HTMLInputElement>;
  passwordStatus: any;
  handleConfirmationPasswordChange: ChangeEventHandler<HTMLInputElement>;
  submitSignupForm: MouseEventHandler<HTMLButtonElement>;
  formInput: any;
}
export default function SignupSection({
  handleEmailChange,
  handlePasswordChange,
  passwordStatus,
  handleConfirmationPasswordChange,
  submitSignupForm,
  formInput,
}: ISignupSection) {
  return (
    <>
      <div className="w-full flex flex-col">
        <label htmlFor="email" className="text-dark-brown">
          E-mail
        </label>
        <input
          name="email"
          type="email"
          placeholder="xyz@mail.com"
          id="email"
          className="bg-light-accent px-2 py-1 rounded-md text-dark-brown placeholder:italic placeholder:text-dark-brown placeholder:text-sm"
          onChange={handleEmailChange}
        />
      </div>
      <div className="w-full flex flex-col">
        <label htmlFor="password" className="text-dark-brown">
          Password
        </label>
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          id="password"
          className="bg-light-accent px-2 py-1 rounded-md text-dark-brown placeholder:italic placeholder:text-dark-brown placeholder:text-sm"
          onChange={handlePasswordChange}
        />
      </div>
      <div className="w-full flex flex-col">
        <label htmlFor="confirmPassword" className="text-dark-brown">
          Confirm password
        </label>
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          placeholder="Confirm your password"
          className="bg-light-accent px-2 py-1 rounded-md text-dark-brown placeholder:italic placeholder:text-dark-brown placeholder:text-sm"
          onChange={handleConfirmationPasswordChange}
        />
      </div>
      <PasswordConditions
        containCapital={passwordStatus.containCapital}
        containNonCapital={passwordStatus.containNonCapital}
        containNumeric={passwordStatus.containNumeric}
        minLength={passwordStatus.minLength}
        passwordMatch={passwordStatus.passwordMatch}
      />
      <button
        onClick={submitSignupForm}
        className="w-full mt-2 bg-dark-brown text-latte px-2 py-1 rounded-md transition-all duration-[.25s] disabled:opacity-50"
        disabled={
          !formInput.email ||
          !formInput.password ||
          !formInput.confirmationPassword
        }
      >
        Signup
      </button>
    </>
  );
}
