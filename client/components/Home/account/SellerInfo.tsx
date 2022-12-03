import React from "react";
import { Button, Checkbox, Form, Input, Select } from "antd";

const SellerInfo: React.FC = () => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <div className="flex ">
        <Form.Item  style={{marginBottom: 0, padding: 0, flexBasis: "50%"}}>
          <fieldset className="common__fieldset">
            <legend className="">Shop Name</legend>
            <Input className="m-0 p-0"></Input>
          </fieldset>
        </Form.Item>
        <Form.Item   style={{marginBottom: 0, padding: 0, flexBasis: "50%",position: "relative"}}>
          <fieldset className="common__fieldset">
            <legend className="">Shop Name</legend>
            <Select
            bordered={false}
            getPopupContainer={trigger => trigger.parentNode}
        mode="tags"
        placeholder="Please select"
        defaultValue={['option-1']}
        style={{ width: '100%'}}
        options={[{label: "opton-1",value: "option"},{label: "opton-2",value: "optio2"}]}
      />
          </fieldset>
        </Form.Item>
      </div>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SellerInfo;
