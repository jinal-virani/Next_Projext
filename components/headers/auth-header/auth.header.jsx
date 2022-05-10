import Image from "next/image";

import ButtonUi from "../../ui/button/button.ui";
import style from './auth-header.module.scss';

const AuthHeader = ({ onClick, text, ButtonName, onForgotClick }) => {
  return <>
    <header className="relative h-[108px] overflow-hidden">
      <div className="flex justify-center z-1 px-20">
        <div className="w-[480px] h-auto pt-3 relative">
          <span className={`absolute bg-no-repeat -left-44 top-0 z-1 w-full h-full ${style.rl5}`}></span>
          <Image src='/assets/images/logo.png' width='600' height={'87'} alt="" />
          <span className={`absolute bg-no-repeat -right-40 top-0 z-1 w-full h-full ${style.rl6}`}></span>
        </div>
      </div>
      <ButtonUi onClick={onClick} className='absolute bottom-2 left-3 z-1 text-sm sm:text-lg md:text-2xl'>{text}</ButtonUi>
      <ButtonUi onClick={onForgotClick} className='absolute bottom-2 left-40 z-1 text-sm sm:text-lg md:text-2xl'>{ButtonName}</ButtonUi>
    </header>
  </>
}
export default AuthHeader;