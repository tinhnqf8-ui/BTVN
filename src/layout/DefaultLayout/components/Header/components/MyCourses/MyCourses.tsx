import ModalList from "../ModalList";
import { Link } from "react-router";

function MyCourses({
  openModal,
  setOpenModalHeader,
}: {
  openModal: boolean;
  setOpenModalHeader: () => void;
}) {
  const dataFakes = [
    {
      link: "khoa-hoc-1",
      title: "Khóa học 1",
      time: "Học cách đây 20 giờ trước",
      imgUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    },
    {
      link: "khoa-hoc-2",
      title: "Khóa học 2",
      time: "Học cách đây 50 giờ trước",
      imgUrl:
        "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    },
    {
      link: "khoa-hoc-3",
      title: "Khóa học 3",
      time: "Học cách đây 10 giờ trước",
      imgUrl:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    },
  ];
  return (
    <div  className="cursor-pointer relative" onClick={setOpenModalHeader}>
      <p className="text-sm font-bold">Khóa học của tôi</p>
      {openModal && (
        <ModalList classAdd="w-[380px] right-0">
          <div className="flex justify-between items-center py-2 ">
            <p className="text-sm uppercase font-semibold ">Khóa học của tôi</p>
            <div>
              <a className="text-red-400 text-sm" href="/xem-them-khoa-hoc" data-discover="true">
                Xem tất cả
              </a>
            </div>
          </div>
          <ul className="flex flex-col gap-2 py-3">
            {dataFakes.map((dataFake, index) => {
              return (
                <li key={index}>
                  <Link to={dataFake.link} className="flex">
                    <img src={dataFake.imgUrl} alt="img exam" className="rounded-lg w-28 h-16 object-cover" />
                    <div className="flex-3 flex gap-3 p-2">
                      <div className="flex flex-col gap-1">
                        <p className="font-bold text-sm">{dataFake.title}</p>
                        <p className="text-xs text-gray-400">{dataFake.time}</p>
                      </div>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </ModalList>
      )}
    </div>
  );
}

export default MyCourses;
