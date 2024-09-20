import { useCallback, useEffect, useState } from "react";

import useOrderModal from "../../hooks/useOrderModal";
import toast from "react-hot-toast";

import { useMediaQuery } from "react-responsive";
import AgregadoBtn from "../AgregadoBtn";
import Button from "../Button";
import Image from "../orders/Image";
import useCart from "../../store/useCart";

const OrderModal = () => {
  const orderModal = useOrderModal();
  const cart = useCart();
  const { order } = orderModal;
  const [showModal, setShowModal] = useState(orderModal.isOpen);
  const [minusDisabled, setMinusDisabled] = useState(true);
  const [disabled, setDisabled] = useState(false);
  const isBigScreen = useMediaQuery({ query: "(min-width: 1024px)" });
  let [quantity, setQuantity] = useState(order.quantity);
  const [selAddons, setSelAddons] = useState([]); // Array to store selected agregados
  let [total, setTotal] = useState(
    selAddons.length > 0
      ? (order.price +
          selAddons.reduce((acc, agregado) => acc + agregado.price, 0)) *
          quantity
      : order.price * quantity
  );
  let [newUniqueKey, setNewUniqueKey] = useState("");

  const handleClose = useCallback(() => {
    // Set showModal to false and call onClose callback after a delay
    setShowModal(false);
    setSelAddons([]);
    setQuantity(1);

    orderModal.onClose();
  }, [orderModal, setShowModal]);

  const handleIncrement = useCallback(() => {
    setQuantity(quantity + 1);
  }, [quantity]);

  const handleDecrement = useCallback(() => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }, [quantity]);

  useEffect(() => {
    const handleBackButton = () => {
      handleClose();
    };

    window.history.pushState(null, null, null);
    window.addEventListener("popstate", handleBackButton);

    return () => {
      window.removeEventListener("popstate", handleBackButton);
    };
  }, [handleClose]);

  useEffect(() => {
    const newKey =
      order.id + "_" + selAddons.map((addon) => addon.name).join("_");
    setNewUniqueKey(newKey);
  }, [selAddons, order.id]);

  useEffect(() => {
    if (orderModal.isOpen) {
      setQuantity(order.quantity);
      // Agrega las clases overflow-hidden, h-screen y fixed al cuerpo del documento
      document.body.classList.add("overflow-hidden", "h-screen", "fixed");
    } else {
      // Quita las clases overflow-hidden, h-screen y fixed del cuerpo del documento
      document.body.classList.remove("overflow-hidden", "h-screen", "fixed");
    }
  }, [orderModal.isOpen, order.quantity, order.addons]);

  useEffect(() => {
    setShowModal(orderModal.isOpen);
    setTotal(
      selAddons.length > 0
        ? (order.price +
            selAddons.reduce((acc, agregado) => acc + agregado.price, 0)) *
            quantity
        : order.price * quantity
    );
  }, [orderModal.isOpen, quantity, selAddons, order.price, order.quantity]);

  useEffect(() => {
    quantity > 1 ? setMinusDisabled(false) : setMinusDisabled(true);
  }, [quantity, minusDisabled]);

  const handleEdit = useCallback(() => {
    // Calcula el precio total

    // Crea el objeto con los datos del formulario
    const plate = {
      totalPrice: total,
      addons: selAddons,
      quantity: quantity,
      uniqueKey: newUniqueKey,
    };

    try {
      // Agrega la orden al estado Cart
      cart.editDish(plate, order.uniqueKey);

      setSelAddons([]);
      setQuantity(1);

      toast.success("Se han guardado tus cambios");
      handleClose();
    } catch (error) {
      toast.error("Ha habido un error, intenta de nuevo");
      throw new Error(error);
    }
  }, [handleClose, cart, order, total, quantity, selAddons, newUniqueKey]);

  {
    /* */
  }
  const handleSubmit = useCallback(() => {
    // Calcula el precio total
    setDisabled(true);
    // Crea el objeto con los datos del formulario
    const plate = {
      id: order.id,
      title: order.title,
      price: order.price,
      totalPrice: total,
      image: order.image,
      body: order.body,
      addons: selAddons,
      agregados: order.agregados,
      quantity: quantity,
      uniqueKey: newUniqueKey,
    };

    try {
      // Agrega la orden al estado Cart
      cart.addDish(plate);

      setSelAddons([]);
      setQuantity(1);
      setDisabled(false);
      toast.success("Se ha guardado tu pedido");
      handleClose();
    } catch (error) {
      toast.error("Ha habido un error, intenta de nuevo");
      throw new Error(error);
    }
  }, [handleClose, cart, order, total, quantity, selAddons, newUniqueKey]);

  return (
    <>
      {showModal && (
        <div
          className={`
          fixed 
          inset-0
          z-50 
          outline-none 
          focus:outline-none 
          bg-black/70
          flex 
          justify-center 
          items-center  
          overflow-x-hidden
          overflow-y-auto
          
          `}
        >
          {" "}
          <div
            className={` 
              relative
              w-full  
              h-full 
              lg:w-3/4
              2xl:w-3/5    
              mx-auto 
              items-center

             `}
          >
            {/* CONTENT */}
            <div
              className={`
                translate 
                duration-300 
                h-full 
                items-center
                content-center
                ${showModal ? "translate-y-0" : "translate-y-full"} 
                ${showModal ? "opacity-100" : "opacity-0"}
                `}
            >
              <div
                className={`
                translate 
                h-full 
                lg:h-[60vh] 
                lg:max-h-[600px] 
                lg:min-h-[350px] 
                border-0 
                lg:rounded-2xl 
                shadow-lg 
                relative 
                flex 
                flex-col 
                lg:flex-row 
                w-full 
                bg-white 
                outline-none 
                focus:outline-none
                overflow-auto
                
                `}
              >
                {/* IMAGEN */}
                <Image image={order.image} title={order.title} />

                <div className="flex flex-col lg:px-6 py-4 gap-4 h-full flex-1 justify-between ">
                  {/* HEADER */}
                  <div className="flex flex-row items-center w-full h-fit justify-between relative text-2xl md:text-xl font-bold px-6 lg:px-0">
                    <div>{order.title}</div>
                    <div className="lg:flex lg:flex-row items-center justify-center">
                      <div className="text-2xl md:text-xl lg:px-2 ">
                        ${order.price}
                      </div>
                      {isBigScreen ? (
                        <button
                          name="close"
                          onClick={handleClose}
                          className="border-0 hover:opacity-70 transition relative cursor-pointer rounded-xl z-[100]"
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
                      ) : null}
                    </div>
                  </div>
                  {/* {isPhoneScreen ? null : ( */}
                  <div className="items-center">
                    <span className="text-xl md:text-base font-medium px-6 lg:px-0 w-full block lg:w-fit">
                      {order.body}
                    </span>

                    {isBigScreen ? null : (
                      <button
                        name="close"
                        onClick={handleClose}
                        className="border-0 hover:opacity-70 transition absolute lg:relative top-0 right-0 cursor-pointer rounded-md m-3 z-[100]"
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
                    )}
                  </div>
                  {/* )} */}

                  {/* ADDONS */}

                  <div
                    id="Agregados"
                    className="flex-1 flex flex-col gap-1 px-6 lg:px-0 scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-slate-300  overflow-y-scroll"
                  >
                    <div className="font-semibold text-xl ">
                      Selecciona un acompañamiento:
                    </div>
                    {order.agregados.length === 0 ? (
                      <div className=" py-3 px-2 rounded-lg bg-[#343434] text-white w-fit mx-auto my-auto text-lg xl:text-base font-medium">
                        No existen acompañamientos aún
                      </div>
                    ) : (
                      <div className="h-full">
                        <div>
                          {order.agregados.map((agregado) => {
                            return (
                              <AgregadoBtn
                                addons={order.addons}
                                agregado={agregado}
                                setSelAddons={setSelAddons}
                                key={agregado.id}
                              />
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-row w-full px-6 lg:px-0 h-fit text-lg font-semibold justify-between">
                    <span>Total:</span>{" "}
                    <span className="lg:mr-2">${total}</span>
                  </div>

                  {/* FOOTER */}
                  <div
                    id="footer"
                    className="flex flex-row border-t border-[#00000040] lg:border-none p-5 lg:p-2 gap-6 lg:gap-3 items-center md:relative"
                  >
                    <div className="w-fit flex flex-row justify-evenly items-center border border-[#6C6C6C] gap-[10px] p-2 rounded-[10px]">
                      <button
                        onClick={handleDecrement}
                        disabled={minusDisabled ? true : false}
                        className="disabled:opacity-50"
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect width="24" height="24" rx="4" fill="#F6F7F9" />
                          <rect
                            x="4"
                            y="11"
                            width="16"
                            height="2"
                            rx="1"
                            fill="black"
                          />
                        </svg>
                      </button>{" "}
                      <span className="text-lg font-semibold w-6 text-center">
                        {quantity}
                      </span>
                      <button onClick={handleIncrement}>
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect width="24" height="24" rx="4" fill="#F6F7F9" />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M11 19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19V13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H13V5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5V11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H11V19Z"
                            fill="black"
                          />
                        </svg>
                      </button>
                    </div>
                    {order.uniqueKey ? (
                      <Button
                        label="Guardar cambios"
                        onClick={handleEdit}
                        disabled={disabled}
                      />
                    ) : (
                      <Button
                        label="Agregar"
                        onClick={handleSubmit}
                        disabled={disabled}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OrderModal;
