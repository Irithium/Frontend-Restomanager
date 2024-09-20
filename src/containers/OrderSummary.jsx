import { useEffect, useState } from 'react';
import Button from '../components/Button';
import Order from '../components/Order';
import useCart from '../store/useCart'; 
import PropTypes from 'prop-types';
import useWaitressModal from '../hooks/useWaitressModal';
import useMesaStore from '../hooks/useMesaStore';
import axiosConfig from '../utils/axiosConfig'; 

const OrderSummary = () => {
  const { orders, clearCart } = useCart(); 
  const table = useMesaStore();
  const waitressModal = useWaitressModal();
  const [subTotal, setSubTotal] = useState(
    orders.length === 0 ? 0 : orders.reduce((acc, order) => acc + order.totalPrice, 0)
  );
  const [total, setTotal] = useState(subTotal + subTotal * 0.03);

  useEffect(() => {
    if (orders.length === 0) {
      setSubTotal(0);
      setTotal(0);
    } else {
      setSubTotal(orders.reduce((acc, order) => acc + order.totalPrice, 0));
      setTotal(subTotal + subTotal * 0.03);
    }
  }, [orders, subTotal]);

  const handleClick = () => {
    waitressModal.onOpen();
  };

  const transformOrder = (order) => {
    return {
      id_menu: order.id, 
      id_mesa: table.numeroMesa,
      agregados: order.addons.map((addon) => addon.id), 
      cantidad: order.quantity,
    };
  };

  const handleConfirmOrder = async () => {
    const transformedOrders = orders.map(transformOrder);

    try {
      await axiosConfig.post('/pedidos', transformedOrders);
      console.log('Pedido confirmado');
      clearCart(); 
    } catch (error) {
      console.error('Error al confirmar el pedido', error);
    }
  };

  return (
    <div className="hidden lg:flex flex-col w-[32.4%] justify-start items-start  ">
      {table.numeroMesa ? (
        <div className="flex-row flex h-[48px] items-center justify-start gap-6">
          <div className="font-medium bg-[#CFCFCF] rounded-lg py-2 px-[14px] h-[48px] flex items-center w-fit">
            N° de mesa
            <span className="text-2xl font-black ml-2">{table.numeroMesa}</span>
          </div>

          <button className="hover:animate-blink px-2" onClick={handleClick}>
            {/* SVG aquí */}
          </button>
        </div>
      ) : null}

      <div className="flex flex-col w-full h-fit bg-[#CFCFCF] mr-1 rounded-[15px] py-3 my-4">
        <div className="w-[95%] flex justify-center mx-auto pb-2 mb-4 border-b border-[#00000080]">
          <span className="text-sm md:text-base lg:text-lg xl:text-xl font-semibold text-center">
            Mi pedido
          </span>
        </div>

        {orders.length === 0 ? (
          <div className="px-4">
            <div className="flex items-center justify-center self-center my-2 w-1/2 h-[46px] mx-auto text-white font-semibold text-lg border rounded-xl border-[#343434] bg-[#343434]">
              No orders yet
            </div>
          </div>
        ) : (
          <div className="flex flex-col pr-2 pl-2 gap-3">
            {orders.map((food, key) => (
              <Order key={key} food={food} />
            ))}
          </div>
        )}


        <div name="bills" className="flex flex-col pl-3 pr-2 my-3">
          <div className="flex flex-row font-medium justify-between sm:text-xs md:text-sm lg:text-base xl:text-lg">
            <span>Sub-total</span>
            <span>$ {subTotal}</span>
          </div>
          <div className="flex flex-row justify-between text-sm md:text-base lg:text-lg xl:text-xl font-semibold">
            <span>Total</span>
            <span>$ {total}</span>
          </div>
        </div>

        {orders.length === 0 ? (
          <div className="w-full px-2 mx-auto">
            <Button disabled label="Confirmar pedido" />
          </div>
        ) : (
          <div className="w-full px-2 mx-auto">
            <Button label="Confirmar pedido" onClick={handleConfirmOrder} />
          </div>
        )}
      </div>
    </div>
  );
};

OrderSummary.propTypes = {
  order: PropTypes.array,
};

export default OrderSummary;
