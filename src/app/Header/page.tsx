import Script from "next/script";
import Link from "next/link";
export default function Header() {
    return (
<>
    <Script
        src="https://kit.fontawesome.com/1f48a0d62b.js"
        crossOrigin="anonymous"
        strategy="afterInteractive"
    />
    <nav className="w-full bg-white text-black">
        <div className="flex bg-[#7E33E0] font-[Josefin Sans] font-bold h-11 justify-evenly py-2 flex-wrap px-4">
            <div className="flex gap-4 justify-between w-full md:w-1/2 lg:w-1/4">
                <div className="flex gap-3">
                    <i className="fa-regular fa-envelope my-auto cursor-pointer" aria-hidden="true" style={{ color: 'white', fill: 'transparent' }}></i>
                    <span className="text-white my-auto cursor-pointer">mhhasanul@gmail.com</span>
                </div>
                <div className="flex gap-3">
                    <i className="fa fa-phone my-auto cursor-pointer" aria-hidden="true" style={{ color: 'white', fill: 'transparent' }}></i>
                    <span className="text-white my-auto cursor-pointer">(12345)67890</span>
                </div>
            </div>
            <div className="flex gap-4 w-full md:w-1/2 lg:w-1/4 mt-2 md:mt-0">
                <ul className="flex gap-4 text-white flex-wrap">
                    <li className="flex gap-2 my-auto cursor-pointer">English <i className="fa-solid fa-caret-down my-auto cursor-pointer"></i></li>
                    <li className="flex gap-2 my-auto cursor-pointer">USD <i className="fa-solid fa-caret-down my-auto cursor-pointer"></i></li>
                    <li className="flex gap-2 my-auto cursor-pointer">Login <i className="fa-regular fa-user my-auto cursor-pointer"></i></li>
                    <li className="flex gap-2 my-auto cursor-pointer">Wishlist <i className="fa-regular fa-heart my-auto cursor-pointer"></i></li>
                </ul>
                <i className="fa-solid fa-cart-shopping my-auto cursor-pointer" aria-hidden="true" style={{ color: 'white', fill: 'transparent' }}></i>
            </div>
        </div>

        <div className="flex justify-center px-4">
            <div className="flex my-4 h-[44px] gap-20 flex-wrap items-center">
                <div className="flex justify-between items-center w-full md:w-auto gap-20">
                    <div className="font-[Josefin Sans] font-bold text-4xl text-[#0D0E43] cursor-pointer"><Link href={"/"}></Link>Hekto</div>
                    <ul className="flex gap-4 font-[Lato] font-medium flex-wrap">
                    <li className="relative flex items-center gap-2 text-[#FB2E86] cursor-pointer group">
    <span className="text-lg font-medium">Home</span>
    <i className="fa-solid fa-caret-down text-sm"></i>
    {/* Dropdown */}
    <ul className="absolute hidden group-hover:block top-full left-0 bg-white shadow-lg text-gray-800 rounded-lg w-48">
        <li className="relative px-4 py-2 hover:bg-[#FB2E86] hover:text-white cursor-pointer transition-colors duration-300 rounded-t-lg group">
            Pages
            <i className="fa-solid fa-caret-right ml-2 text-sm"></i>
            {/* Sub-dropdown */}
            <ul className="absolute hidden group-hover:block top-0 left-full bg-white shadow-lg text-gray-800 rounded-lg ml-1 w-48">
                <li className="px-4 py-2 hover:bg-[#FB2E86] hover:text-white cursor-pointer transition-colors duration-300">
                    <Link href="/Shop_grid_page">Shop Grid Default</Link>
                </li>
                <li className="px-4 py-2 hover:bg-[#FB2E86] hover:text-white cursor-pointer transition-colors duration-300">
                    <Link href={"/Shop_list_page"}>Shop List</Link>
                </li>
                <li className="px-4 py-2 hover:bg-[#FB2E86] hover:text-white cursor-pointer transition-colors duration-300">
                    <Link href={"/Shop_left_page"}>Shop Left</Link>
                </li>
            </ul>
        </li>
        {/* <li className="px-4 py-2 hover:bg-[#FB2E86] hover:text-white cursor-pointer transition-colors duration-300">
            Option 2
        </li>
        <li className="px-4 py-2 hover:bg-[#FB2E86] hover:text-white cursor-pointer transition-colors duration-300 rounded-b-lg">
            Option 3
        </li> */}
    </ul>
</li>


                        <li className="my-auto h-[20px] cursor-pointer">Pages</li>
                        <li className="my-auto h-[20px] cursor-pointer">Products</li>
                        <li className="my-auto h-[20px] cursor-pointer">Blog</li>
                        <li className="my-auto h-[20px] cursor-pointer">Shop</li>
                        <li className="my-auto h-[20px] cursor-pointer">Contact</li>
                    </ul>
                </div>
                <div className="flex mt-2 md:mt-0 cursor-pointer">
                    <input placeholder="Search..." className="border-[2px] border-[#E7E6EF] w-[317px]" />
                    <div className="bg-[#FB2E86] w-12 flex justify-center">
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
