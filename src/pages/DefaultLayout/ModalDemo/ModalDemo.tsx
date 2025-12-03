import Modal from "@/components/Modal";
import React, { useState } from "react";

function ModalDemo() {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  return (
    <>
      <button
        onClick={() => {
          setIsOpenModal(true);
        }}
      >
        Open Modal
      </button>
      <Modal
        isOpen={isOpenModal}
        onAfterOpen={() => {
          console.log("onAfterOpen");
        }}
        onRequestClose={() => {
          setIsOpenModal(false);
          console.log("onRequestClose");
        }}
      >
        <h2>Modal Content</h2>
        <p>Đây là nội dung modal</p>
        <button onClick={() => setIsOpenModal(false)}>Đóng</button>
      </Modal>
    </>
  );
}

export default ModalDemo;
