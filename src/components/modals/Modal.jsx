import PropTypes from "prop-types";
import { useCallback, useEffect, useState } from "react";

const Modal = ({ isOpen, onClose, title, price, body, image, disabled }) => {
  console.log(isOpen);
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }

    // Set showModal to false and call onClose callback after a delay
    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [disabled, onClose]);

  const handleSubmit = useCallback(() => {}, []);

  return (
    <>
      {showModal && (
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-white/70">
          {" "}
          <div className=" relative w-full md:w-4/6 lg:w-3/6 xl:w-2/5 my-6 mx-auto h-full md:min-h-screen ">
            {/* CONTENT */}
            <div
              className={`
                translate
                duration-300
                h-full
                content-center
                ${showModal ? "translate-y-0" : "translate-y-full"}
                ${showModal ? "opacity-100" : "opacity-0"}
                `}
            >
              <div
                className={`
                translate h-fit lg:h-auto md:h-auto border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none
                overflow-hidden
                `}
              ></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;

Modal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  body: PropTypes.string.isRequired,
  image: PropTypes.string,
  disabled: PropTypes.bool,
};
