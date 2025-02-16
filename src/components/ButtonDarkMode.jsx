import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../features/themeSlice";
import { BrightnessIcon } from "./icons/BrightnessIcon";
import { HalfMoonIcon } from "./icons/HalfMoonIcon";

function ButtonDarkMode() {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.theme);

  const toggleTHeme = () => {
    if (theme === "dark") {
      dispatch(setTheme("light"));
    } else {
      dispatch(setTheme("dark"));
    }
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  return (
    <button
      onClick={() => toggleTHeme()}
      className="them hover:bg-gray-300 hover:rounded-full p-2"
    >
      {theme === "light" ? (
        <BrightnessIcon className="text-gray-700" />
      ) : (
        <HalfMoonIcon className="text-gray-700 dark:text-gray-300 hover:text-gray-950" />
      )}
    </button>
  );
}

export default ButtonDarkMode;
