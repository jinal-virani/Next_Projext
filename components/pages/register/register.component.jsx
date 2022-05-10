import { useRef, useState } from 'react';
import { useRouter } from "next/router";

import AuthHeader from "../../headers/auth-header/auth.header";
import AuthContainer from "../../auth-container/auth-container.component";
import InputUi from "../../ui/input";
import ButtonUi from "../../ui/button/button.ui";

const Register = () => {
  const Router = useRouter();

  const firstName = useRef();
  const lastName = useRef();
  const email = useRef();
  const phone = useRef();
  const password = useRef();
  const confirmPassword = useRef();

  const [isLoading, setLoading] = useState(false);

  const oneSignUp = async (e) => {
    e.preventDefault();
    setLoading(true)

    if (password.current.value != confirmPassword.current.value) {
      alert('Password does not match!');
      setLoading(false)
      return;
    }
    if (password.current.value.length < 5) {
      alert('Password must have at least 5 chars!');
      setLoading(false)
      return;
    }
    const body = {
      firstName: firstName.current.value,
      lastName: lastName.current.value,
      password: password.current.value,
      email: email.current.value,
      phone: phone.current.value,
      resetPasswordToken:''
    }
    const response = await fetch('/api/auth/signup', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });
    const data = await response.json();
    setLoading(false)
    if (data.status === 201) {
      alert('You successfully registered!')

    } else {
      alert('Something went wrong');
    }
  }

  return <>
    <AuthHeader text='SIGN IN' onClick={() => Router.push('/login')} ButtonName='FORGOT PASSWORD' onForgotClick={() => Router.push('/forgot')}  />

    <AuthContainer>
      <form className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 custom-form px-8 py-5`} onSubmit={oneSignUp}>
        <div className="flex lg:gap-12 items-center mb-6 flex-wrap lg:flex-nowrap">
          <div className="flex gap-3 items-center w-full lg:w-1/2 mb-6 lg:mb-0">
            <span className="text-[#FCEE21] shrink-0">FIRST NAME</span>
            <InputUi className="w-full lg:w-52" required ref={firstName} />
          </div>
          <div className="flex gap-3 items-center w-full lg:w-1/2">
            <span className="text-[#FCEE21]">LAST</span>
            <InputUi className="w-full lg:w-52" required ref={lastName} />
          </div>
        </div>
        <div className="flex gap-3 items-center mb-6">
          <span className="text-[#FCEE21]">PHONE</span>
          <InputUi className="w-full lg:w-72" required type="number" ref={phone} />
        </div>
        <div className="flex gap-3 items-center mb-6">
          <span className="text-[#FCEE21]">EMAIL</span>
          <InputUi className="w-full lg:w-72" type="email" required ref={email} />
        </div>
        <div className="flex gap-3 items-center mb-6">
          <span className="text-[#FCEE21]">PASSWORD</span>
          <InputUi className="w-full lg:w-72" type="password" required ref={password} />
        </div>
        <div className="flex gap-3 items-center mb-6">
          <span className="text-[#FCEE21] shrink-0">CONFIRM PASSWORD</span>
          <InputUi className="w-full lg:w-72" type="password" required ref={confirmPassword} />
        </div>
        <div className="flex justify-center">
          {isLoading ? <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg> : <ButtonUi className='text-xl mx-auto px-6' type="submit">SAVE</ButtonUi>}
        </div>
      </form>
    </AuthContainer>


    <style global jsx>{`
    body{
      background: black;
    }
    @media (max-width: 768px){
      .custom-form{
        width: 100%;
      }
    }
    
    `}</style>
  </>
}
export default Register;