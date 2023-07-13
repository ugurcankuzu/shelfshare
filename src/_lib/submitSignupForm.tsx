import EFormSection from "../_enums/EFormSection";

export default async function submitSignupFormToAPI(formInputs: any,handleFormSectionChange: any,handleFailureMessage:any) {
  const { email, password } = formInputs;
  const result = await fetch(process.env.baseAPI + "register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
        email: email,
        password: password
    }),
  });
  const response = await result.json();

  if(result.status === 200){
    handleFormSectionChange(EFormSection.SIGNUP_SUCCESS)
  }else{
    handleFailureMessage(response.message);
    handleFormSectionChange(EFormSection.SIGNUP_FAIL)
    
  }
}
