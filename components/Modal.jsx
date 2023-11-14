import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ data, children, styles, text, title }) => {
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
        className={`cursore-pointer border border-solid flex items-center gap-[16px] justify-center ${styles}`}
        onClick={openModal}
      >
        {data}
        {text}
      </button>

      {isOpen && (
        <div
          className="fixed w-full h-full top-0 left-0 bg-[#151515]/[.50] flex justify-center items-center px-[10px]"
          onClick={onCloseModal}
        >
          <div
            className={`bg-[#fff] rounded-[8px] p-[24px] relative flex flex-col gap-[24px] w-[380px]`}
          >
            <h2
              className={`text-[#161616] font-medium text-[18px] tracking-[-0.36px]`}
            >
              {title}
            </h2>
            {children}
            <AiOutlineClose
              className={`text-[#161616] absolute top-[18.5px] right-[18.5px]`}
              onClick={() => setIsOpen(false)}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
