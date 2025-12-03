import React from 'react'
import ModalList from '../ModalList'
import { Link } from 'react-router'

function UserMenu({ openModal, setOpenModalHeader }: { openModal: boolean, setOpenModalHeader: () => void }) {
  return (
    <div onClick={setOpenModalHeader} className='relative cursor-pointer'>
      <div className='border-2 rounded-full overflow-hidden'>
      <img src="https://files.fullstack.edu.vn/f8-prod/user_photos/301540/640569b7dda0c.jpg" className='w-10 h-10 object-cover ' alt="" />
      </div>
      {openModal &&
        <ModalList classAdd='w-[260px] right-0'>
          <ul>
            <li>
              <Link to={'link'} className='py-2 inline-block px-4 hover:bg-gray-100 cursor-pointer rounded-md'>
                Trang cá nhân
              </Link>
            </li>
            <li>
              <Link to={'link'} className='py-2 inline-block px-4 hover:bg-gray-100 cursor-pointer rounded-md'>
                Bài tập của tôi
              </Link>
            </li>
            <li>
              <Link to={'link'} className='py-2 inline-block px-4 hover:bg-gray-100 cursor-pointer rounded-md'>
                Viết blog
              </Link>
            </li>
            <li>
              <Link to={'link'} className='py-2 inline-block px-4 hover:bg-gray-100 cursor-pointer rounded-md'>
                Bài viết của tôi
              </Link>
            </li>
            <li>
              <Link to={'link'} className='py-2 inline-block px-4 hover:bg-gray-100 cursor-pointer rounded-md'>
                Bài viết đã lưu
              </Link>
            </li>
            <li>
              <Link to={'link'} className='py-2 inline-block px-4 hover:bg-gray-100 cursor-pointer rounded-md'>
                Cài đặt
              </Link>
            </li>
            <li>
              <Link to={'link'} className='py-2 inline-block px-4 hover:bg-gray-100 cursor-pointer rounded-md'>
                Đăng xuất
              </Link>
            </li>
          </ul>
        </ModalList>

      }
    </div>
  )
}

export default UserMenu