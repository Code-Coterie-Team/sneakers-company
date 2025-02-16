import { useDispatch, useSelector } from "react-redux";
import { DeleteIcon } from "./icons/DeleteIcon";
import { setNumber } from "../features/numberSlice";
import { setIsShowModalCart } from "../features/modalCartSlice";

function ModalCart() {
  const dispatch = useDispatch();
  const number = useSelector((state) => state.number);
  const isShowModalCart = useSelector((state) => state.isShowModalCart);

  return (
    <div className="modalCart activeModal shadow-boxCart absolute h-[16rem]  w-[22rem] bg-white rounded-lg top-[3.5rem] right-[-3rem]">
      <h1 className="border-b-2 py-4 px-7 text-xl font-bold dark:text-gray-950">
        Cart
      </h1>
      <div className="bodyModal dark:text-gray-950 p-6 flex flex-col gap-6 h-[75%] justify-center items-center">
        <div className={number ? "modalEmpty hidden" : "modalEmpty "}>
          Your cart is empty
        </div>
        {isShowModalCart && (
          <div
            className={
              number
                ? "numberProduct flex flex-row items-center gap-3"
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
                dispatch(setIsShowModalCart(false));
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
              dispatch(setIsShowModalCart(false));
            }}
            className="bg-orange-500 text-xl shadow-boxBtn text-white w-full rounded-lg py-[1rem]"
          >
            CheckOut
          </button>
        ) : undefined}
      </div>
    </div>
  );
}

export default ModalCart;
