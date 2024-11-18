import Header from './components/Header'
function App() {

  return (

    <div className='contain h-screen flex flex-col  items-center gap-24'>
      <Header />
      <div className='main flex gap-7'>

        <div className="imgProduct w-[425px] h-[430px] ">
          <div className='imgFull'>
            <img className='rounded-[20px]' src="src/image/image-product-1.jpg" alt="" />
          </div>
          <div className='imgList'>
            <div>
              <img src="" alt="" />
            </div>
          </div>
        </div>
        <div className='productDetail'>

        </div>
      </div>

    </div>

  )
}

export default App
