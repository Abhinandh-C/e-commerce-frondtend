import {toast}  from 'react-toastify'

export const notifySuccess = (data) =>
    toast.success(data, { position: 'top-right' });
  export const notifyError = (error) =>
    toast.error(error, { position: 'bottom-center' });
  export const notifyWarning = (error) =>
    toast.warn(error, { position: 'top-right' });
  export const notifyClear = () => {
    toast.dismiss();
  };

  