import EFormSection from "../../_enums/EFormSection";
interface IFormSectionSwitchProps{
    formSection: EFormSection,
    handleFormSectionChange: Function
}
export default function FormSectionSwitch({
  formSection,
  handleFormSectionChange
}: IFormSectionSwitchProps) {
  return (
    <div className="w-full flex justify-center items-center bg-light-accent rounded-md gap-2 p-2">
      <button
        onClick={(event) => {
          event.preventDefault();
          handleFormSectionChange(EFormSection.SIGNUP);
        }}
        className={`w-full ${
          formSection === EFormSection.SIGNUP
            ? "bg-dark-brown text-latte"
            : "text-dark-brown"
        } rounded-md transition-all duration-[.25s]`}
      >
        Signup
      </button>
      <button
        onClick={(event) => {
          event.preventDefault();
          handleFormSectionChange(EFormSection.LOGIN);
        }}
        className={`w-full ${
          formSection === EFormSection.LOGIN
            ? "bg-dark-brown text-latte"
            : "text-dark-brown"
        } rounded-md transition-all duration-[.25s]`}
      >
        Login
      </button>
    </div>
  );
}
