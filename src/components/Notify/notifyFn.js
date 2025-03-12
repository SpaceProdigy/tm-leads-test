import { toast } from "react-toastify";

export const notifyFn = (status, text) => {
  switch (status) {
    case "success":
      toast.success(text);
      break;
    case "warning":
      toast.warning(text);
      break;
    case "info":
      toast.info(text);
      break;
    case "error":
      toast.error(text);
      break;

    default:
      break;
  }
};

export default notifyFn;
