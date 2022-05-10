import { useState, useEffect } from 'react';
import CryptoJS from "crypto-js";
import Head from "next/head";
import { useRouter } from "next/router";

import ResetPassword from "../../components/pages/resetpassword/resetPassword.component";

const ResetPasswordPage = () => {
  // const Router = useRouter();
  // console.log("Router",Router.asPath.slice(15))
  // const data = 'U2FsdGVkX19MOIL6dRDNt1USKJJqhRV1yPQWQpo240U+dxdLzTbONqRGRK7eqBgk26O7mueuRivRMqE19f1RyFmzVskmuT4Cqw3q2KI1J0nPXaKIOKwynDrBhuMzPaxc';
  // const bytes = CryptoJS.AES.decrypt(`${Router.asPath.slice(15)}`, 'my-secret-key@123');
  // const decryptedData = JSON.parse(`${bytes.toString(CryptoJS.enc.Utf8)}`);

  // const [getTime, setGetTime] = useState('');
  // console.log('decryptedData', decryptedData.dateTime)

  // var minutesToAdd = 10;
  // var currentDate = new Date(new Date(decryptedData.dateTime));
  // var futureDate = new Date(currentDate.getTime() + minutesToAdd * 60000);
  // console.log('futureDate', futureDate, currentDate)
  // if (futureDate < currentDate) {
  //   console.log("true")
  // } else {
  //   console.log("false")
  // }

  // const _initial = new Date(new Date(decryptedData.dateTime));
  // const fromTime = new Date(_initial);
  // const toTime = new Date();

  // const differenceTravel = toTime.getTime() - fromTime.getTime();
  // const seconds = Math.floor((differenceTravel) / (1000));

  // function convert(value) {
  //   return Math.floor(value / 60) + ":" + (value % 60 ? value % 60 : '00')
  // }

  // useEffect(() => {
  //   setGetTime(convert(seconds));
  // }, [seconds])

  return <>
    <Head>
      <title>Reset Password</title>
    </Head>
    {/* {console.log('getTime', getTime)}
    {getTime < '3:0' ? */}
      <ResetPassword />
       {/* :
      <div style={{ coloe:'white'}}>Link was expired!Please try again</div>}  */}
  </>
}
export default ResetPasswordPage;