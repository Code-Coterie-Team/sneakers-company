import { useState } from "react"

const Header = ({ number, showModalProduct }) => {
    const [showModal, setShowModal] = useState(false);
    const handelMOdal = () => {
        setShowModal(true);
    }
    console.log(number,"countHeader");
    return (

        <div className="flex gap-80 pt-5 justify-between items-center border-solid border-b-2 border-gray-300 pb-8 px-7">
            <div className="flex items-center justify-center gap-16">
                <div>
                    <img src="src/image/logo.svg" alt="sneakers-text" />
                </div>
                <div>
                    <ul className="flex gap-10">
                        <li className="text-dg-blue"><a className="border-b-4 border-white transition-all hover:transition-all delay-75 hover:border-b-4 hover:border-orange-500 hover:pb-[44px]" href="#">Collections</a></li>
                        <li className="text-dg-blue"><a className="border-b-4 border-white transition-all  hover:transition-all delay-75 hover:border-b-4 hover:border-orange-500 hover:pb-[44px]" href="#">Men</a></li>
                        <li className="text-dg-blue"><a className="border-b-4 border-white transition-all  hover:transition-all delay-75 hover:border-b-4 hover:border-orange-500 hover:pb-[44px]" href="#">Women</a></li>
                        <li className="text-dg-blue"><a className="border-b-4 border-white transition-all  hover:transition-all delay-75 hover:border-b-4 hover:border-orange-500 hover:pb-[44px]" href="#">About</a></li>
                        <li className="text-dg-blue"><a className="border-b-4 border-white transition-all  hover:transition-all delay-75 hover:border-b-4 hover:border-orange-500 hover:pb-[44px]" href="#">Contact</a></li>
                    </ul>
                </div>
            </div>
            <div className="flex items-center justify-center gap-3 relative">
                <div onClick={() => {
                    setShowModal(!showModal);
                }}
                    className="iconCart relative">

                    {number !== '' && (
                        <span className=" py-[2px] px-[7px] absolute top-[-4px] text-[12px] font-bold text-gray-100 right-[-7px] rounded-full bg-orange-500">{number}</span>
                    )}
                    <img className="w-[40px] h-[40px] cursor-pointer text-gray-700" src="src/image/cart01.jpg" alt="cart" />
                </div>

                <img className="w-[50px] h-[50px] " src="https://nasim67reja.github.io/Ecommerce.github.io/images/image-avatar.png" alt="profile" />
                {showModal ? (
                    <div className="modalCart shadow-boxCart absolute h-[16rem]  w-[22rem] bg-white rounded-lg top-[3.5rem] right-[-3rem]">
                        <h1 className="border-b-2 py-4 px-7 text-xl font-bold">Cart</h1>
                        <div className="bodyModal p-6 flex flex-col gap-6 h-[75%] justify-center items-center">
                            <div className={showModalProduct ? 'modalEmpty hidden' : 'modalEmpty '}>

                                Your cart is empty

                            </div>
                            <div className={showModalProduct ? 'modalShowProduct flex flex-row items-center gap-3' : 'hidden'}>
                                <div className="">
                                    <img className="w-12 h-12 rounded-md" src="src/image/image-product-1.jpg" alt="" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-gray-500">Fall Limited Edition Sneakers</span>
                                    <div className="flex items-center gap-2">
                                        <span className="text-gray-500">{`$125.00 * ${number}`}</span>
                                        <span className="text-gray-600 font-bold"> {12500 * number}</span>
                                    </div>

                                </div>
                                <button onClick={() => {
                                    showModalProduct = false
                                }}>
                                    <img className="w-5 h-6" src="src/image/icon-delete.svg" alt="" />
                                </button>

                            </div>
                            {showModalProduct ? (
                                <button onClick={() => {
                                    setShowModal(false)
                                }} className="bg-orange-500 text-xl shadow-boxBtn text-white w-full rounded-lg py-[1rem]">
                                    CheckOut
                                </button>
                            ) : undefined}
                        </div>

                    </div>
                ) : undefined}

            </div>
        </div >

    )
}


export default Header
