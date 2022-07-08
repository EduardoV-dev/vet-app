import { toast } from 'react-toastify';

export const notifySuccess = (message: string): void => {
    toast.success(message, {
        autoClose: 3000,
        closeOnClick: true,
        pauseOnHover: true,
        position: 'top-right',
    });
};
