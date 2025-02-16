import React from "react";

function Menu() {
  const listMenu = ["Collections", "Men", "Women", "About", "Contact"];

  return (
    <div className="menu">
      <ul className="flex gap-10">
        {listMenu.map((item, index) => (
          <li key={index}>
            <a
              className="border-b-4 border-white dark:border-black transition-all hover:transition-all delay-75 hover:border-b-4 hover:border-orange-500 hover:pb-[44px]"
              href="#"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;
