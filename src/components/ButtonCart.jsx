import { setIsShowModalCart } from "../features/modalCartSlice";
import { ShoppingBasket03Icon } from "./icons/ShoppingBasket03Icon";
import { useDispatch, useSelector } from "react-redux";

function ButtonCart() {
  const dispatch = useDispatch();
  const number = useSelector((state) => state.number);

  const isShowModalCart = useSelector((state) => state.isShowModalCart);
  return (
    <div
      className="iconCart relative"
      onClick={() => {
        dispatch(setIsShowModalCart(!isShowModalCart));
      }}
    >
      <span
        className={`${
          number === 0 ? "hidden" : ""
        } py-[2px] px-[7px] absolute top-[-4px] text-[12px] font-bold
         text-gray-100 right-[-7px] rounded-full bg-orange-500`}
      >
        {number}
      </span>

      <ShoppingBasket03Icon className=" cursor-pointer text-gray-700 dark:text-gray-300" />
    </div>
  );
}

export default ButtonCart;
