import {Form, Input} from "antd";

export default function({label}:any){
    return(
        <Form.Item  style={{marginBottom: 0, padding: 0}}>
        <fieldset className="common__fieldset">
          <legend className="">{label}</legend>
          <Input className="p-0 m-0"></Input>
        </fieldset>
      </Form.Item>
    )
}