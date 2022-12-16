import { Form, Select, Input, Button } from "antd";
import FormInput from "../FormElements/FormInput";
import FormSelect from "../FormElements/FormSelect";
import FormTextArea from "../FormElements/FormTextArea";
import FormUpload from "../FormElements/FormUpload";

export default function () {
  return (
    <Form>
      <div className="flex flex-wrap">
        <span className="basis-1/5">
          <FormInput label="Person Name" />
        </span>
        <span className="basis-1/5">
          <FormSelect label="Account Status" />
        </span>
        <span className="basis-1/5">
          <FormInput label="Email" />
        </span>

        <span className="basis-1/5">
          <FormSelect label="Date Of Birth" />
        </span>
        <span className="basis-1/5">
          <FormSelect label="Gender" />
        </span>
        <span className="basis-1/5">
          <FormSelect label="Verification Icon" />
        </span>
        <span className="basis-1/5">
          <FormSelect label="Location" />
        </span>
        <span className="basis-1/5">
          <FormSelect label="Education" />
        </span>
        <span className="basis-1/5">
          <FormSelect label="Education In" />
        </span>
        <span className="basis-1/5">
          <FormSelect label="Current Job" />
        </span>
        <span className="basis-1/5">
          <FormSelect label="Job Experience" />
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
        <div>
          <Button className="py-1 text-white bg-red-700 hover:border-none">
            {" "}
            Hide Search
          </Button>
          <Button className="text-white bg-green-700 hover:border-none">
            {" "}
            Search
          </Button>
        </div>
      </div>
    </Form>
  );
}
