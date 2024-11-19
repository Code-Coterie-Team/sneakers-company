import Header from './components/Header'
function App() {

  return (

    <div className='contain h-screen flex flex-col  items-center gap-8'>
      <Header />
      <div className='main flex flex-row px-40 py-16 gap-28'>

        <div className="imgProduct w-1/2 flex flex-col gap-8 max-w-[25rem]">
          <div className='imgFull cursor-pointer'>
            <img className='rounded-[20px]' src="src/image/image-product-1.jpg" alt="" />
          </div>
          <div className='imgList flex flex-row gap-2 pb-8'>
            <div className='cursor-pointer'>
              <img className='rounded-lg' src="src/image/image-product-1.jpg" alt="" />
            </div>
            <div className=' cursor-pointer'>
              <img className='rounded-lg' src="src/image/image-product-2.jpg" alt="" />
            </div>
            <div className='cursor-pointer'>
              <img className='rounded-lg' src="src/image/image-product-3.jpg" alt="" />
            </div>
            <div className=' cursor-pointer'>
              <img className='rounded-lg' src="src/image/image-product-4.jpg" alt="" />
            </div>
          </div>
        </div>
        <div className='productDetail w-1/2'>
          <h3 className='text-orange-500 pb-4 pt-9 uppercase font-bold'>Sneaker company</h3>
          <h1 className='text-5xl font-bold pb-11'>Fall Limited Edition Sneakers</h1>
          <p className='text-gray-400 pb-8'>
            These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole,
            they’ll withstand everything the weather can offer.
          </p>
          <div className='flex flex-row gap-4 items-center pb-4'>
            <span className='font-bold text-2xl'>$125.00 </span>
            <span className='bg-orange-100 text-orange-500 font-bold px-1'>50%</span>
          </div>
          <div>
            <del className='text-gray-400'>$250.00</del>
          </div>
          <div className='addProduct flex gap-2 items-center'>
            <div className='addNumber whitespace-nowrap flex w-4/12 items-center justify-around px-6 py-3 rounded-lg bg-gray-100'>
              <button>
                <img src="src/image/icon-minus.svg" alt="icon-minus" />
              </button>
              <span className='font-bold text-lg'>0</span>
              <button>
                <img src="src/image/icon-plus.svg" alt="icon-plus" />
              </button>
            </div>
            <button className='addToCart whitespace-nowrap w-8/12 flex justify-center items-center gap-2 px-12 py-3 rounded-lg bg-orange-500'>
              <span>
                <svg class="w-[1.2rem] text-gray-50" viewBox="0 0 22 20" xmlns="http://www.w3.org/2000/svg">
                  <path id="btn-icon" d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#69707D" fill-rule="nonzero"></path>
                </svg>
              </span>
              <span className='text-gray-50'>  Add to cart </span>
            </button>
          </div>
        </div>
      </div>

    </div>

  )
}

export default App
