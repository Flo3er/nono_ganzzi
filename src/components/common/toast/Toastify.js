import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toastify = ({ text }) => {
  const notify = () => {
    toast.success(text, {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 2000,
      hideProgressBar: true
    });
  };
  return (
    <div>
      <button onClick={notify}>toast</button>
      <ToastContainer />
    </div>
  );
};

export default Toastify;
