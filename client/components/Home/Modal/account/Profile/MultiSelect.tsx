import {Form, Select} from "antd";

export default function ({label}:any){
    return(
        <Form.Item   style={{marginBottom: 0, padding: 0, flexBasis: "50%",position: "relative"}}>
          <fieldset className="common__fieldset">
            <legend className="">{label}</legend>
            <Select
            bordered={false}
            getPopupContainer={trigger => trigger.parentNode}
        mode="tags"
        placeholder="Please select"
        defaultValue={['option-1']}
        style={{ width: '100%', whiteSpace: "nowrap"}}
        options={[{label: "opton-1",value: "option"},{label: "opton-2",value: "optio2"}]}
      />
          </fieldset>
        </Form.Item>
    )
}
