import {
  Button,
  Divider,
  Form,
  Input,
  InputNumber,
  Radio,
  Typography,
} from "antd";
import { useEffect } from "react";
import { BiPlus } from "react-icons/bi";
import { GlobalStates } from "../../../context/ContextProvider";
import {
  getAllCategories,
  getParentCategories,
} from "../../../redux/actions/Admin/categoryAction";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import FormInput from "../FormElements/FormInput";
import FormSelect from "../FormElements/FormSelect";
import SmallCreateCat from "./SmallCreateCat";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import FormMultiSelect from "../FormElements/FormMultiSelect";

export default function () {
  const dispatch = useAppDispatch();
  const { res } = useAppSelector((state) => state.adminCat);
  const { allCat } = useAppSelector((state) => state);
  const { modalDispatch } = GlobalStates();

  const options: any = [];
  useEffect(() => {
    dispatch(getParentCategories());
  }, []);
  useEffect(() => {
    dispatch(getAllCategories());
  }, []);
  return (
    <div className="flex">
      <div className="flex flex-wrap justify-between py-1 border-b shadow-sm basis-1/2">
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
        <Divider />
        <Form className="flex flex-wrap justify-between basis-full">
          <div className="basis-[250px]">
            <FormSelect optionsObj={res?.data} placeholder="parent" label="" />
          </div>
          <div className="basis-[250px]">
            <FormMultiSelect />
          </div>

          <div className="flex gap-3 justify-between basis-[250px]">
            <div className="w-full">
              <FormSelect
                label=""
                optionsObj={allCat?.res?.data}
                placeholder="Categories"
              />
            </div>
            <div className="py-1">
              <Button
                className="text-white bg-blue-700 hover:border-none"
                onClick={() =>
                  modalDispatch({
                    type: "SMALL_MODAL",
                    payload: <SmallCreateCat parentCat={res?.data} />,
                  })
                }
              >
                {" "}
                Add New
              </Button>
            </div>
          </div>
          <div className="basis-[250px]">
            <InputNumber placeholder="Ordering" className="w-full"></InputNumber>
          </div>
          <div className="basis-[250px]">
            <Form.List
              name="names"
            >
              {(fields, { add, remove }, { errors }) => (
                <>
                  {fields.map((field, index) => (
                    <Form.Item required={false} key={field.key} className="">
                      <div className="flex gap-2 items-center">
                        <Form.Item
                          className=""
                          {...field}
                          validateTrigger={["onChange", "onBlur"]}
                          rules={[
                            {
                              required: true,
                              whitespace: true,
                              message: "Please input field.",
                            },
                          ]}
                          noStyle
                        >
                          <Input placeholder="SubCategory name" />
                        </Form.Item>
                        {fields.length > 1 ? (
                          <MinusCircleOutlined
                            className="dynamic-delete-button"
                            onClick={() => remove(field.name)}
                          />
                        ) : null}
                      </div>
                    </Form.Item>
                  ))}
                  <Form.Item>
                    <Button
                      className="hover:bg-blue-600"
                      type="dashed"
                      onClick={() => add()}
                      icon={<PlusOutlined />}
                    >
                      Add SubCategory
                    </Button>
                    <Form.ErrorList errors={errors} />
                  </Form.Item>
                </>
              )}
            </Form.List>
          </div>
          <div className="basis-[250px] flex justify-between">
            <Typography>Status</Typography>
            <Radio.Group name="radiogroup" defaultValue={1}>
              <Radio value={1}>Yes</Radio>
              <Radio value={2}>No</Radio>
            </Radio.Group>
          </div>
        </Form>
      </div>
    </div>
  );
}
