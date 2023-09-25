import { useLoaderData } from "react-router-dom";
import Toast from "../../components/Toast ";
import { useEffect, useState } from "react";
import useDonate from "../../hooks/useDonate";

const DonationDetails = () => {
  const data = useLoaderData();
  const { title, picture, description, text_btn_bg, price } = data || {};

  const [showToast, setShowToast] = useState({
    isOpen: false,
    message: "",
    status: "success",
  });

  const [donets, setDonate] = useDonate();

  const clearMessages = () => {
    setTimeout(() => {
      setShowToast({ isOpen: false, message: "" });
    }, 3000);
  };

  useEffect(() => {
    if (showToast.isOpen) {
      clearMessages();
    }
  }, [showToast]);

  const handleDonate = () => {
    const findDonate = donets?.find((item) => item.id === data.id);
    if (!findDonate) {
      setDonate(data);
      setShowToast({ isOpen: true, message: "Donate successfully complete" });
    }
    if (findDonate)
      setShowToast({
        isOpen: true,
        status: "error",
        message: "Already donated !",
      });
  };

  return (
    <div className=" my-10 mb-16">
      <Toast
        status={showToast.status}
        message={showToast.message}
        isOpen={showToast.isOpen}
      />
      <div className="w-full h-72 lg:h-[700px] relative">
        <img
          src={picture}
          alt={title}
          className="w-full h-72 lg:h-[700px] rounded-lg"
        />
        <button
          onClick={handleDonate}
          style={{ backgroundColor: text_btn_bg }}
          className=" absolute rounded-md cursor-pointer bottom-4 lg:bottom-10 left-5 lg:left-16 px-3 py-2 font-semibold text-white">
          Donate {price}
        </button>
      </div>
      <h1 className=" font-bold text-4xl my-4">{title}</h1>
      <p className=" text-base font-normal text-zinc-600">{description}</p>
    </div>
  );
};

export default DonationDetails;
