import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const handleError = (error, message) => {
  toast.error(message);
};
