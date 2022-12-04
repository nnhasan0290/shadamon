import {Form, Input} from "antd";

export default function(){
    return(
        <Form.Item  style={{marginBottom: 0, padding: 0, flexBasis: "50%"}}>
        <fieldset className="common__fieldset">
          <legend className="">Shop Name</legend>
          <Input className="m-0 p-0"></Input>
        </fieldset>
      </Form.Item>
    )
}