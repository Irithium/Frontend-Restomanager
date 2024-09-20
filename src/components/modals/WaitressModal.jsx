import { useCallback, useEffect, useState } from "react";
import useWaitressModal from "../../hooks/useWaitressModal";
import useMesaStore from "../../hooks/useMesaStore"; 
import axiosConfig from "../../utils/axiosConfig"; 
import Button from "../Button";

const WaitressModal = () => {
  const waitressModal = useWaitressModal();
  const id_mesa = useMesaStore((state) => state.id_mesa); 
  const [showModal, setShowModal] = useState(waitressModal.isOpen);
  const [callSuccess, setCallSuccess] = useState(false); 
  const [billSuccess, setBillSuccess] = useState(false); 

  useEffect(() => {
    setShowModal(waitressModal.isOpen);
  }, [waitressModal.isOpen]);

  const handleClose = useCallback(() => {
    setShowModal(false);
    setCallSuccess(false); 
    setBillSuccess(false); 
    setTimeout(() => {
      waitressModal.onClose();
    }, 300);
  }, [waitressModal]);

  // Función para llamar al mozo
  const handleCallWaitress = async () => {
    const numeroMesa = useMesaStore.getState().numeroMesa; 
    console.log("numeroMesa (llamar mozo):", numeroMesa); 
    try {
      const response = await axiosConfig.post("/mozocall", { id_mesa: numeroMesa });
      console.log("Llamada al mozo registrada:", response.data);
      setCallSuccess(true); 
      setTimeout(() => {
        handleClose(); 
      }, 1000); 
    } catch (error) {
      console.error("Error al llamar al mozo:", error);
    }
  };

  // Función para pedir la cuenta
  const handleRequestBill = async () => {
    const numeroMesa = useMesaStore.getState().numeroMesa; 
    console.log("numeroMesa (pedir cuenta):", numeroMesa);  
    try {
      const response = await axiosConfig.post("/mozocall/cuenta", { id_mesa: numeroMesa });
      console.log("Solicitud de cuenta registrada:", response.data);
      setBillSuccess(true); 
      setTimeout(() => {
        handleClose(); 
      }, 1000); 
    } catch (error) {
      console.error("Error al pedir la cuenta:", error);
    }
  };

  return (
    <>
      {showModal && (
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-black/70">
          <div className="relative w-full md:w-4/6 lg:w-3/6 xl:w-2/5 my-6 mx-auto h-full md:min-h-screen">
            {/* CONTENT */}
            <div
              className={`translate duration-300 h-full content-center ${showModal ? "translate-y-0" : "translate-y-full"} ${showModal ? "opacity-100" : "opacity-0"}`}
            >
              <div className="translate h-fit lg:h-auto md:h-auto border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="static flex flex-col p-6 space-y-4 h-2/4">
                  <span className="block border-b border-b-black/70 pb-2 text-2xl font-bold text-center">Mozo</span>
                  <div className="flex flex-col space-y-4 w-1/2 mx-auto">
                    {/* Botón para llamar al mozo */}
                    <Button
                      label={callSuccess ? "Llamado!" : "Llamar al mozo"}
                      onClick={handleCallWaitress}
                      className={`transition-all duration-1000 ease-in-out ${callSuccess ? "bg-green-500 text-white transform translate-x-2" : "bg-gray-200"}`}
                    />
                    {/* Botón para pedir la cuenta */}
                    <Button
                      label={billSuccess ? "Solicitando!" : "Pedir cuenta"}
                      onClick={handleRequestBill}
                      className={`transition-all duration-1000 ease-in-out ${billSuccess ? "bg-green-500 text-white transform translate-x-2" : "bg-gray-200"}`}
                    />
                  </div>
                  <button
                    name="close"
                    onClick={handleClose}
                    className="border-0 hover:opacity-70 transition absolute top-0 right-0 cursor-pointer rounded-md m-3 z-[100]"
                  >
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="p-1 rounded-xl"
                    >
                      <rect width="48" height="48" fill="white" />
                      <path
                        d="M35.4093 12.5907C34.6216 11.8031 33.3446 11.8031 32.5569 12.5907L24 21.1477L15.443 12.5907C14.6554 11.8031 13.3784 11.8031 12.5907 12.5907C11.8031 13.3784 11.8031 14.6554 12.5907 15.4431L21.1477 24L12.5907 32.5569C11.8031 33.3446 11.8031 34.6216 12.5907 35.4093C13.3784 36.1969 14.6554 36.1969 15.4431 35.4093L24 26.8523L32.5569 35.4093C33.3446 36.1969 34.6216 36.1969 35.4093 35.4093C36.1969 34.6216 36.1969 33.3446 35.4093 32.5569L26.8523 24L35.4093 15.4431C36.1969 14.6554 36.1969 13.3784 35.4093 12.5907Z"
                        fill="black"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WaitressModal;
