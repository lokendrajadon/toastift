import { ToastContainer } from "react-toastify";
export default function Toast({position,autoClose}) {
  return (

    <ToastContainer position={position} autoClose={autoClose}/>
    
  );
}
