import PropTypes from "prop-types";
import SearchBar from "../components/SearchBar";
import { useNavigate } from "react-router-dom";

import CategoryBox from "../components/CategoryBox";
import { useCallback, useEffect, useState } from "react";
import useCategory from "../hooks/useCategory";
import useMesaStore from "../hooks/useMesaStore";
import { useMediaQuery } from "react-responsive";

const Navbar = ({ categories }) => {
  const isPhoneScreen = useMediaQuery({ query: "(max-width: 480px)" });
  const [categoryIndex, setCategoryIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const { category, setCategory } = useCategory();
  const navigate = useNavigate();
  const table = useMesaStore();

  useEffect(() => {
    const categoriesContainer = document.getElementById("categoriesContainer");

    categoriesContainer.addEventListener("touchstart", (event) => {
      setTouchStart(event.touches[0].clientX);
    });

    categoriesContainer.addEventListener("touchmove", (event) => {
      const touchMoveX = event.touches[0].clientX;
      const diff = touchMoveX - touchStart;

      if (diff > 50) {
        // Swipe right
        if (categoryIndex > 0) {
          setCategoryIndex(categoryIndex - 1);
        }
      } else if (diff < -50) {
        // Swipe left
        if (categoryIndex < categories.length - 4) {
          setCategoryIndex(categoryIndex + 1);
        }
      }
    });

    categoriesContainer.addEventListener("touchend", () => {
      setTouchEnd(0);
    });
  }, [categoryIndex, touchStart, touchEnd]);

  useEffect(() => {
    if (table.numeroMesa)
      category === ""
        ? navigate(`/mesa/${table.numeroMesa}`)
        : navigate(`/mesa/${table.numeroMesa}/?category=${category}`);
    else category === "" ? navigate(`/`) : navigate(`/?category=${category}`);
  }, [category, navigate, table]);

  const handleCategory = useCallback(
    (event) => {
      const cat = event.target.value;
      setCategory(cat === category ? "" : cat);
    },
    [category, setCategory]
  );

  const handleCategoryChange = (direction) => {
    if (direction === "next") {
      if (categoryIndex < categories.length - 4) {
        setCategoryIndex(categoryIndex + 1);
      }
    } else if (direction === "before") {
      if (categoryIndex > 0) {
        setCategoryIndex(categoryIndex - 1);
      }
    }
  };

  return (
    <div
      className={`
      w-full 
      lg:py-4 
      max-lg:sticky
      top-0
      z-20
    `}
    >
      <div
        className={`
        box-border 
        flex 
        flex-col
        lg:flex-row 
        lg:gap-6 
        lg:w-[87.5%] 
        lg:mx-auto 
        lg:px-3
        justify-evenly 
        lg:rounded-lg 
        bg-[#CFCFCF] 
        h-24
        lg:h-[64px] 
        items-center
        relative
        
      `}
      >
        <div
          className={`
          flex 
          flex-row
          max-lg:py-2 
          px-2 
          w-full
          max-lg:bg-[#EAEAEB]
          lg:w-2/3
          overflow-hidden
          gap-2
         
        `}
        >
          <button
            className={`
            flex 
            items-center
            md:hidden
            disabled:cursor-not-allowed
            disabled:bg-opacity-70
            
          `}
            name="next"
            disabled={categoryIndex < categories.length - 4 ? false : true}
            onClick={() => handleCategoryChange("next")}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.51086 12.4888C8.5104 12.2551 8.59177 12.0287 8.74085 11.8488L13.7409 5.8488C13.9106 5.64458 14.1545 5.51616 14.4189 5.49178C14.6834 5.4674 14.9466 5.54906 15.1509 5.7188C15.3551 5.88854 15.4835 6.13245 15.5079 6.39688C15.5323 6.6613 15.4506 6.92458 15.2809 7.1288L10.8009 12.4888L15.1209 17.8488C15.2039 17.9511 15.266 18.0688 15.3034 18.1951C15.3408 18.3215 15.3529 18.454 15.339 18.585C15.325 18.716 15.2853 18.843 15.2222 18.9586C15.159 19.0743 15.0736 19.1763 14.9709 19.2588C14.868 19.3504 14.7474 19.4197 14.6165 19.4625C14.4857 19.5053 14.3474 19.5206 14.2103 19.5075C14.0732 19.4943 13.9404 19.453 13.82 19.3862C13.6996 19.3193 13.5944 19.2283 13.5109 19.1188L8.68086 13.1188C8.55534 12.9337 8.49548 12.7119 8.51086 12.4888Z"
                fill="#0B0B0B"
              />
            </svg>
          </button>

          <div
            className={`
           flex 
           flex-row  
           mx-1 
           items-center 
           w-full 
           justify-evenly
           overflow-hidden
          `}
            id="categoriesContainer"
          >
            {/*
              Mapeamos el arreglo de categorías y renderizamos un CategoryBox por cada una
            */}

            {isPhoneScreen
              ? categories
                  .slice(categoryIndex, categoryIndex + 4)
                  .map((category) => {
                    return (
                      <CategoryBox
                        key={category}
                        label={category}
                        onClick={handleCategory}
                      />
                    );
                  })
              : categories.map((category) => {
                  return (
                    <CategoryBox
                      key={category}
                      label={category}
                      onClick={handleCategory}
                    />
                  );
                })}
          </div>

          <button
            className={`
            flex 
            items-center
            md:hidden
            disabled:cursor-not-allowed
            disabled:bg-opacity-70
          `}
            name="before"
            disabled={categoryIndex === 0}
            onClick={() => handleCategoryChange("before")}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.5098 12.511C15.5103 12.7446 15.4289 12.971 15.2798 13.151L10.2798 19.151C10.1101 19.3552 9.86615 19.4836 9.60172 19.508C9.33729 19.5324 9.07401 19.4507 8.8698 19.281C8.66558 19.1112 8.53716 18.8673 8.51278 18.6029C8.4884 18.3385 8.57006 18.0752 8.7398 17.871L13.2198 12.511L8.8998 7.15095C8.81673 7.04867 8.7547 6.93097 8.71727 6.80463C8.67984 6.67829 8.66774 6.5458 8.68168 6.41477C8.69562 6.28374 8.73532 6.15676 8.79849 6.04113C8.86166 5.92549 8.94707 5.82348 9.0498 5.74095C9.15262 5.64937 9.27324 5.58002 9.40412 5.53722C9.53499 5.49443 9.67329 5.47913 9.81036 5.49227C9.94742 5.50541 10.0803 5.54672 10.2006 5.6136C10.321 5.68049 10.4263 5.77151 10.5098 5.88096L15.3398 11.881C15.4653 12.066 15.5252 12.2879 15.5098 12.511Z"
                fill="#0B0B0B"
              />
            </svg>
          </button>
        </div>

        <SearchBar />
      </div>
    </div>
  );
};

Navbar.propTypes = {
  categories: PropTypes.array.isRequired,
};

export default Navbar;
