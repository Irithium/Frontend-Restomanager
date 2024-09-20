import Button from "../components/Button";
import useCart from "../store/useCart";

const OrderCheck = () => {
  const cartModal = useCart();

  const handleClick = () => {
    cartModal.onOpen();
  };

  return (
    <div className="border-box flex mt-auto w-full px-4 py-2 h-20 items-center bg-white border-t border-t-black/30 lg:hidden">
      <div className="w-full md:w-3/4 mx-auto cursor-pointer">
        <Button label="Ver mi pedido" onClick={() => handleClick()} />
      </div>
    </div>
  );
};

export default OrderCheck;
