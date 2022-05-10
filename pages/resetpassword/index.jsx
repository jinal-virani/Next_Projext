import { useState,useEffect } from 'react';
import Head from "next/head";

import ResetPassword from "../../components/pages/resetpassword/resetPassword.component";

const ResetPasswordPage = () => {
    

  return <>
    <Head>
       <title>Reset Password</title>
    </Head> 
    <ResetPassword />
  </>
}
export default ResetPasswordPage;