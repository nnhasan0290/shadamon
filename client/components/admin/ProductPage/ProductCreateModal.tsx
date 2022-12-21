import {
  Button,
  Checkbox,
  Divider,
  Form,
  Input,
  InputNumber,
  Select,
  Upload,
} from "antd";
import UploadComponent from "../FormElements/UploadComponent";
import { PlusOutlined } from "@ant-design/icons";
import { useState } from "react";
import ManualUpload from "./ManualUpload";
import { Carousel } from "react-responsive-carousel";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const { TextArea } = Input;
const options = {
  renderArrowPrev: (clickHandler: any, hasPrev: any, label: any) => {
    return (
      <span
        className={`arrow-left absolute top-[50%] bg-gray-500 p-2 rounded-full left-0   z-10 translate-y-[-50%] cursor-pointer text-white`}
        onClick={clickHandler}
      >
        <BsArrowLeft size={23} />
      </span>
    );
  },
  renderArrowNext: (clickHandler: any, hasNext: any, label: any) => {
    return (
      <span
        className={`arrow-right absolute top-[50%] bg-gray-500 p-2 rounded-full right-0 translate-y-[-50%] cursor-pointer text-white 
        `}
        onClick={clickHandler}
      >
        <BsArrowRight size={23} />
      </span>
    );
  },
}

export default function () {
  const { Option } = Select;
  const [imgArr, setImgArr] = useState<any>([]);
  console.log(imgArr);
  const handleCreateProduct = (values: any) => {
    setImgArr([]);
    values.img.fileList.forEach((each: any) => {
      setImgArr([...imgArr, { img: each, longImg: false }]);
    });
    values.longImg.fileList.forEach((each: any) => {
      setImgArr([...imgArr, { img: each, longImg: true }]);
    });
  };
  return (
    <div>
      <Form
        onFinish={handleCreateProduct}
        className="flex flex-wrap items-start"
      >
        <h2 className="p-2 my-3 w-full bg-gray-300 rounded-md">
          Create Product
        </h2>
        <div className="flex flex-wrap justify-between pr-5 basis-1/2">
          <Form.Item className="w-full">
            <Input placeholder="heading" />
          </Form.Item>
          <Form.Item className="w-full">
            <TextArea placeholder="Description" />
          </Form.Item>
          <div className="flex flex-wrap gap-2">
            <Form.Item>
              <Select placeholder="Category/Sub">
                <Option>Option</Option>
              </Select>
            </Form.Item>
            <Form.Item>
              <Select placeholder="Location/Sub">
                <Option>Option</Option>
              </Select>
            </Form.Item>
            <Form.Item>
              <Select placeholder="Merchants">
                <Option>Option</Option>
              </Select>
            </Form.Item>
            <Form.Item>
              <Select placeholder="Sell/Rent/Job/Bid/Offer">
                <Option>Option</Option>
              </Select>
            </Form.Item>
            <Form.Item>
              <Select placeholder="New/Used">
                <Option>Option</Option>
              </Select>
            </Form.Item>
            <Form.Item>
              <Select placeholder="Brand">
                <Option>Option</Option>
              </Select>
            </Form.Item>
            <Form.Item>
              <InputNumber placeholder="Quantity"></InputNumber>
            </Form.Item>
            <Form.Item>
              <InputNumber placeholder="Price(payable)"></InputNumber>
            </Form.Item>
            <Form.Item>
              <InputNumber placeholder="Price(old)"></InputNumber>
            </Form.Item>
            <Form.Item>
              <Select placeholder="Home Dlevary">
                <Option>Option</Option>
              </Select>
            </Form.Item>
            <Form.Item>
              <Input placeholder="Hd Amount" />
            </Form.Item>
            <div className="w-full">
              <label>Notification Dialogue</label>
              <Form.Item name="notificationDialogue">
                <Input placeholder="Name"></Input>
              </Form.Item>
            </div>
          </div>
        </div>
        <div className="flex overflow-hidden flex-wrap gap-1 pl-5 basis-1/2">
          <div>
            <label>Show Till</label>
            <Form.Item>
              <Input placeholder="Name"></Input>
            </Form.Item>
          </div>
          <div>
            <label>Create</label>
            <Form.Item>
              <Input placeholder="Name"></Input>
            </Form.Item>
          </div>
          <div>
            <label>Pub</label>
            <Form.Item>
              <Input placeholder="Name"></Input>
            </Form.Item>
          </div>
          <div>
            <label>Ordering</label>
            <Form.Item>
              <Input placeholder="Name"></Input>
            </Form.Item>
          </div>
          <div>
            <label>Slot Status</label>
            <Form.Item name="slotStatus">
              <Input placeholder="Name"></Input>
            </Form.Item>
          </div>
          <div>
            <label htmlFor="">Product Status</label>
            <Form.Item name="productStatus">
              <Select placeholder="New/Used">
                <Option>Active</Option>
                <Option>Notification</Option>
                <Option>Pause</Option>
                <Option>Review</Option>
                <Option>Delete(Reason)</Option>
                <Option>Product Atv+Msg</Option>
                <Option>Product UnAtv+Msg</Option>
              </Select>
            </Form.Item>
          </div>

          <div className="w-full">
            <label>Video Link</label>
            <Form.Item name="videoLink">
              <Input placeholder="Name"></Input>
            </Form.Item>
          </div>
          <div className="flex overflow-hidden gap-3">
            <Carousel {...options} className="w-full" centerMode={true} 
            showStatus={false} showIndicators={false} centerSlidePercentage={40} >
              <ManualUpload />
              <ManualUpload />
              <ManualUpload />
              <ManualUpload />
            </Carousel>
          </div>
        </div>
        <div className="flex gap-5 basis-full">
          <Button className="text-white bg-red-600 basis-1/3">Cancel</Button>
          <Form.Item className="basis-2/3">
            <Button
              htmlType="submit"
              className="w-full text-white bg-green-600"
            >
              Save
            </Button>
          </Form.Item>
        </div>
      </Form>

      <Form className="my-[50px] flex flex-wrap gap-3">
        <h2 className="p-2 my-3 w-full bg-gray-300 rounded-md">Premier Zone</h2>
        <p className="w-full text-blue-500">Bundle Promote</p>
        <Divider className="my-0" />
        <div>
          <label htmlFor="">Package</label>
          <Form.Item>
            <Select placeholder="package">
              <Option>Option</Option>
            </Select>
          </Form.Item>
        </div>
        <div>
          <label htmlFor="">Valid to Date</label>
          <Form.Item>
            <Input></Input>
          </Form.Item>
        </div>
        <div>
          <label htmlFor="">Add Access</label>
          <Form.Item>
            <Input></Input>
          </Form.Item>
        </div>
        <div>
          <label htmlFor="">Impression</label>
          <Form.Item>
            <Input></Input>
          </Form.Item>
        </div>
        <div>
          <label htmlFor="">Reach</label>
          <Form.Item>
            <Input></Input>
          </Form.Item>
        </div>
        <div>
          <label htmlFor="">Click</label>
          <Form.Item>
            <Input></Input>
          </Form.Item>
        </div>
        <div>
          <label htmlFor="">Slot Failed</label>
          <Form.Item>
            <Input></Input>
          </Form.Item>
        </div>
        <div>
          <label htmlFor="">Category</label>
          <Form.Item>
            <Select placeholder="package">
              <Option>Option</Option>
            </Select>
          </Form.Item>
        </div>
        <div>
          <label htmlFor="">Sub Category</label>
          <Form.Item>
            <Select placeholder="package">
              <Option>Option</Option>
            </Select>
          </Form.Item>
        </div>
        <div>
          <label htmlFor="">Sub Sub Category</label>
          <Form.Item>
            <Select placeholder="package">
              <Option>Option</Option>
            </Select>
          </Form.Item>
        </div>
        <div>
          <label htmlFor="">location</label>
          <Form.Item className="w-[250px]">
            <Select
              getPopupContainer={(trigger) => trigger.parentNode}
              mode="tags"
              placeholder="location"
            >
              <Option value="value-1">option-1</Option>
              <Option value="value-2">option-2</Option>
            </Select>
          </Form.Item>
        </div>
        <p className="w-full text-blue-500">Single Promote</p>
        <Divider className="my-0" />
        <div>
          <label htmlFor="">Package</label>
          <Form.Item>
            <Select placeholder="package">
              <Option>Option</Option>
            </Select>
          </Form.Item>
        </div>
        <div>
          <label htmlFor="">Valid to Date</label>
          <Form.Item>
            <Input></Input>
          </Form.Item>
        </div>
        <div>
          <label htmlFor="">Add Access</label>
          <Form.Item>
            <Input></Input>
          </Form.Item>
        </div>
        <div>
          <label htmlFor="">Impression</label>
          <Form.Item>
            <Input></Input>
          </Form.Item>
        </div>
        <div>
          <label htmlFor="">Reach</label>
          <Form.Item>
            <Input></Input>
          </Form.Item>
        </div>
        <div>
          <label htmlFor="">Click</label>
          <Form.Item>
            <Input></Input>
          </Form.Item>
        </div>
        <div>
          <label htmlFor="">Slot Failed</label>
          <Form.Item>
            <Input></Input>
          </Form.Item>
        </div>
        <div>
          <label htmlFor="">Category</label>
          <Form.Item>
            <Select placeholder="category">
              <Option>Option</Option>
            </Select>
          </Form.Item>
        </div>
        <div>
          <label htmlFor="">Sub Category</label>
          <Form.Item>
            <Select placeholder="Sub category">
              <Option>Option</Option>
            </Select>
          </Form.Item>
        </div>
        <div>
          <label htmlFor="">Sub Sub Category</label>
          <Form.Item>
            <Select placeholder="Sub Sub">
              <Option>Option</Option>
            </Select>
          </Form.Item>
        </div>
        <div>
          <label htmlFor="">location</label>
          <Form.Item className="w-[250px]">
            <Select
              getPopupContainer={(trigger) => trigger.parentNode}
              mode="tags"
              placeholder="location"
            >
              <Option value="value-1">option-1</Option>
              <Option value="value-2">option-2</Option>
            </Select>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
}
