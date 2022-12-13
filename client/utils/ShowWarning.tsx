import { useEffect } from "react";
import { GlobalStates } from "../context/ContextProvider";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

export default function () {
    
  const {
    modalState: {
      warning: {
        showWarn,
        type,
        content
      },
    },modalDispatch
  } = GlobalStates();
  useEffect(() => {
    if (type) {
      switch (type) {
        case "error":
          toast.error(`${content}`);
          break;
        case "success":
          toast.success(`${content}`);
          break;
        case "loading":
          toast.loading("please wait...");
          break;
        default:
          break;
      }
    }

    
  }, [type]);

  return <ToastContainer  />;
}
