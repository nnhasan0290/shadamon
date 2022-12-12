import React, { useState } from "react";
import { Modal } from "antd";
import { GlobalStates } from "../../../context/ContextProvider";

const AdminModal: React.FC = () => {
  const {modalState:{adminModalOpen, component}, modalDispatch} = GlobalStates();

  return (
    <div>
      {
        adminModalOpen && (

      <Modal
        centered
        footer={null}
        open={true}
        onOk={() => modalDispatch({type: "CLEAR_MODAL"})}
        onCancel={() => modalDispatch({type: "CLEAR_MODAL"})}
        width={"100%"}
      >
       {component}
      </Modal>
        )
      }
    </div>
  );
};

export default AdminModal;
