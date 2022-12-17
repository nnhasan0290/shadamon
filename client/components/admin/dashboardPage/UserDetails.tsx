import { Form, Select, Input, Button } from "antd";
import FormInput from "../FormElements/FormInput";
import FormSelectWithFieldset from "../FormElements/FormSelectFieldset";
import FormTextArea from "../FormElements/FormTextArea";
import FormUpload from "../FormElements/FormUpload";

export default function () {
  return (
    <Form>
        <h2 className="p-1 px-3 mr-5 bg-gray-300 rounded-md">User Info</h2>
      <div className="flex flex-wrap">
        <span className="basis-1/5">
          <FormInput label="Person Name" />
        </span>
        <span className="basis-1/5">
          <FormSelectWithFieldset label="Account Status" />
        </span>
        <span className="basis-1/5">
          <FormInput label="Email" />
        </span>

        <span className="basis-1/5">
          <FormSelectWithFieldset label="Date Of Birth" />
        </span>
        <span className="basis-1/5">
          <FormSelectWithFieldset label="Gender" />
        </span>
        <span className="basis-1/5">
          <FormSelectWithFieldset label="Verification Icon" />
        </span>
        <span className="basis-1/5">
          <FormSelectWithFieldset label="Location" />
        </span>
        <span className="basis-1/5">
          <FormSelectWithFieldset label="Education" />
        </span>
        <span className="basis-1/5">
          <FormSelectWithFieldset label="Education In" />
        </span>
        <span className="basis-1/5">
          <FormSelectWithFieldset label="Current Job" />
        </span>
        <span className="basis-1/5">
          <FormSelectWithFieldset label="Job Experience" />
        </span>
        <span className="basis-1/5">
          <FormInput label="Mobile Verified" />
        </span>
        <span className="basis-1/5">
          <FormInput label="Add Mobile Number" />
        </span>
        <span className="basis-1/5">
          <FormInput label="Created At" />
        </span>
        <span className="basis-1/5">
          <FormInput label="Last Login" />
        </span>
        <span className="basis-1/5">
          <FormInput label="Created IP" />
        </span>
        <span className="basis-1/5">
          <FormInput label="Location Login Ip" />
        </span>
        <span className="basis-1/5">
          <FormInput label="Password" />
        </span>
        <span className="basis-2/5">
          <FormInput label="Full Address" />
        </span>
        <span className="basis-full">
            <FormTextArea label="Note"/>
        </span>
        <span className="basis-full">
            <p>Upload document Photo</p>
            <FormUpload/>
        </span>
        <Button className="py-1 text-white bg-red-700 basis-1/5 hover:border-none" > Cancel</Button>
        <div className="pl-3 basis-4/5">
            
        <Button className="w-full text-white bg-green-700 hover:border-none" > Save</Button>
        </div>
      </div>
    </Form>
  );
}
