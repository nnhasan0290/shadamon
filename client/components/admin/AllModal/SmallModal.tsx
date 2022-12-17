import React, { useState } from "react";
import { Modal } from "antd";
import { GlobalStates } from "../../../context/ContextProvider";

const SmallModal: React.FC = () => {
  const {modalState:{smallModalOpen, smComponent}, modalDispatch} = GlobalStates();

  return (
    <div className="mt-10">
      {
        smallModalOpen && (

      <Modal
        centered
        footer={null}
        open={true}
        onOk={() => modalDispatch({type: "CLEAR_SM_MODAL"})}
        onCancel={() => modalDispatch({type: "CLEAR_SM_MODAL"})}
        width={"30%"}
      >
       {smComponent}
      </Modal>
        )
      }
    </div>
  );
};

export default SmallModal;