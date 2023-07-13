"use client";
export function checkPassword(
  password: string,
  setPasswordStatus: Function
) {
  const containCapital = /(?=.*[A-Z])/;
  const containNonCapital = /(?=.*[a-z])/;
  const containNumeric = /(?=.*\d)/;
  const minLength = /.{8,}$/;

  setPasswordStatus((state: any) => ({
    ...state,
    containCapital: containCapital.test(password),
    containNonCapital: containNonCapital.test(password),
    containNumeric: containNumeric.test(password),
    minLength: minLength.test(password),
  }));
}

export function checkPasswordMatch(
  password: string,
  setPasswordStatus: Function,
  confirmationPassword?: string
) {
  if(password && confirmationPassword){
    setPasswordStatus((state:any) => ({
      ...state,
      passwordMatch: password === confirmationPassword
    }))
  }else{
    setPasswordStatus((state:any) => ({
      ...state,
      passwordMatch: false
    }))
  }
}
