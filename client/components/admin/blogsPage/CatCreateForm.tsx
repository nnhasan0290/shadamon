import { Button } from "antd";
import Form from "antd/es/form/Form";
import { BiPlus } from "react-icons/bi";

export default function () {
  return (
    <div className="flex">
      <div className="flex justify-between py-1 border-b shadow-sm basis-1/2">
        <div className="flex gap-2 items-center font-bold">
            <span className="p-1 text-white bg-gray-700 rounded-full">
          <BiPlus />
            </span>
          <h4>New Category</h4>
        </div>
        <div>
          <Button className="text-white bg-blue-700 hover:border-none">
            {" "}
            Save
          </Button>
          <Button className="text-white bg-gray-700 hover:border-none">
            {" "}
            cancel
          </Button>
        </div>
      </div>
    </div>
  );
}
