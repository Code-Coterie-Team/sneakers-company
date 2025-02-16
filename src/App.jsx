import { useEffect, useRef, useState } from "react";
import Header from "./components/Header";
import { useDispatch, useSelector } from "react-redux";
import { setNumber } from "./features/numberSlice";
import { MinusIcon } from "./components/icons/MinusIcon";
import { PlusIcon } from "./components/icons/PlusIcon";
import { ShoppingBasket03Icon } from "./components/icons/ShoppingBasket03Icon";

function App() {
  const images = [
    "/image/image-product-1.jpg",
    "/image/image-product-2.jpg",
    "/image/image-product-3.jpg",
    "/image/image-product-4.jpg",
  ];
  const [count, setCount] = useState(0);
  const [cardCount, setCardCount] = useState(0);
  const [selectImage, setSelectImage] = useState(images[0]);
  const [selectProductAmg, setSelectProductAmg] = useState(1);
  const dispatch = useDispatch();
  const number = useSelector((state) => state.number);
  console.log(number, "number redux");
  const imgRefs = useRef([false, false, false, false]);

  const animationAmg = (index) => {
    imgRefs.current[index] = !imgRefs.current[index];

    if (imgRefs.current[index]) {
      const fullamg = document.getElementById("imgFull");
      fullamg.classList.add("active");

      setTimeout(() => {
        fullamg.classList.remove("active");
        imgRefs.current[index] = false;
      }, 1000);
    }
  };
  useEffect(() => {
    showNumber();
    console.log("use effect Card Count :", cardCount);
  }, [cardCount]);
  const showNumber = () => {
    console.log("Card Count:", cardCount);
    dispatch(setNumber(cardCount));
  };

  return (
    <div className="contain flex flex-col  items-center gap-8 bg-white dark:bg-black dark:text-white">
      <Header
        numberShop={cardCount || ""}
        showModalProduct={cardCount}
      />
      <div className="main flex flex-row px-40 py-16 gap-28">
        <div className="imgProduct w-1/2 flex flex-col gap-8 max-w-[25rem]">
          <div className="imgFull cursor-pointer">
            <img
              id="imgFull"
              className=" rounded-[20px] "
              src={selectImage}
              alt=""
            />
          </div>
          <div className="imgList flex flex-row gap-2 pb-8">
            <div
              onClick={() => {
                setSelectProductAmg(1);
                setSelectImage(images[0]);
                animationAmg(0);
              }}
              className="cursor-pointer"
            >
              <img
                className={`rounded-lg ${
                  selectProductAmg === 1
                    ? " border-orange-600 border-4 opacity-40 "
                    : ""
                } `}
                src={images[0]}
                alt=""
              />
            </div>
            <div
              onClick={() => {
                setSelectProductAmg(2);
                setSelectImage(images[1]);
                animationAmg(1);
              }}
              className=" cursor-pointer"
            >
              <img
                className={`rounded-lg  ${
                  selectProductAmg === 2
                    ? " border-orange-600 border-4 opacity-40 "
                    : ""
                } `}
                src={images[1]}
                alt=""
              />
            </div>
            <div
              onClick={() => {
                setSelectProductAmg(3);
                setSelectImage(images[2]);
                animationAmg(2);
              }}
              className="cursor-pointer"
            >
              <img
                className={`rounded-lg ${
                  selectProductAmg === 3
                    ? " border-orange-600 border-4 opacity-40"
                    : ""
                }`}
                src={images[2]}
                alt=""
              />
            </div>
            <div
              onClick={() => {
                setSelectProductAmg(4);
                setSelectImage(images[3]);
                animationAmg(3);
              }}
              className=" cursor-pointer"
            >
              <img
                className={`rounded-lg ${
                  selectProductAmg === 4
                    ? " border-orange-600 border-4 opacity-40 "
                    : ""
                }`}
                src={images[3]}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="productDetail w-1/2">
          <h3 className="text-orange-500 pb-4 pt-9 uppercase font-bold">
            Sneaker company
          </h3>
          <h1 className="text-5xl font-bold pb-11">
            Fall Limited Edition Sneakers
          </h1>
          <p className="text-gray-400 pb-8">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>
          <div className="flex flex-row gap-4 items-center pb-4">
            <span className="font-bold text-2xl">$125.00 </span>
            <span className="bg-orange-100 dark:bg-gray-900 text-orange-500 font-bold px-1">
              50%
            </span>
          </div>
          <div>
            <del className="text-gray-400">$250.00</del>
          </div>
          <div className="addProduct pt-10 flex gap-2 items-center">
            <div className="addNumber dark:bg-gray-500 whitespace-nowrap flex w-4/12 items-center justify-around px-6 py-3 rounded-lg bg-gray-100">
              <button
                onClick={() => {
                  if (count > 0) {
                    setCount((prev) => prev - 1);
                  }
                }}
              >
                <MinusIcon />
              </button>
              <span className="font-bold text-lg dark:text-black">{count}</span>
              <button
                onClick={() => {
                  setCount((prev) => prev + 1);
                }}
              >
                <PlusIcon />
              </button>
            </div>
            <button
              onClick={() => {
                setCardCount(count);

                showNumber();
              }}
              className="addToCart whitespace-nowrap w-6/12 flex justify-center items-center gap-2 px-12 py-3 rounded-lg bg-orange-500"
            >
              <span className="text-gray-50">
                <ShoppingBasket03Icon className="text-gray-50"/>
              </span>
              <span className="text-gray-50"> Add to cart </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
