import React from "react";
import { useEffect, useRef, useState } from "react";
function ProductImages() {
  const images = [
    "/image/image-product-1.jpg",
    "/image/image-product-2.jpg",
    "/image/image-product-3.jpg",
    "/image/image-product-4.jpg",
  ];

  const [selectImage, setSelectImage] = useState(images[0]);
  console.log(images[0], "useState(images[0]");
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
  return (
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
        {images.map((item, index) => {
          return (
            <div
              key={index}
              onClick={() => {
                setSelectImage(item);
                animationAmg(index);
              }}
              className="cursor-pointer"
            >
              <img
                className={`rounded-lg ${
                  selectImage == item
                    ? " border-orange-600 border-4 opacity-40 "
                    : ""
                } `}
                src={item}
                alt=""
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductImages;
