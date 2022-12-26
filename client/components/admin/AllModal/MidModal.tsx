import React, { useState } from "react";
import { Modal } from "antd";
import { GlobalStates } from "../../../context/ContextProvider";

const MiddleModal: React.FC = () => {
  const {modalState:{middleModalOpen, mdComponent}, modalDispatch} = GlobalStates();

  return (
    <div className="mt-10">
      {
        middleModalOpen && (

      <Modal
        footer={null}
        open={true}
        onOk={() => modalDispatch({type: "CLEAR_MD_MODAL"})}
        onCancel={() => modalDispatch({type: "CLEAR_MD_MODAL"})}
      >
       {mdComponent}
      </Modal>
        )
      }
    </div>
  );
};

export default MiddleModal;