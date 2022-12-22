import { FileImageOutlined, EyeOutlined } from "@ant-design/icons";
import { HiHandRaised } from "react-icons/hi2";
import { GrClose } from "react-icons/gr";
import { useEffect, useRef, useState } from "react";
import { Checkbox, Modal } from "antd";
import { BiCheck } from "react-icons/bi";

const ManualUpload = ({ imgArr, setImgArr }: any) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const uploadRef = useRef<any>();
  const [long, setLong] = useState<any>(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const [inputImg, setInputImg] = useState<any>(null);
  const [file, setFile] = useState<any>({});

  const fileUpload = (e: any) => {
    const files = Array.from(e.target.files);
    setFile(files[0]);
    if (files[0]) {
      setImgArr([...imgArr, { img: files[0], longImg: long }]);
    }
    setInputImg([]);

    files.forEach((each: any) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setInputImg(reader.result);
        }
      };
      reader.readAsDataURL(each);
    });
  };

  return (
    <div className="mr-5">
      <div className="flex justify-between">
        <input
          ref={uploadRef}
          onChange={fileUpload}
          className="w-[90px] overflow-hidden cursor-pointer"
          type="file"
          title=""
          name=""
          id=""
        />
        <div className="flex gap-1 items-center">
          <span className="whitespace-nowrap">Long Img?</span>
          <Checkbox
            onChange={() => {
              if (file) {
                setLong(!long);
                const filtered = imgArr.filter(
                  (each: any) => each.img.name !== file.name
                );
                setImgArr([...filtered, { img: file, longImg: !long }]);
              }
            }}
          ></Checkbox>
        </div>
      </div>
      <div className="w-full h-[150px] pt-1 rounded-md ">
        {inputImg ? (
          <div className="relative w-full h-full">
            <img
              src={inputImg}
              alt=""
              className="object-cover w-full h-full rounded-md"
            />
            <div className="flex absolute top-0 left-0 gap-1 justify-end w-full h-full">
              <div className="rounded-md upload__btn border w-[30px] h-[30px] bg-black/30">
                <HiHandRaised color="white" size={22} />
              </div>
              <div className="rounded-md upload__btn border hover:border-green-700 hover:border bg-black/30 w-[30px] h-[30px]">
                <BiCheck color="green" size={30} />
              </div>
              <div
                onClick={() => {
                  const filtered = imgArr.filter(
                    (each: any) => each.img.name !== file.name
                  );
                  setImgArr(filtered);
                  setInputImg(null);
                  setFile(null);
                  setLong(false);
                  uploadRef.current.value = null;
                }}
                className="rounded-md border bg-black/30 upload__btn h-[30px] hover:bg-red-600 w-[30px] text-white"
              >
                <GrClose color="red" />
              </div>
            </div>
            <div
              onClick={showModal}
              className="absolute text-white top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%] upload__btn bg-black/30"
            >
              <EyeOutlined />
            </div>
            <Modal
              width={800}
              title="Basic Modal"
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <img src={inputImg} className="max-w-full" alt="" />
            </Modal>
          </div>
        ) : (
          <div
            className="flex justify-center items-center w-full h-full rounded-md border cursor-pointer"
            onClick={() => uploadRef.current.click()}
          >
            <FileImageOutlined style={{ fontSize: "32px" }} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ManualUpload;
