import React from 'react'

function ProductDescriptions() {
  return (
    <div className="productDescription">
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
    </div>
  )
}

export default ProductDescriptions
