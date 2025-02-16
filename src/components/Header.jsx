import { SneakersIcon } from "./icons/SneakersIcon";
import { useSelector } from "react-redux";
import Menu from "./Menu";
import ModalCart from "./ModalCart";
import Profile from "./Profile";
import ButtonCart from "./ButtonCart";
import ButtonDarkMode from "./ButtonDarkMode";

const Header = () => {
  const isShowModalCart = useSelector((state) => state.isShowModalCart);
  return (
    <div
      className="flex flex-col lg:flex-row lg:gap-80 dark:bg-black
        text-dg-blue dark:text-white  pt-5 justify-between 
          items-center border-solid border-b-2 border-gray-300 pb-8 px-7"
    >
      <div className="flex items-center justify-center gap-16">
        <div className="logo">
          <SneakersIcon className="dark:text-gray-50 text-black" />
        </div>
        <Menu />
      </div>
      <div className="flex items-center justify-center gap-3 relative">
        <ButtonDarkMode />
        <ButtonCart />
        <Profile />
        {isShowModalCart ? <ModalCart /> : undefined}
      </div>
    </div>
  );
};

export default Header;
