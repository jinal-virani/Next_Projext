import Image from "next/image";
import Link from "next/link";

import ButtonUi from "../../ui/button/button.ui";
import style from './home.module.scss';

const Home = () => {
  return <><div>
    <header className="relative">
      <div className="absolute top-0 left-0 -z-1 bg-no-repeat" style={{ backgroundImage: 'url(/assets/images/blur-2.png)', backgroundPosition: 'right top', backgroundPositionY: '-18px' }}>
        <Image src='/assets/images/rl-1.png' width='270' height='220' alt="" />
      </div>
      <div className="flex justify-center z-1 px-20">
        <div className="w-[480px] h-auto pt-3">
          <Image src='/assets/images/logo.png' width='600' height={'87'} alt="" />
        </div>
      </div>
      <div className="absolute right-0 top-0 -z-1" style={{ backgroundImage: 'url(/assets/images/blur-1.png)', backgroundPosition: 'top left', backgroundPositionY: '-18px' }}>
        <Image src='/assets/images/rl-2.png' width='270' height='220' alt="" />
      </div>
    </header>

    <main className={`relative bg-black bg-clip-padding mt-7 flex items-center justify-center ${style.mainContent}`}>
      <div className={`flex absolute top-0 -left-7 w-full h-full bg-repeat-y bg-contain max-w-[390px] ${style.fire}`} style={{ backgroundImage: 'url(/assets/images/g8.png)' }}>
      </div>

      <div className={`absolute top-36 left-1/2 max-w-[300px] h-auto z-2 ${style.blur3}`}>
        <Image src='/assets/images/blur-3.png' width='352' height='131' alt="" />
      </div>
      <div className={`flex justify-center top-0 relative`}>
        <div className={`absolute max-w-[450px] lg:max-w-[540px] z-2 -top-14 ${style.dice}`}>
          <Image src='/assets/images/dice-handler.svg' width={850} height={602} alt="" />
        </div>
        <div className="relative -top-3.5 px-16 sm:px-24 md:px-40 z-1" style={{ transform: 'scale(1.09)' }}>
          <Image src='/assets/images/lion.png' width='650' height='650' alt="" />
        </div>
        <div className={`absolute bottom-0 left-1/2 max-w-[386px] h-auto z-2 ${style.coins2}`}>
          <Image src='/assets/images/coins-2.png' width='386' height='236' alt="" />
        </div>
        <div className={`absolute top-1/2 -translate-y-1/2 left-1/2 max-w-[150px] h-auto z-2 ${style.blur4}`}>
          <Image src='/assets/images/blur-4.png' width='130' height='120' alt="" />
        </div>
        <div className={`absolute -top-6 right-1/2 max-w-[350px] h-auto z-1 ${style.coins}`}>
          <Image src='/assets/images/coins.svg' width='343' height='484' alt="" />
        </div>
      </div>
      <div className={`absolute top-6 -right-3 max-w-[500px] h-auto z-1`}>
        <Image src='/assets/images/blur-5.png' width='500' height='545' alt="" />
      </div>
      <div className={`absolute top-16 sm:-top-20 right-0 z-0`}>
        <Image src='/assets/images/rl-3.png' width='450' height='447' alt="" />
      </div>
      <div className={`absolute bottom-0 z-1 ${style.rl4}`}>
        <Image src='/assets/images/rl-4.png' width='400' height='290' alt="" />
      </div>

      <div className="flex absolute right-5 lg:right-12 flex-col gap-3 bottom-4 lg:bottom-9 z-20">
        <Link href='/register'>
          <a><ButtonUi>SIGN UP</ButtonUi></a>
        </Link>
        <Link href='/login'>
          <a><ButtonUi className="!px-[15px]">SIGN IN</ButtonUi></a>
        </Link>
      </div>
    </main>
  </div>
    <style global jsx>{`
    body{
      background-color: black;
    }
    `}</style>
  </>
}
export default Home;