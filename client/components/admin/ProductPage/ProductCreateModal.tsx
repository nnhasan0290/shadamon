import {
  Button,
  Checkbox,
  DatePicker,
  Divider,
  Form,
  Image,
  Input,
  InputNumber,
  Radio,
  Select,
  Table,
  Tag,
  TreeSelect,
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
  getParentCatSubAction,
  getSubCategoriesAction,
} from "../../../redux/actions/Admin/categoryAction";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import { createProductAction } from "../../../redux/actions/Admin/productAction";
import { BiPlus } from "react-icons/bi";
const { TextArea } = Input;

export default function () {
  const { Option } = Select;
  const dispatch = useAppDispatch();
  const [form] = Form.useForm();
  const subCategoryId = Form.useWatch("subcategoryId", form);

  const {
    adminCat,
    allCat,
    locations,
    subCat,
    catUnderParent,
    featureUnderSub: {
      res: { data },
    },
    createPd,
    getParentCatSub,
  } = useAppSelector((state) => state);

  const handleCreateProduct = (values: any) => {
    let newProductImg: any = [];
    values.productImg.forEach((each: any, i: any) => {
      if (each.img) {
        each.img = each.img.file;
        newProductImg.push(each);
      }
    });

    if (values.acceptDescription === false) {
      values.acceptDescription = "reject";
    } else {
      values.acceptDescription = "accept";
    }
    if (values.videoLinkAccept === false) {
      values.videoLinkAccept = "reject";
    } else {
      values.videoLinkAccept = "accept";
    }

    values.productImg = newProductImg;
    console.log(values);
    dispatch(createProductAction(values));
  };
  useEffect(() => {
    dispatch(getFeatureUnderSubAction(subCategoryId));
  }, [subCategoryId]);
  useEffect(() => {
    dispatch(getAllCategories());
    dispatch(getLocationAction());
    dispatch(getParentCategories());
    dispatch(getParentCatSubAction());
  }, []);
  return (
    <div>
      <Form
        form={form}
        onFinish={handleCreateProduct}
        className="flex flex-wrap items-start"
      >
        <div className="flex gap-2 items-center font-bold w-full">
          <span className="p-1 text-white bg-gray-700 rounded-full">
            <BiPlus />
          </span>
          <h4>New Product</h4>
        </div>
        <Divider className="my-2" />
        <div className="flex flex-wrap justify-between pr-5 basis-1/2">
          <div className="w-full">
            <Form.Item name="heading" className="">
              <Input placeholder="heading" />
            </Form.Item>
          </div>

          <div className="w-full">
            <Form.Item name="description" className="">
              <TextArea placeholder="Description" />
            </Form.Item>
          </div>
          <div className="w-full">
            <div className="flex justify-between">
              <span></span>
              <Form.Item
                className="ml-auto"
                name={"acceptDescription"}
                valuePropName="checked"
                initialValue={"accept"}
                noStyle
              >
                <Checkbox name="acceptDescription" defaultChecked={false}>
                  Accept?
                </Checkbox>
              </Form.Item>
            </div>
            <Form.Item name="editDescription" className="">
              <TextArea placeholder="Description/edit" />
            </Form.Item>
          </div>

          <div className="flex flex-wrap gap-2">
            <div>
              <Form.Item name={"subcategoryId"}>
                <TreeSelect
                  showSearch
                  style={{ width: "100%" }}
                  dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
                  placeholder="Category"
                  allowClear
                  getPopupContainer={(trigger) => trigger.parentNode}
                >
                  {getParentCatSub?.res?.data?.map((each: any, i: any) => (
                    <TreeSelect.TreeNode
                      selectable={false}
                      value={each?.parent?.name}
                      title={each?.parent?.name}
                      key={each?.parent?.name}
                    >
                      {each?.categories?.map((cat: any, i: any) => (
                        <TreeSelect.TreeNode
                          selectable={false}
                          value={cat?.category?.categoryName}
                          title={cat?.category?.categoryName}
                          key={i}
                        >
                          {cat?.subcategories?.map((sub: any, i: any) => (
                            <TreeSelect.TreeNode
                              value={sub?._id}
                              title={sub?.subCategoryName}
                              key={sub?._id}
                            ></TreeSelect.TreeNode>
                          ))}
                        </TreeSelect.TreeNode>
                      ))}
                    </TreeSelect.TreeNode>
                  ))}
                </TreeSelect>
              </Form.Item>
            </div>
            {/* <div>
              <label htmlFor="">Parent</label>
              <Form.Item>
                <Select
                  onSelect={(id: any) => {
                    dispatch(getCategoriesUnderParentAction(id));
                  }}
                  placeholder="Parent"
                >
                  {adminCat?.res?.data?.map((each: any, i: any) => (
                    <Option value={each._id}>{each?.name}</Option>
                  ))}
                </Select>
              </Form.Item>
            </div>
            <div>
              <label htmlFor="">category</label>
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
            </div>
            <div>
              <label htmlFor="">Sub Category</label>
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
            </div> */}
            {data &&
              data[0]?.features?.map((feature: any, i: any) => (
                <div>
                  <Form.Item
                    name={["features", i, "feature"]}
                    initialValue={feature._id}
                    hidden
                  >
                    <Input />
                  </Form.Item>
                  {(feature.featureType === "radio" ||
                    feature.featureType === "select") && (
                    <Form.Item name={["features", i, "selectedOption", 0]}>
                      <Select placeholder={feature.featureName}>
                        {feature?.options?.map((option: any, i: any) => (
                          <Select.Option value={option.optionName}>
                            {option.optionName}
                          </Select.Option>
                        ))}
                      </Select>
                    </Form.Item>
                  )}
                </div>
              ))}

            <div>
              <Form.Item name={"sublocation"}>
                <TreeSelect
                  showSearch
                  style={{ width: "100%" }}
                  dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
                  placeholder="Location"
                  allowClear
                  getPopupContainer={(triggerNode: HTMLElement) =>
                    triggerNode.parentNode as HTMLElement
                  }
                >
                  {locations?.res?.data?.map((each: any, i: any) => (
                    <TreeSelect.TreeNode
                      selectable={false}
                      value={each?.location.locationName}
                      title={each.location.locationName}
                      key={i}
                    >
                      {each?.sublocations.map((sub: any, j: any) => (
                        <TreeSelect.TreeNode
                          value={sub._id}
                          title={sub.subLocationName}
                          key={j}
                        ></TreeSelect.TreeNode>
                      ))}
                    </TreeSelect.TreeNode>
                  ))}
                </TreeSelect>
              </Form.Item>
            </div>
            <div>
              <Form.Item name={"showTill"}>
                <DatePicker placeholder="Show Till"  getPopupContainer={(triggerNode: HTMLElement) =>
                    triggerNode.parentNode as HTMLElement
                  } />
              </Form.Item>
            </div>
          </div>
        </div>
        <div className="flex overflow-hidden flex-wrap gap-1 pl-5 basis-1/2">
          <div>
            <Form.Item name={"ordering"}>
              <InputNumber placeholder="Order"></InputNumber>
            </Form.Item>
          </div>
          <div>
            <Form.Item>
              <Select placeholder="slot Status">
                <Select.Option value={"ok"}>Ok</Select.Option>
                <Select.Option value={"fail"}>Fail</Select.Option>
              </Select>
            </Form.Item>
          </div>
          <div>
            <Form.Item name="productStatus">
              <Select
                placeholder="Product Status"
                getPopupContainer={(triggerNode: HTMLElement) =>
                  triggerNode.parentNode as HTMLElement
                }
              >
                <Option value="active">Active</Option>
                <Option value="inactive">Inactive</Option>
                <Option value="notification">Notification</Option>
                <Option value="pause">Pause</Option>
                <Option value="review">Review</Option>
                <Option value="delete">Delete(Reason)</Option>
                <Option value="atvMsg">Product Atv+Msg</Option>
                <Option value="unatvMsg">Product UnAtv+Msg</Option>
              </Select>
            </Form.Item>
          </div>
          <div className="w-full">
            <Form.Item name="notificationDialogue">
              <Input placeholder="Notification Dialague"></Input>
            </Form.Item>
          </div>
          <div className="w-full">
            <div className="flex justify-between">
              <span></span>
              <Form.Item
                className="ml-auto"
                name={"videoLinkAccept"}
                initialValue="accept"
                valuePropName="checked"
                noStyle
              >
                <Checkbox>Accept?</Checkbox>
              </Form.Item>
            </div>
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

          <div className="w-full flex gap-3">
            <div className="">
              <Form.Item
                initialValue={false}
                name={["productImg", 0, "longImg"]}
                valuePropName="checked"
                noStyle
              >
                <Checkbox>Long Img?</Checkbox>
              </Form.Item>
              <UploadComponent index={0} />
            </div>
            <div className="">
              <Form.Item
                initialValue={false}
                name={["productImg", 1, "longImg"]}
                valuePropName="checked"
                noStyle
              >
                <Checkbox>Long Img?</Checkbox>
              </Form.Item>
              <UploadComponent index={1} />
            </div>
            <div className="">
              <Form.Item
                initialValue={false}
                name={["productImg", 2, "longImg"]}
                valuePropName="checked"
                noStyle
              >
                <Checkbox>Long Img?</Checkbox>
              </Form.Item>
              <UploadComponent index={2} />
            </div>
            <div className="">
              <Form.Item
                initialValue={false}
                name={["productImg", 3, "longImg"]}
                valuePropName="checked"
                noStyle
              >
                <Checkbox>Long Img?</Checkbox>
              </Form.Item>
              <UploadComponent index={3} />
            </div>
            <div className="">
              <Form.Item
                initialValue={false}
                name={["productImg", 4, "longImg"]}
                valuePropName="checked"
                noStyle
              >
                <Checkbox>Long Img?</Checkbox>
              </Form.Item>
              <UploadComponent index={4} />
            </div>
          </div>
          <Table
            className="w-full"
            dataSource={[
              {
                productImg:
                  "https://images.unsplash.com/photo-1664575599730-0814817939de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
              },
            ]}
            bordered
            size="small"
          >
            <Table.Column
              align="center"
              title={"ProductImg"}
              dataIndex={"productImg"}
              key={"productImg"}
              render={(imglink) => {
                return <Image src={imglink} className="max-w-[100px]" />;
              }}
            />
            <Table.Column
              align="center"
              title={"Accept"}
              render={() => {
                return (
                  <Tag className="cursor-pointer" color="green">
                    Accept
                  </Tag>
                );
              }}
            />
            <Table.Column
              align="center"
              title={"Delete"}
              render={() => {
                return (
                  <Tag className="cursor-pointer" color="red">
                    Delete
                  </Tag>
                );
              }}
            />
          </Table>
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
