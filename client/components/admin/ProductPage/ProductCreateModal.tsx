import { Button, Divider, Form, Input, InputNumber, Select } from "antd";
import UploadComponent from "../FormElements/UploadComponent";

const {TextArea} = Input;

export default function () {
  const { Option } = Select;
  return (
    <div>
      <Form className="flex gap-[50px] items-start">
        <div className="p-1 basis-1/2">
          <Form.Item>
            <Input placeholder="heading" />
          </Form.Item>
          <Form.Item>
            <TextArea placeholder="Description" />
          </Form.Item>
          <Form.Item>
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
              <Select placeholder="Product Stats">
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
            <div className="flex gap-5 w-full">
              <Button className="text-white bg-red-600 basis-1/3">
                Cancel
              </Button>
              <Button className="text-white bg-green-600 basis-2/3">
                Save
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-1 p-1 basis-1/2">
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
            <Form.Item>
              <Input placeholder="Name"></Input>
            </Form.Item>
          </div>
          <div className="w-full">
            <UploadComponent/>
          </div>
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
