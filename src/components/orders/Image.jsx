import PropTypes from "prop-types";

const Image = ({ image, title }) => {
  return (
    <div className="relative flex-1 h-[50%] lg:h-full lg:w-fit">
      {/* <div
        id="image"
        className=" bg-cover bg-center resize "
        style={{
          backgroundImage: `${image}`,
        }}
      ></div> */}
      <img src={image} alt={title} className="mx-auto h-full w-full resize" />
    </div>
  );
};

Image.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Image;
