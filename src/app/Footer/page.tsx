export default function Footer(){
    return(
        <footer className="w-full bg-white text-black flex flex-col">
            <div className="min-h-[320px] max-h-[500px] bg-[#EEEFFB] flex justify-center py-6">
                <div className="flex flex-col justify-center">
                    <div className="flex gap-20">
                        <div className="flex flex-col gap-8">
                        <h3 className="text-[24px] lg:text-[38px] leading-[30px] lg:leading-[44.53px] font-bold">Hekto</h3>                            <div className="w-full sm:w-[377px]">
                                <input type="text" className="opacity-45 bg-[#FFFFFF] h-[36px] sm:h-[44px] w-3/4 px-4" placeholder="Enter Email Address" />
                                <button type="button" className="rounded-[3px] h-[36px] sm:h-[39px] bg-[#FB2E86] w-3/12 text-white">Sign Up</button>
                            </div>
                            <div className="flex flex-col gap-2">
                                <p className="font-[Lato] font-normal text-[16px] leading-[19.2px] text-[#8A8FB9]">Contact Info</p>
                                <p className="font-[Lato] font-normal text-[16px] leading-[19.2px] text-[#8A8FB9]">17 Princess Road, London, Greater London NW1 8JR, UK</p>
                            </div>
                        </div>
                        <div className="hidden lg:flex xl:flex 2xl:flex gap-20">
                            <div className="flex flex-col gap-10">
                                <p className="font-[Josefin Sans] text-[22px] leading-[25.78px]">Catagories</p>
                                <ul className="flex flex-col gap-4 font-[Lato] font-normal text-[16px] leading-[19.2px] text-[#8A8FB9]">
                                    <li className="cursor-pointer">Laptops & Computers</li>
                                    <li className="cursor-pointer">Cameras & Photography</li>
                                    <li className="cursor-pointer">Smart Phones & Tablets</li>
                                    <li className="cursor-pointer">Video Games & Consoles</li>
                                    <li className="cursor-pointer">Waterproof Headphones</li>
                                </ul>
                            </div>
                            <div className="flex flex-col gap-10">
                                <p className="font-[Josefin Sans] text-[22px] leading-[25.78px]">Customer Care</p>
                                <ul className="flex flex-col gap-4 font-[Lato] font-normal text-[16px] leading-[19.2px] text-[#8A8FB9]">
                                    <li className="cursor-pointer">My Account</li>
                                    <li className="cursor-pointer">Discount</li>
                                    <li className="cursor-pointer">Returns</li>
                                    <li className="cursor-pointer">Orders History</li>
                                    <li className="cursor-pointer">Order Tracking</li>
                                </ul>
                            </div>
                            <div className="flex flex-col gap-10">
                                <p className="font-[Josefin Sans] text-[22px] leading-[25.78px]">Pages</p>
                                <ul className="flex flex-col gap-4 font-[Lato] font-normal text-[16px] leading-[19.2px] text-[#8A8FB9]">
                                    <li className="cursor-pointer">Blog</li>
                                    <li className="cursor-pointer">Browse the Shop</li>
                                    <li className="cursor-pointer">Category</li>
                                    <li className="cursor-pointer">Pre-Built Pages</li>
                                    <li className="cursor-pointer">Visual Composer Elements</li>
                                    <li className="cursor-pointer">WooCommerce Pages</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex lg:hidden xl:hidden 2xl:hidden justify-center bg-[#EEEFFB]">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 py-8">
        <div className="flex flex-col gap-6">
            <p className="font-[Josefin Sans] text-[18px] md:text-[22px] leading-[24px] md:leading-[26px]">Categories</p>
            <ul className="flex flex-col gap-3 md:gap-4 font-[Lato] font-normal text-[14px] md:text-[16px] leading-[18px] md:leading-[19.2px] text-[#8A8FB9]">
                <li className="cursor-pointer">Laptops & Computers</li>
                <li className="cursor-pointer">Cameras & Photography</li>
                <li className="cursor-pointer">Smart Phones & Tablets</li>
                <li className="cursor-pointer">Video Games & Consoles</li>
                <li className="cursor-pointer">Waterproof Headphones</li>
            </ul>
        </div>
        <div className="flex flex-col gap-6">
            <p className="font-[Josefin Sans] text-[18px] md:text-[22px] leading-[24px] md:leading-[26px]">Customer Care</p>
            <ul className="flex flex-col gap-3 md:gap-4 font-[Lato] font-normal text-[14px] md:text-[16px] leading-[18px] md:leading-[19.2px] text-[#8A8FB9]">
                <li className="cursor-pointer">My Account</li>
                <li className="cursor-pointer">Discount</li>
                <li className="cursor-pointer">Returns</li>
                <li className="cursor-pointer">Orders History</li>
                <li className="cursor-pointer">Order Tracking</li>
            </ul>
        </div>
        <div className="flex flex-col gap-6">
            <p className="font-[Josefin Sans] text-[18px] md:text-[22px] leading-[24px] md:leading-[26px]">Pages</p>
            <ul className="flex flex-col gap-3 md:gap-4 font-[Lato] font-normal text-[14px] md:text-[16px] leading-[18px] md:leading-[19.2px] text-[#8A8FB9]">
                <li className="cursor-pointer">Blog</li>
                <li className="cursor-pointer">Browse the Shop</li>
                <li className="cursor-pointer">Category</li>
                <li className="cursor-pointer">Pre-Built Pages</li>
                <li className="cursor-pointer">Visual Composer Elements</li>
                <li className="cursor-pointer">WooCommerce Pages</li>
            </ul>
        </div>
    </div>
</div>


            <div className="h-[54px] bg-[#E7E4F8] flex justify-around">
                <div className="flex flex-col justify-center">
                    <p className="font-[Lato] font-semibold text-[16px] leading-[19.2px] text-[#9DA0AE]">©Webecy - All Rights Reserved</p>
                </div>
                <div className="flex flex-col justify-center">
                    <div className="w-20 h-5 flex gap-2">
                        <i className="fa-brands fa-facebook"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-twitter"></i>
                    </div>
                </div>
            </div>
        </footer>
    )
}