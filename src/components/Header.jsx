
function Header() {

    return (
        <>
            <div className="flex gap-80 pt-5 justify-between items-center">
                <div className="flex items-center justify-center gap-16">
                    <div>
                        <img src="src/image/logo.svg" alt="sneakers-text" />
                    </div>
                    <div>
                        <ul className="flex gap-10">
                            <li className="text-dg-blue"><a href="#">Collections</a></li>
                            <li className="text-dg-blue"><a href="#">Men</a></li>
                            <li className="text-dg-blue"><a href="#">Women</a></li>
                            <li className="text-dg-blue"><a href="#">About</a></li>
                            <li className="text-dg-blue"><a href="#">Contact</a></li>
                        </ul>
                    </div>

                </div>
                <div className="flex items-center justify-center gap-3">
                    
                        <img className="w-[40px] h-[40px] cursor-pointer text-gray-700" src="src/image/cart01.jpg" alt="cart" />
                        <img className="w-[50px] h-[50px]" src="https://nasim67reja.github.io/Ecommerce.github.io/images/image-avatar.png" alt="profile" />
                   
                </div>


            </div>
        </>
    )
}

export default Header
