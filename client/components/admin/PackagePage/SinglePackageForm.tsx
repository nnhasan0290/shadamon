import { Button, Form, Typography } from "antd";
import CouponTable from "./CouponTable";
import SinglePackageTable from "./SinglePackageTable";
import SortItemPriceTable from "./SortItemTable";

export default function () {
  return (
    <>
      <Form
        onFinish={(values: any) => console.log(values)}
        className="overflow-hidden"
      >
        <div className="flex justify-between items-center">
          <Typography>Single Package</Typography>
          <Button type="primary" htmlType="submit">
            Save
          </Button>
        </div>
        <SinglePackageTable />
      </Form>
      <Form
        onFinish={(values: any) => console.log(values)}
        className="overflow-hidden"
      >
        <div className="flex justify-between items-center">
          <Typography>Category Wise Sort Item Price</Typography>
          <Button type="primary" htmlType="submit">
            Save
          </Button>
        </div>
        <SortItemPriceTable />
      </Form>
      <Form
        onFinish={(values: any) => console.log(values)}
        className="overflow-hidden"
      >
        <div className="flex justify-between items-center">
          <Typography>Category Wise Sort Item Price</Typography>
          <Button type="primary" htmlType="submit">
            Save
          </Button>
        </div>
        <CouponTable />
      </Form>
    </>
  );
}
