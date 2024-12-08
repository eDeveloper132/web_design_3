import Script from "next/script";

export default function Header() {
    return (
<>
    <Script
        src="https://kit.fontawesome.com/1f48a0d62b.js"
        crossOrigin="anonymous"
        strategy="afterInteractive"
    />
    <nav className="w-full">
        <div className="flex bg-[#7E33E0] font-[Josefin Sans] font-bold h-11 justify-evenly py-2 flex-wrap px-4">
            <div className="flex gap-4 justify-between w-full md:w-1/2 lg:w-1/4">
                <div className="flex gap-3">
                    <i className="fa-regular fa-envelope my-auto" aria-hidden="true" style={{ color: 'white', fill: 'transparent' }}></i>
                    <span className="text-white my-auto">mhhasanul@gmail.com</span>
                </div>
                <div className="flex gap-3">
                    <i className="fa fa-phone my-auto" aria-hidden="true" style={{ color: 'white', fill: 'transparent' }}></i>
                    <span className="text-white my-auto">(12345)67890</span>
                </div>
            </div>
            <div className="flex gap-4 w-full md:w-1/2 lg:w-1/4 mt-2 md:mt-0">
                <ul className="flex gap-4 text-white flex-wrap">
                    <li className="flex gap-2 my-auto">English <i className="fa-solid fa-caret-down my-auto"></i></li>
                    <li className="flex gap-2 my-auto">USD <i className="fa-solid fa-caret-down my-auto"></i></li>
                    <li className="flex gap-2 my-auto">Login <i className="fa-regular fa-user my-auto"></i></li>
                    <li className="flex gap-2 my-auto">Wishlist <i className="fa-regular fa-heart my-auto"></i></li>
                </ul>
                <i className="fa-solid fa-cart-shopping my-auto" aria-hidden="true" style={{ color: 'white', fill: 'transparent' }}></i>
            </div>
        </div>

        <div className="flex justify-center px-4">
            <div className="flex my-4 h-[44px] gap-4 flex-wrap items-center">
                <div className="flex justify-between items-center w-full md:w-auto gap-4">
                    <div className="font-[Josefin Sans] font-bold text-4xl text-[#0D0E43]">Hekto</div>
                    <ul className="flex gap-4 font-[Lato] font-medium flex-wrap">
                        <li className="flex my-auto h-[20px] gap-1 text-[#FB2E86]">Home <i className="fa-solid fa-caret-down my-auto py-1"></i></li>
                        <li className="my-auto h-[20px]">Pages</li>
                        <li className="my-auto h-[20px]">Products</li>
                        <li className="my-auto h-[20px]">Blog</li>
                        <li className="my-auto h-[20px]">Shop</li>
                        <li className="my-auto h-[20px]">Contact</li>
                    </ul>
                </div>
                <div className="flex mt-2 md:mt-0">
                    <div className="border-[2px] border-[#E7E6EF] w-[317px]"></div>
                    <div className="bg-[#FB2E86] w-12 flex justify-center ml-2">
                        <div className="my-auto">
                            <i className="fa-solid fa-magnifying-glass" aria-hidden="true" style={{ color: 'white', fill: 'transparent' }}></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</>

    );
}
