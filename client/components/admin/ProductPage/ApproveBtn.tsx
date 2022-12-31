import { Button } from "antd";
import { useEffect } from "react";
import { approvePdImgAction } from "../../../redux/actions/Admin/productAction";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";

export default function ({ record, index }: any) {
  const dispatch = useAppDispatch();
  const {
    approvePdImg: { success },
  } = useAppSelector((state) => state);
 
  return (
    <Button
    key={record?.productImgs[index]?._id}
      onClick={() =>
        dispatch(
          approvePdImgAction({
            id: record?.productImgs[index]?._id,
            approved: record?._id,
          })
        )
      }
      className="flex w-[93%] justify-center items-center"
    >
      {success ? "Approved" : "Approve"}
    </Button>
  );
}
