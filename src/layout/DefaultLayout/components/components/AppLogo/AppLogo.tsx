import React from 'react'
import f8Logo from '@/asset/images/f8-logo.png'
import clsx from 'clsx'
function AppLogo({color='text-black'}: {color?: string}) {
  return (
    <div className="flex gap-4 items-center">
      <img src={f8Logo} alt="Học Lập Trình Để Đi Làm" className='w-10 rounded-lg' />
      <p className={clsx("font-bold text-sm",color)} >Học Lập Trình Để Đi Làm</p>
    </div>
  )
}
export default AppLogo