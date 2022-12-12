import {Form, Input} from "antd";

export default function({label}:any){
    return(
        <Form.Item  style={{marginBottom: 0, padding: 0}}>
          <Input.TextArea className="p-0 px-4 m-0 rows={2}" placeholder={label}></Input.TextArea>
      </Form.Item>
    )
}