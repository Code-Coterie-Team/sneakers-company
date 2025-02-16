import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../features/themeSlice";
import { ShoppingBasket03Icon } from "./icons/ShoppingBasket03Icon";
import { BrightnessIcon } from "./icons/BrightnessIcon";
import { HalfMoonIcon } from "./icons/HalfMoonIcon";
import { SneakersIcon } from "./icons/SneakersIcon";
import { DeleteIcon } from "./icons/DeleteIcon";
import { setNumber } from "../features/numberSlice";

const Header = ({ numberShop }) => {
  const [showModal, setShowModal] = useState(false);

  const number = useSelector((state) => state.number);
  console.log(number, "header component number");

  const { theme } = useSelector((state) => state.theme);
  const [modalShowProduct, setModalShowProduct] = useState(true);

  const toggleTHeme = () => {
    if (theme === "dark") {
      dispatch(setTheme("light"));
    } else {
      dispatch(setTheme("dark"));
    }
  };
  const dispatch = useDispatch();

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  return (
    <div
      className="flex flex-col lg:flex-row lg:gap-80 dark:bg-black text-dg-blue dark:text-white  pt-5 justify-between 
    items-center border-solid border-b-2 border-gray-300 pb-8 px-7"
    >
      <div className="flex items-center justify-center gap-16">
        <div>
          <SneakersIcon className="dark:text-gray-50 text-black" />
        </div>
        <div>
          <ul className="flex gap-10">
            <li className=" ">
              <a
                className="border-b-4 border-white dark:border-black transition-all hover:transition-all delay-75 hover:border-b-4 hover:border-orange-500 hover:pb-[44px]"
                href="#"
              >
                Collections
              </a>
            </li>
            <li className="">
              <a
                className="border-b-4 border-white dark:border-black transition-all  hover:transition-all delay-75 hover:border-b-4 hover:border-orange-500 hover:pb-[44px]"
                href="#"
              >
                Men
              </a>
            </li>
            <li className="">
              <a
                className="border-b-4 border-white dark:border-black transition-all  hover:transition-all delay-75 hover:border-b-4 hover:border-orange-500 hover:pb-[44px]"
                href="#"
              >
                Women
              </a>
            </li>
            <li className="">
              <a
                className="border-b-4 border-white dark:border-black transition-all  hover:transition-all delay-75 hover:border-b-4 hover:border-orange-500 hover:pb-[44px]"
                href="#"
              >
                About
              </a>
            </li>
            <li className="">
              <a
                className="border-b-4 border-white dark:border-black transition-all  hover:transition-all delay-75 hover:border-b-4 hover:border-orange-500 hover:pb-[44px]"
                href="#"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex items-center justify-center gap-3 relative">
        <div
          onClick={() => toggleTHeme()}
          className="them"
        >
          {theme === "light" ? <BrightnessIcon /> : <HalfMoonIcon />}
        </div>

        <div
          onClick={() => {
            setShowModal(!showModal);
          }}
          className="iconCart relative"
        >
          <span
            className={`${number === 0 ? "hidden" : ""} py-[2px] px-[7px] absolute top-[-4px] text-[12px] font-bold
               text-gray-100 right-[-7px] rounded-full bg-orange-500`}
          >
            {number}
          </span>

          <ShoppingBasket03Icon className=" cursor-pointer text-gray-700" />
        </div>

        <img
          className="w-[50px] h-[50px] relative"
          src="https://nasim67reja.github.io/Ecommerce.github.io/images/image-avatar.png"
          alt="profile"
        ></img>

        {showModal ? (
          <div className="modalCart activeModal shadow-boxCart absolute h-[16rem]  w-[22rem] bg-white rounded-lg top-[3.5rem] right-[-3rem]">
            <h1 className="border-b-2 py-4 px-7 text-xl font-bold dark:text-gray-950">
              Cart
            </h1>
            <div className="bodyModal dark:text-gray-950 p-6 flex flex-col gap-6 h-[75%] justify-center items-center">
              <div className={number ? "modalEmpty hidden" : "modalEmpty "}>
                Your cart is empty
              </div>
              {modalShowProduct && (
                <div
                  className={
                    number
                      ? "modalShowProduct flex flex-row items-center gap-3"
                      : "hidden"
                  }
                >
                  <div className="">
                    <img
                      className="w-12 h-12 rounded-md"
                      src="/image/image-product-1.jpg"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-500">
                      Fall Limited Edition Sneakers
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-500">{`$125.00 * ${number}`}</span>
                      <span className="text-gray-600 font-bold">
                        {" "}
                        {12500 * number}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      setModalShowProduct(false);
                      dispatch(setNumber(0));
                    }}
                  >
                    <DeleteIcon />
                  </button>
                </div>
              )}

              {number ? (
                <button
                  onClick={() => {
                    setShowModal(false);
                  }}
                  className="bg-orange-500 text-xl shadow-boxBtn text-white w-full rounded-lg py-[1rem]"
                >
                  CheckOut
                </button>
              ) : undefined}
            </div>
          </div>
        ) : undefined}
      </div>
    </div>
  );
};

export default Header;
