
function Header() {

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
                <div className="flex items-center justify-center gap-3">
                    <img className="w-[40px] h-[40px] cursor-pointer text-gray-700" src="src/image/cart01.jpg" alt="cart" />
                    <img className="w-[50px] h-[50px]" src="https://nasim67reja.github.io/Ecommerce.github.io/images/image-avatar.png" alt="profile" />
                </div>
            </div>

    )
}

export default Header
