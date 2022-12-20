import { Button, DatePicker, Divider, Form, Input, Select } from "antd";
const { Option } = Select;

export default function () {
  return (
    <div>
      <h2 className="px-2 my-1 w-full font-semibold rounded-md">Search</h2>
      <Divider className="my-1 w-full" />
      <Form className="flex flex-wrap gap-2">
        <div>
          <label htmlFor="">Product Tracking Id</label>
          <Form.Item>
            <Input placeholder="tracking Id"></Input>
          </Form.Item>
        </div>
        <div>
          <label htmlFor="">Mobile</label>
          <Form.Item>
            <Input placeholder="Mobile"></Input>
          </Form.Item>
        </div>
        <div>
          <label htmlFor="">Shop Name</label>
          <Form.Item>
            <Input placeholder="Shop Name"></Input>
          </Form.Item>
        </div>
        <div>
          <label htmlFor="">Part time</label>
          <Form.Item>
            <Select placeholder="Select">
              <Option>Buy</Option>
              <Option>Sell</Option>
              <Option>Offer</Option>
              <Option>Bid</Option>
            </Select>
          </Form.Item>
        </div>
        <div>
          <label htmlFor="">Top Search</label>
          <Form.Item>
            <Select placeholder="Top Search">
              <Option>Option</Option>
            </Select>
          </Form.Item>
        </div>
        <div>
          <label htmlFor="">Parent</label>
          <Form.Item>
            <Select placeholder="Parent">
              <Option>Option</Option>
            </Select>
          </Form.Item>
        </div>
        <div>
          <label htmlFor="">Condition</label>
          <Form.Item>
            <Select placeholder="Select">
              <Option>Option</Option>
            </Select>
          </Form.Item>
        </div>
        <div>
          <label htmlFor="">Email</label>
          <Form.Item>
            <Input placeholder="Email"></Input>
          </Form.Item>
        </div>
        <div>
          <label htmlFor="">Active Status</label>
          <Form.Item>
            <Select placeholder="Select">
              <Option>Option</Option>
            </Select>
          </Form.Item>
        </div>
        <div>
          <label htmlFor="">Edit Status</label>
          <Form.Item>
            <Select placeholder="Select">
              <Option>Option</Option>
            </Select>
          </Form.Item>
        </div>
        <div>
          <label htmlFor="">Add Slot Failed</label>
          <Form.Item>
            <Select placeholder="Select">
              <Option>Option</Option>
            </Select>
          </Form.Item>
        </div>
        <div>
          <label htmlFor="">Verify By</label>
          <Form.Item>
            <Select placeholder="Select">
              <Option>Option</Option>
            </Select>
          </Form.Item>
        </div>
        <div>
          <label htmlFor="">Category</label>
          <Form.Item>
            <Select placeholder="Select">
              <Option>Option</Option>
            </Select>
          </Form.Item>
        </div>
        <div>
          <label htmlFor="">Sub Category</label>
          <Form.Item>
            <Select placeholder="Select">
              <Option>Option</Option>
            </Select>
          </Form.Item>
        </div>
        <div>
          <label htmlFor="">Photo Accept Request</label>
          <Form.Item>
            <Select placeholder="Select">
              <Option>Option</Option>
            </Select>
          </Form.Item>
        </div>
        <div>
          <label htmlFor="">Profile Create For</label>
          <Form.Item>
            <Select placeholder="Select">
              <Option>Option</Option>
            </Select>
          </Form.Item>
        </div>
        <div>
          <label htmlFor="">Sorting Item</label>
          <Form.Item>
            <Select placeholder="Select">
              <Option>Option</Option>
            </Select>
          </Form.Item>
        </div>
        <div>
          <label htmlFor="">Location</label>
          <Form.Item>
            <Select placeholder="Select">
              <Option>Option</Option>
            </Select>
          </Form.Item>
        </div>
        <div>
          <label htmlFor="">Sub Location</label>
          <Form.Item>
            <Select placeholder="Select">
              <Option>Option</Option>
            </Select>
          </Form.Item>
        </div>
        <div>
          <label htmlFor="">Top Click</label>
          <Form.Item>
            <Select placeholder="Select">
              <Option>Option</Option>
            </Select>
          </Form.Item>
        </div>
        <div>
          <label htmlFor="">Detail Request</label>
          <Form.Item>
            <Select placeholder="Select">
              <Option>Option</Option>
            </Select>
          </Form.Item>
        </div>
        <div>
          <label htmlFor="">Ip Address</label>
          <Form.Item>
            <Input></Input>
          </Form.Item>
        </div>
        <div>
          <label htmlFor="">Delivery Type</label>
          <Form.Item>
            <Select placeholder="Select">
              <Option>Option</Option>
            </Select>
          </Form.Item>
        </div>
        <div>
          <label htmlFor="">Feature</label>
          <Form.Item>
            <Select placeholder="Select">
              <Option>Option</Option>
            </Select>
          </Form.Item>
        </div>
        <div>
          <label htmlFor="">Logged Time From</label>
          <Form.Item>
            <Input></Input>
          </Form.Item>
        </div>
        <div>
          <label htmlFor="">Logged Time To</label>
          <Form.Item>
            <Input></Input>
          </Form.Item>
        </div>
        <div>
          <label htmlFor="">Logged Time To</label>
          <Form.Item>
            <Input></Input>
          </Form.Item>
        </div>
        <div>
          <label htmlFor="">Registraton Date From</label>
          <Form.Item>
            <DatePicker />
          </Form.Item>
        </div>
        <div>
          <label htmlFor="">Registraton Date To</label>
          <Form.Item>
            <DatePicker />
          </Form.Item>
        </div>
        <div>
          <label htmlFor="">Top Report</label>
          <Form.Item>
            <Select placeholder="Select">
              <Option>Option</Option>
            </Select>
          </Form.Item>
        </div>
        <div>
          <label htmlFor="">Product Type</label>
          <Form.Item>
            <Select placeholder="Select">
              <Option>Option</Option>
            </Select>
          </Form.Item>
        </div>
        <div>
          <label htmlFor="">Packages</label>
          <Form.Item>
            <Select placeholder="Select">
              <Option>Option</Option>
            </Select>
          </Form.Item>
        </div>
        <div>
          <label htmlFor="">Top Ratings</label>
          <Form.Item>
            <Select placeholder="Select">
              <Option>Option</Option>
            </Select>
          </Form.Item>
        </div>
        <div>
          <label htmlFor="">Top Followed Page</label>
          <Form.Item>
            <Select placeholder="Select">
              <Option>Option</Option>
            </Select>
          </Form.Item>
        </div>
        <div>
          <label htmlFor="">Search by Heading/word</label>
          <Form.Item>
            <Input></Input>
          </Form.Item>
        </div>
        <div className="flex justify-between w-full">
          <div>
            <Button className="py-1 text-white bg-gray-700 hover:border-none">
              {" "}
              Both
            </Button>
            <Button className="text-white bg-gray-700 hover:border-none">
              {" "}
              Seller
            </Button>
            <Button className="text-white bg-gray-700 hover:border-none">
              {" "}
              Customer
            </Button>
          </div>
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
        <Divider className="my-1" />
      </Form>
    </div>
  );
}
