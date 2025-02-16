import { useEffect, useRef, useState } from "react";
import { MinusIcon } from "./icons/MinusIcon";
import { PlusIcon } from "./icons/PlusIcon";
import { ShoppingBasket03Icon } from "./icons/ShoppingBasket03Icon";
import { useDispatch, useSelector } from "react-redux";
import { setNumber } from "../features/numberSlice";

function ProductAdd() {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const number = useSelector((state) => state.number);

  useEffect(() => {
    number === 0 ? setCount(0) : "";
  }, [number]);

  return (
    <div className="addProduct pt-10 flex gap-2 items-center">
      <div
        className="addNumber dark:bg-gray-300 whitespace-nowrap 
            flex w-4/12 items-center justify-around px-6 py-3 rounded-lg bg-gray-100"
      >
        <button
          className="w-6 h-6"
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
          className="w-6 h-6"
          onClick={() => {
            setCount((prev) => prev + 1);
          }}
        >
          <PlusIcon />
        </button>
      </div>
      <button
        onClick={() => {
          dispatch(setNumber(count));
        }}
        className="addToCart whitespace-nowrap w-6/12 flex justify-center items-center 
      gap-2 px-12 py-3 rounded-lg bg-orange-500"
      >
        <span className="text-gray-50">
          <ShoppingBasket03Icon className="text-gray-50" />
        </span>
        <span className="text-gray-50"> Add to cart </span>
      </button>
    </div>
  );
}

export default ProductAdd;
