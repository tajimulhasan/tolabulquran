import React, { useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import './message.css';
import { Info } from '@phosphor-icons/react';

const Message = () => {
    useEffect(() => {
        const interval = setInterval(() => {
          toast.info("ফ্রি কোরান  ও নামাজ শেখার  সুবর্ণ সুযোগ! যোগাযোগ করুন +8801334757374", {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            className: "custom-toast",
            icon: <Info size={20} color="#2ab71a" />,
            progressStyle: { backgroundColor: "#2ab71a" },
        });
        }, 7000);
    
        return () => clearInterval(interval);
      }, []);

    return (
        <div>
           <ToastContainer />
        </div>
    );
};

export default Message;