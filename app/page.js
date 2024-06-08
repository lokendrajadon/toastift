"use client"
import {  toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Toast from "./components/Toast";


export default function Home() {
const handleToast = (type)=>{
  toast[type](type)
}

  return (
    <>
    <Toast position="top-right" autoClose={3000}/>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
   <button
      type="button"
      onClick={()=>handleToast("success")}
      className="w-full focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 mb-4"
    >
      Success
    </button>
    <button
      type="button"
      onClick={()=>handleToast("info")}
      className="w-full focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-4"
    >
      Info
    </button>
    <button
      type="button"
      onClick={()=>handleToast("warning")}
      className="w-full focus:outline-none text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800 mb-4"
    >
      Warning
    </button>
    <button
      type="button"
      onClick={()=>handleToast("error")}
      className="w-full focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 mb-4"
    >
      Error
    </button>

</div>

    </main>
    </>
  );
}
