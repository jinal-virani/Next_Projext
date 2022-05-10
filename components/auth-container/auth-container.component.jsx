import Image from 'next/image';

import style from './auth-container.module.scss';

const AuthContainer = ({ children }) => {
  return <main className={`relative ${style.mainContent}`}>
    <div className={`flex absolute top-0 -left-7 w-full h-full bg-repeat-y bg-contain max-w-[390px] ${style.fire}`} style={{ backgroundImage: 'url(/assets/images/g8.png)' }}>
    </div>
    <div className='absolute -right-2 top-0 max-w-[200px] h-auto'><Image src='/assets/images/rl-7.png' width={260} height={387} alt='' /></div>
    <div className='absolute left-1/2 -bottom-1 max-w-[350px] h-auto'><Image src='/assets/images/rl-8.png' width={395} height={178} alt='' /></div>
    {children}
  </main>
}
export default AuthContainer;