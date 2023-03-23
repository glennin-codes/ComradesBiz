import React from 'react';
import { ToastContainer } from 'react-toastify';

export default function Toast(time) {
  return (
    <ToastContainer
      position="top-right"
      outoClose={time}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss={false}
      draggable={false}
      pauseOnHover={false}
    />
  );
}