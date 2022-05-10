import React from 'react';

const InputUi = (props, ref) => {
  const { className, type, placeholder, ...others } = props;
  return <input className={`bg-gradient-to-br from-[#0e0000] via-[#920000] to-[#fe0000] focus:!ring-[#350000] focus:ring-2 text-sm focus:outline-none rounded-lg py-1 px-2 text-white ${className}`} type={type ? type : 'text'} ref={ref} placeholder={placeholder} {...others} />
}
export default React.forwardRef(InputUi);