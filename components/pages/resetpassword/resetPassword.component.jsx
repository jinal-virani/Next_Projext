import { useState, useRef, useEffect } from 'react';

import AuthHeader from "../../headers/auth-header/auth.header";
import AuthContainer from "../../auth-container/auth-container.component";
import InputUi from "../../ui/input";
import ButtonUi from "../../ui/button/button.ui";

const ResetPassword = () => {
  const newPassword = useRef();
  const confirmPassword = useRef();

  const [isLoading, setLoading] = useState(false);
  const [getData, setGetData] = useState('');
  const [getTime, setGetTime] = useState('');
  useEffect(() => {
    const data = atob(window.location.pathname.split('/')[2]);
    setGetData(data)
  }, [getData])
 
  const temp = getData && getData.split('|');
  const timestamp = temp[1];

  const fromTime = new Date(timestamp);
  const toTime = new Date();

  const differenceTravel = toTime.getTime() - fromTime.getTime();
  const seconds = Math.floor((differenceTravel) / (1000));
 

  function convert(value) {
    return Math.floor(value / 60) + ":" + (value % 60 ? value % 60 : '00')
  }

  useEffect(() => {
    setGetTime(convert(seconds))
  }, [ seconds,getTime])

  
  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (newPassword.current.value != confirmPassword.current.value) {
      alert('Password does not match!');
      setLoading(false)
      return;
    }
    if (newPassword.current.value.length < 5) {
      alert('Password must have at least 5 chars!');
      setLoading(false)
      return;
    }
    const body = {
      password: newPassword.current.value
    }
    const response = await fetch(`/api/auth/resetpassword/?email=${temp[0]}`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });
    const data = await response.json();
    setLoading(false)
    if (data.status === 201) {
      alert(`${data.message}`)

    } else {
      alert('Something went wrong');
    }
  }


  return <>

    {   getTime > '2:0' ?
      <div style={{ color: 'white' }}>Link is Expired.Please check this!</div>
      :
      <>
        <AuthHeader text='SIGN UP' onClick={() => Router.push('/register')} ButtonName='SIGN IN' onForgotClick={() => Router.push('/login')} />
        <AuthContainer>
          <form className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 custom-form px-8" onSubmit={handleResetPassword}>
            <div className="flex gap-3 mb-6">
              <span className="text-[#FCEE21]">NEW PASSWORD</span>
              <InputUi className="w-full lg:w-72" type="password" required ref={newPassword} />
            </div>
            <div className="flex gap-3 mb-6">
              <span className="text-[#FCEE21]">CONFRIM PASSWORD</span>
              <InputUi className="w-full lg:w-72" type="password" required ref={confirmPassword} />
            </div>
            <div className="flex justify-center">
              {isLoading ? <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg> : <ButtonUi className='text-lg mx-auto'>RESET PASSWORD</ButtonUi>}
            </div>
          </form>
        </AuthContainer>
      </>
      }   


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
export default ResetPassword;