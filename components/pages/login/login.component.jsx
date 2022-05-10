import { useState, useRef } from 'react';
import { useRouter } from "next/router";
import { useSession, signIn } from "next-auth/react"

import AuthHeader from "../../headers/auth-header/auth.header";
import AuthContainer from "../../auth-container/auth-container.component";
import InputUi from "../../ui/input";
import ButtonUi from "../../ui/button/button.ui";

const Login = () => {
  const Router = useRouter();
  const { data: session } = useSession();
  const email = useRef();
  const password = useRef();
  console.log(session)

  const [isLoading, setLoading] = useState(false);

  const onSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    const sign = await signIn('credentials', {
      redirect: false,
      email: email.current.value,
      password: password.current.value,
    });
    console.log(sign)
    if (!sign.error) {
      Router.push('/protected');
    } else {
      alert('Email/Password incorrect')
    }
  }

  return <>
    <AuthHeader text='SIGN UP' onClick={() => Router.push('/register')} ButtonName='FORGOT PASSWORD' onForgotClick={() => Router.push('/forgot')} />
    <AuthContainer>
      <form className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 custom-form px-8" onSubmit={onSignIn}>
        <div className="flex gap-3 mb-6">
          <span className="text-[#FCEE21]">EMAIL</span>
          <InputUi className="w-full lg:w-72" type="email" required ref={email} />
        </div>
        <div className="flex gap-3 mb-6">
          <span className="text-[#FCEE21]">PASSWORD</span>
          <InputUi className="w-full lg:w-72" type="password" required ref={password} />
        </div>
        <div className="flex justify-center">
          {isLoading ? <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg> : <ButtonUi className='text-lg mx-auto'>SIGN IN</ButtonUi>}
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
export default Login;