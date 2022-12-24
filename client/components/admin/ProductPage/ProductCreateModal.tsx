import {
  Button,
  Checkbox,
  Divider,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Upload,
} from "antd";
import UploadComponent from "../FormElements/UploadComponent";
import { PlusOutlined, MinusCircleOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import ManualUpload from "./ManualUpload";
import { Carousel } from "react-responsive-carousel";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import {
  getAllCategories,
  getCategoriesUnderParentAction,
  getFeatureUnderSubAction,
  getLocationAction,
  getParentCategories,
  getSubCategoriesAction,
} from "../../../redux/actions/Admin/categoryAction";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import { createProductAction } from "../../../redux/actions/Admin/productAction";

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
};

export default function () {
  const { Option } = Select;
  const [imgArr, setImgArr] = useState<any>([]);
  console.log(imgArr);
  const dispatch = useAppDispatch();
  const [form] = Form.useForm();
  const staticValue = [{ formItem1: "value1", formItem2: "value2" }];

  const {
    adminCat,
    allCat,
    locations,
    subCat,
    catUnderParent,
    featureUnderSub,
    createPd,
  } = useAppSelector((state) => state);
  console.log(createPd);

  const handleCreateProduct = (values: any) => {
    const data = { ...values, productImg: imgArr };
    console.log(data);
    dispatch(createProductAction(data));
  };
  useEffect(() => {
    dispatch(getAllCategories());
    dispatch(getLocationAction());
    dispatch(getParentCategories());
  }, []);
  return (
    <div>
      <Form
        form={form}
        onFinish={handleCreateProduct}
        className="flex flex-wrap items-start"
      >
        <h2 className="p-2 my-3 mr-10 w-full bg-gray-300 rounded-md">
          Create Product
        </h2>
        <div className="flex flex-wrap justify-between pr-5 basis-1/2">
          <Form.Item name="heading" className="w-full">
            <Input placeholder="heading" />
          </Form.Item>

          <Form.Item name="description" className="w-full">
            <TextArea placeholder="Description" />
          </Form.Item>
          <Form.Item className="w-full">
            <TextArea placeholder="Description/Edit" />
          </Form.Item>
          <Form.Item name="address" className="w-full">
            <Input placeholder="address" />
          </Form.Item>
          <div className="flex flex-wrap gap-2">
            <Form.Item>
              <Select
                onSelect={(id: any) => {
                  dispatch(getCategoriesUnderParentAction(id));
                }}
                placeholder="Parent"
              >
                {adminCat?.res?.data?.map((each: any, i: any) => (
                  <Option value={each._id}>{each.name}</Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item name="categoryId">
              <Select
                onSelect={(id: any) => {
                  dispatch(getSubCategoriesAction(id));
                }}
                placeholder="Categories"
              >
                {catUnderParent?.res?.data?.map((each: any, i: any) => (
                  <Option value={each._id}>{each.categoryName}</Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item name={"subCategory"}>
              <Select
                onChange={(id: any) => dispatch(getFeatureUnderSubAction(id))}
                placeholder="SubCategory"
              >
                {subCat?.res?.data?.map((each: any, i: any) => (
                  <Option key={each._id}>{each.subCategoryName}</Option>
                ))}
              </Select>
            </Form.Item>
            {featureUnderSub?.res?.data && (
              <>
                {featureUnderSub?.res?.data[0].features?.map(
                  (feature: any, i: any) => (
                    <div>
                      <label>{feature.featureName}</label>
                      <Form.Item
                        name={["features", i,"feature"]}
                        initialValue={feature.featureName}
                        hidden
                      >
                        <Input />
                      </Form.Item>
                      {feature.featureType === "radio" && (
                        <Form.Item name={["features", i, "selectedOption",0]}>
                          <Radio.Group>
                            {feature?.options?.map((option: any, i: any) => (
                              <Radio value={option._id}>
                                {option.optionName}
                              </Radio>
                            ))}
                          </Radio.Group>
                        </Form.Item>
                      )}
                    </div>
                  )
                )}
              </>
            )}
            {/* {featureUnderSub?.res?.data && (
              <Form.List name={"features"} >
                {(fields) => (
                  <div>
                    {featureUnderSub?.res?.data[0].features.map(
                      (field: any, i:any) => (
                        <>
                          <Form.Item {...field} name={["feature", i]}>
                            <Input placeholder="field 1" />
                          </Form.Item>
                          <Form.Item {...field} name={["feature", i]} className="absolute">
                            <Input hidden value={field.featureName} placeholder="field 1" />
                          </Form.Item>
                          </>
                      )
                    )}
                  </div>
                )}
              </Form.List>
            )} */}

            <Form.Item name={"location"}>
              <Select placeholder="Location">
                {locations?.res?.data?.map((each: any, i: any) => (
                  <Option value={each._id}>{each.name}</Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item name={"quantity"}>
              <InputNumber placeholder="Quantity"></InputNumber>
            </Form.Item>
            <Form.Item name={"payablePrice"}>
              <InputNumber placeholder="Price(payable)"></InputNumber>
            </Form.Item>
            <Form.Item name={"oldPrice"}>
              <InputNumber placeholder="Price(old)"></InputNumber>
            </Form.Item>
            <Form.Item name={"homeDelivery"}>
              <Input placeholder="Hd Amount" />
            </Form.Item>
            <div>
              <label>Show Till</label>
              <Form.Item>
                <Input disabled placeholder="Name"></Input>
              </Form.Item>
            </div>
            <div>
              <label>Create</label>
              <Form.Item>
                <Input disabled placeholder="Name"></Input>
              </Form.Item>
            </div>
            <div>
              <label>Pub</label>
              <Form.Item>
                <Input disabled placeholder="Name"></Input>
              </Form.Item>
            </div>
          </div>
        </div>
        <div className="flex overflow-hidden flex-wrap gap-1 pl-5 basis-1/2">
          <div>
            <label>Ordering</label>
            <Form.Item>
              <InputNumber placeholder="Ordering"></InputNumber>
            </Form.Item>
          </div>
          <div>
            <label>Slot Status</label>
            <Form.Item name="slotStatus">
              <Input placeholder="Slot"></Input>
            </Form.Item>
          </div>
          <div>
            <label htmlFor="">Product Status</label>
            <Form.Item name="productStatus">
              <Select placeholder="New/Used">
                <Option value="active">Active</Option>
                <Option value="notification">Notification</Option>
                <Option value="pause">Pause</Option>
                <Option value="review">Review</Option>
                <Option value="delete">Delete(Reason)</Option>
                <Option value="atv+msg">Product Atv+Msg</Option>
                <Option value="unatv+msg">Product UnAtv+Msg</Option>
              </Select>
            </Form.Item>
          </div>
          <div className="w-full">
            <label>Notification Dialogue</label>
            <Form.Item name="notificationDialogue">
              <Input placeholder="Name"></Input>
            </Form.Item>
          </div>
          <div className="w-full">
            <label>Video Link</label>
            <Form.Item name="videoLink">
              <Input placeholder="Name"></Input>
            </Form.Item>
          </div>
          <div className="">
            <label>Total</label>
            <div className="flex gap-1">
              <Form.Item>
                <InputNumber disabled placeholder="impression"></InputNumber>
              </Form.Item>
              <Form.Item>
                <InputNumber disabled placeholder="reach"></InputNumber>
              </Form.Item>
              <Form.Item>
                <InputNumber disabled placeholder="click"></InputNumber>
              </Form.Item>
            </div>
          </div>
          <div className="">
            <label>Normal</label>
            <div className="flex gap-1">
              <Form.Item>
                <InputNumber disabled placeholder="impression"></InputNumber>
              </Form.Item>
              <Form.Item>
                <InputNumber disabled placeholder="reach"></InputNumber>
              </Form.Item>
              <Form.Item>
                <InputNumber disabled placeholder="click"></InputNumber>
              </Form.Item>
            </div>
          </div>
          <div className="">
            <label>Paid</label>
            <div className="flex gap-1">
              <Form.Item>
                <InputNumber disabled placeholder="impression"></InputNumber>
              </Form.Item>
              <Form.Item>
                <InputNumber disabled placeholder="reach"></InputNumber>
              </Form.Item>
              <Form.Item>
                <InputNumber disabled placeholder="click"></InputNumber>
              </Form.Item>
            </div>
          </div>
          <div className="flex overflow-hidden gap-3 mb-3">
            <Carousel
              {...options}
              className="w-full"
              centerMode={true}
              showStatus={false}
              showIndicators={false}
              centerSlidePercentage={40}
            >
              <ManualUpload imgArr={imgArr} setImgArr={setImgArr} />
              <ManualUpload imgArr={imgArr} setImgArr={setImgArr} />
              <ManualUpload imgArr={imgArr} setImgArr={setImgArr} />
              <ManualUpload imgArr={imgArr} setImgArr={setImgArr} />
              <ManualUpload imgArr={imgArr} setImgArr={setImgArr} />
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
