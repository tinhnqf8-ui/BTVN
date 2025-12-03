import { faBell } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ModalList from '../ModalList'
import { Link } from 'react-router'
import clsx from 'clsx'

function Notification({ openModal, setOpenModalHeader }: { openModal: boolean, setOpenModalHeader: () => void }) {
  const dataFakes = [
    {
      link: 'khoa-hoc-1',
      title: 'Bài tập mới trong khóa học ReactJS đã được giao',
      time: '2 ngày trước',
      status: true,
    },
    {
      link: 'khoa-hoc-2',
      title: 'Khóa học NodeJS của bạn đã được cập nhật',
      time: '5 ngày trước',
      status: false,
    },
    {
      link: 'khoa-hoc-3',
      title: 'Bạn đã nhận được chứng chỉ hoàn thành khóa học Python',
      time: '1 tuần trước',
      status: true,
    },
    {
      link: 'khoa-hoc-4',
      title: 'Khóa học JavaScript của bạn sắp kết thúc',
      time: '3 tuần trước',
      status: false,
    }
  ]
  return (
    <div className='cursor-pointer relative' onClick={setOpenModalHeader} >
      <FontAwesomeIcon icon={faBell} />
      {openModal &&
        <ModalList classAdd='w-[380px] right-0'>
          <div className="flex justify-between items-center py-2 ">
            <p className="text-sm uppercase font-semibold ">Khóa học của tôi</p>
            <div>
              <a className="text-red-400 text-sm" href="/xem-them-khoa-hoc" data-discover="true">Xem tất cả</a>
            </div>
          </div>
          <ul className='flex flex-col gap-2 py-3'>
            {
              dataFakes.map((dataFake, index) => {
                return <li key={index}>
                  <Link to={dataFake.link} className={clsx('flex items-center  px-2 py-1 rounded-lg',
                    {
                      'bg-[#f051231a]': dataFake.status
                    }
                  )}>
                    <img src="https://fullstack.edu.vn/assets/images/f8_avatar.png" alt="img exam" className='rounded-full w-10 h-10 object-cover' />
                    <div className="flex-3 flex gap-3 p-2">
                      <div className="flex flex-col gap-1">
                        <p className="font-bold text-sm">{dataFake.title}</p>
                        <p className='text-xs text-gray-400'>{dataFake.time}</p>
                      </div>
                    </div>
                    {
                      dataFake.status &&
                      <div className='p-1 bg-blue-400 rounded-lg'></div>
                    }
                  </Link>
                </li>
              })
            }
          </ul>
        </ModalList>
      }
    </div>
  )
}

export default Notification