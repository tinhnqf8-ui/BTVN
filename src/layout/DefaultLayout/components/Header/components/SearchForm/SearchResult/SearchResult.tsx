import React from 'react'
import ModalList from '../../ModalList'
import ListResult from './ListResult'
import ItemResult from './ListResult/ItemResult'

function SearchResult() {
  const dataFakes = [
    {
      link: 'khoa-hoc-1',
      title: 'Khóa học 1',
      imgUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    },
    {
      link: 'khoa-hoc-2',
      title: 'Khóa học 2',
      imgUrl:
        'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    },
    {
      link: 'khoa-hoc-3',
      title: 'Khóa học 3',
      imgUrl:
        'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    },
  ]
  return (
    <ModalList classAdd='w-[420px]' >
      <ListResult title='Khóa học' link='xem-them-khoa-hoc'>
        {
          dataFakes.map((dataFake,index) => {
            return <ItemResult key={index} link={dataFake.link} title={dataFake.title} imgUrl={dataFake.imgUrl} />
          })
        }
      </ListResult>
      <ListResult title='Bài viết' link='xem-them-bai-viet'>
        {
           dataFakes.map((dataFake,index) => {
            return <ItemResult key={index} link={dataFake.link} title={dataFake.title} imgUrl={dataFake.imgUrl} />
          })
        }
      </ListResult>
      <ListResult title='Video' link='xem-them-video'>
        {
           dataFakes.map((dataFake,index) => {
            return <ItemResult key={index} link={dataFake.link} title={dataFake.title} imgUrl={dataFake.imgUrl} />
          })
        }
      </ListResult>
    </ModalList>
  )
}
export default SearchResult