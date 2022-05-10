import { useState, useRef } from 'react';
import { useRouter } from "next/router";

import AuthHeader from "../../headers/auth-header/auth.header";
import AuthContainer from "../../auth-container/auth-container.component";
import InputUi from "../../ui/input";
import ButtonUi from "../../ui/button/button.ui";


const Forgot = () => {
  const Router = useRouter();
  const email = useRef();

  const [isLoading, setLoading] = useState(false);

  const handleForgot = async (e) => {
    e.preventDefault();
    const body = {
      email: email.current.value
    }
    const response = await fetch('/api/auth/forgotpassword', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });
    const data = await response.json();
    setLoading(false);

    if (data.status === 201) {
      alert(`http://localhost:3000/resetpassword/${data.data.resetPasswordToken}}`)
      console.log('url:- ', `http://localhost:3000/resetpassword/${data.data.resetPasswordToken}}`)
    } else {
      alert('Something went wrong');
    }
  }

  return <>
    <AuthHeader text='SIGN UP' onClick={() => Router.push('/register')} ButtonName='SIGN IN' onForgotClick={() => Router.push('/login')} />
    <AuthContainer>
      <form className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 custom-form px-8" onSubmit={handleForgot}>
        <div className="flex gap-3 mb-6">
          <span className="text-[#FCEE21]">EMAIL</span>
          <InputUi className="w-full lg:w-72" type="email" required ref={email} />
        </div>
        <div className="flex justify-center">
          {isLoading ? <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg> : <ButtonUi className='text-lg mx-auto'>FORGOT PASSWORD</ButtonUi>}
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
export default Forgot;