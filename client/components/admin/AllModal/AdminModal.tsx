import React, { useState } from "react";
import { Button, Modal } from "antd";
import { Form, Select, Input } from "antd";
import FormInput from "./FormInput";
import FormMultiSelect from "./FormMultiSelect";
import FormSelect from "./FormSelect";

const AdminModal: React.FC = () => {
  const [open, setOpen] = useState(true);

  return (
    <div>
      <Modal
        title="Modal 1000px width"
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={"100%"}
      >
        <Form>
          <div className="flex flex-wrap">
            <span className="basis-1/4">
              <FormInput label="Person Name" />
            </span>
            <span className="basis-1/4">
              <FormMultiSelect />
            </span>
            <span className="basis-1/4">
              <FormSelect />
            </span>
          </div>
        </Form>
      </Modal>
    </div>
  );
};

export default AdminModal;
