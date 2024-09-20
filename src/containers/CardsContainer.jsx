import Card from "../components/card/Card";
import PropTypes from "prop-types";
import useCategory from "../hooks/useCategory";
import useMenu from "../store/useMenu";
import { useMemo } from "react";

const CardsContainer = () => {
  const { filteredMenu } = useMenu();
  const { category } = useCategory();

  const memoizedFilteredMenu = useMemo(() => {
    if (category === "") {
      return filteredMenu;
    } else {
      return filteredMenu.filter((food) => food.category === category);
    }
  }, [category, filteredMenu]);

  return (
    <div className="flex flex-col w-full lg:w-[66.2%]">
      <div
        className={`
        h-12
        border-b
        border-[#BBBBBB]
        rounded-[5px]
       bg-[#CFCFCF]
        text-lg
        font-semibold
        px-3
        content-center
        uppercase
        `}
      >
        {category === "" ? "Comidas" : category}
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 my-4">
        {memoizedFilteredMenu.map((food, key) => {
          return (
            <Card
              key={key}
              id={food.id}
              title={food.title}
              price={food.price}
              description={food.description}
              image={food.image.url ? food.image.url : food.image}
              category={food.category}
              agregados={food.agregados}
            />
          );
        })}

        {/* {category === ""
          ? filteredMenu.map((food, key) => {
              return (
                <Card
                  key={key}
                  id={food.id}
                  title={food.title}
                  price={food.price}
                  description={food.description}
                  category={food.category}
                  agregados={food.agregados}
                />
              );
            })
          : filteredMenu.map((food, key) => {
              if (food.category === category)
                return (
                  <Card
                    key={key}
                    id={food.id}
                    title={food.title}
                    price={food.price}
                    description={food.description}
                    category={food.category}
                    agregados={food.agregados}
                  />
                );
              else null;
            })} */}
      </div>
    </div>
  );
};

CardsContainer.propTypes = {
  menu: PropTypes.array,
  order: PropTypes.array,
  category: PropTypes.string,
};

export default CardsContainer;
