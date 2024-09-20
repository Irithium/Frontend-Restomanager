import PropTypes from "prop-types";
import useOrderModal from "../../hooks/useOrderModal";

const Card = ({
  id,
  title,
  price,
  image,
  description,
  category,
  agregados,
}) => {
  const orderModal = useOrderModal();

  const handleClick = () => {
    const newOrder = {
      id: id,
      title: title,
      price: price,
      body: description,
      image: image ? image : "",
      agregados: agregados ? agregados : [],
    };
    orderModal.setInfo(newOrder);
    orderModal.onOpen();
  };

  return (
    <div
      className={`
    shadow-md
    rounded-xl
    overflow-hidden
    bg-warmGray-100
    `}
      id={id}
      name={category}
      onClick={() => handleClick()}
    >
      {" "}
      <div className="relative ">
        <img
          src={
            image === "https://fakeurl.com/imagen1"
              ? "https://i.pinimg.com/564x/07/21/32/072132759e23ee009f4f9ba04bdc8845.jpg"
              : image
          }
          className={`
          w-full 
          h-[150px]
          resize
          
         `}
        />
        {/* <svg
          width="66"
          height="66"
          viewBox="0 0 66 66"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          name="Add"
          className="absolute top-0 right-0 cursor-pointer"
        >
          <path
            d="M54 33C54 44.598 44.598 54 33 54C21.402 54 12 44.598 12 33C12 21.402 21.402 12 33 12C44.598 12 54 21.402 54 33Z"
            fill="#252525"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M33 25C31.8954 25 31 25.8954 31 27V31H27C25.8954 31 25 31.8954 25 33C25 34.1046 25.8954 35 27 35H31V39C31 40.1046 31.8954 41 33 41C34.1046 41 35 40.1046 35 39V35H39C40.1046 35 41 34.1046 41 33C41 31.8954 40.1046 31 39 31H35V27C35 25.8954 34.1046 25 33 25Z"
            fill="white"
          />
        </svg> */}
      </div>
      <div
        className={`
        flex
        flex-col
        gap-2
        px-3
        py-2
        lg:h-[142px]
       justify-evenly
        `}
      >
        <h2
          className={`
        sm:text-sm
        lg:text-lg
        2xl:text-xl
        font-semibold
        line-clamp-1
        text-ellipsis
        overflow-clip
        `}
        >
          {title}
        </h2>
        <div className="overflow-clip text-ellipsis line-clamp-2 text-xs md:text-sm ">
          {description}
        </div>
        <div className="rounded-lg bg-warmGray-300 p-1 w-[78px] text-center font-semibold">
          ${price}
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string,
  description: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  agregados: PropTypes.array.isRequired,
};

export default Card;
