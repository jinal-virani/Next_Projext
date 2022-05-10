import style from './button.module.scss';

const ButtonUi = ({ children, onClick, className, ...others }) => {
  return <button className={`text-white text-2xl px-3 py-0.5 ${style.customButton} ${className}`} onClick={onClick} {...others}>
    {children}
  </button>
}
export default ButtonUi;