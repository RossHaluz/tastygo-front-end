import { useState } from "react";
import { createPortal } from "react-dom";
import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ data, children, styles, text, title, modalStyles }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const onCloseModal = (e) => {
    if (e.target !== e.currentTarget) {
      return;
    }
    setIsOpen(false);
  };

  return (
    <>
      <button
        className={`cursore-pointer flex items-center gap-[16px] justify-center ${styles}`}
        onClick={openModal}
      >
        {data}
        {text}
      </button>

      {isOpen &&
        createPortal(
          <div
            className="fixed w-full h-screen z-10 top-0 left-0 bg-[#151515]/[.50] flex justify-center items-center px-[10px]"
            onClick={onCloseModal}
          >
            <div
              className={`bg-[#fff] rounded-[8px] p-[48px] flex items-center justify-center flex-col  gap-[24px] overflow-y-auto w-[380px] ${modalStyles}`}
            >
              <AiOutlineClose
                className={`text-[#010101] ml-auto`}
                onClick={() => setIsOpen(false)}
              />
              <h2 className={`font-medium text-[32px] leading-[38.4px]`}>
                {title}
              </h2>
              {children}
            </div>
          </div>,
          document.querySelector("#root-modal")
        )}
    </>
  );
};

export default Modal;
