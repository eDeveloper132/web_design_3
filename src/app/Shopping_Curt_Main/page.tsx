import Image from "next/image"
import curt_item_1 from "../../../public/curt_item_1.jpeg"
import curt_item_2 from "../../../public/curt_item_2.jpeg"
import curt_item_3 from "../../../public/curt_item_3.jpeg"
import curt_item_4 from "../../../public/curt_item_4.jpeg"
import curt_item_5 from "../../../public/curt_item_5.jpeg"
export default function Shopping_Curt_Main() {
    return(
        <>
                        <div className="h-[286px] bg-[#F6F5FF] flex flex-col justify-center">
                <div className="flex xs250:w-screen xs250:justify-center sm:w-screen sm:justify-center md:w-screen md:justify-center lg:w-5/12 lg:justify-end xl:w-5/12 xl:justify-end 2xl:w-5/12 2xl:justify-end">
                    <div className="flex flex-col">
                        <p className="font-[Josefin Sans] text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] leading-[30px] sm:leading-[34px] md:leading-[38px] lg:leading-[42.19px] text-[#101750] font-bold">
                            Shopping Curt
                        </p>
                        <div className="flex">
                            <p className="text-[12px] sm:text-[14px] md:text-[16px] leading-[16px] sm:leading-[18px] md:leading-[19.2px]">
                                Home.Pages.
                            </p>
                            <p className="text-[#FB2E86] font-[Lato] font-semibold text-[14px] sm:text-[16px] leading-[18px] sm:leading-[19.2px] my-auto">
                                shopping curt
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center my-16">
                <div className="flex flex-col gap-2">
                    <div className="flex gap-2">
                        <div className="flex flex-col gap-5">
                            <h1 className="font-[Josefin Sans] text-[20px] leading-[23.44px] text-[#1D3178] font-semibold left-1 mb-8">Product</h1>
                            <div className="w-[250px] h-[88px] flex gap-3 relative">
                                <div className="absolute -top-[5px] left-[75px] w-3 h-3 rounded-full bg-black flex justify-center">
                                    <div className="flex flex-col justify-center">
                                        <i className="fa-solid fa-xmark text-white text-[8px] leading-[8px] cursor-pointer"></i>
                                    </div>
                                </div>
                                <Image src={curt_item_1} width={84} className="h-[88px]" alt="image"></Image>
                                <div className="flex flex-col gap-1 justify-center">
                                    <p className='font-[Josefin Sans] text-[14px] leading-[16.41px]'>Ut diam consequat</p>
                                    <p className='font-[Josefin Sans] text-[14px] leading-[16.41px] text-[#A1A8C1]'>Color: Brown</p>
                                    <p className='font-[Josefin Sans] text-[14px] leading-[16.41px] text-[#A1A8C1]'>Size: XL</p>
                                </div>
                            </div>
                            <div className="border-b-[1px] border-solid border-[#BEBFC2]"></div>
                            <div className="w-[250px] h-[88px] flex gap-3 relative">
                                <div className="absolute -top-[5px] left-[75px] w-3 h-3 rounded-full bg-black flex justify-center">
                                    <div className="flex flex-col justify-center">
                                        <i className="fa-solid fa-xmark text-white text-[8px] leading-[8px] cursor-pointer"></i>
                                    </div>
                                </div>
                                <Image src={curt_item_2} width={84} className="h-[88px]" alt="image"></Image>
                                <div className="flex flex-col gap-1 justify-center">
                                    <p className='font-[Josefin Sans] text-[14px] leading-[16.41px]'>Vel faucibus posuere</p>
                                    <p className='font-[Josefin Sans] text-[14px] leading-[16.41px] text-[#A1A8C1]'>Color: Brown</p>
                                    <p className='font-[Josefin Sans] text-[14px] leading-[16.41px] text-[#A1A8C1]'>Size: XL</p>
                                </div>
                            </div>
                            <div className="border-b-[1px] border-solid border-[#BEBFC2]"></div>
                            <div className="w-[250px] h-[88px] flex gap-3 relative">
                                <div className="absolute -top-[5px] left-[75px] w-3 h-3 rounded-full bg-black flex justify-center">
                                    <div className="flex flex-col justify-center">
                                        <i className="fa-solid fa-xmark text-white text-[8px] leading-[8px] cursor-pointer"></i>
                                    </div>
                                </div>
                                <Image src={curt_item_3} width={84} className="h-[88px]" alt="image"></Image>
                                <div className="flex flex-col gap-1 justify-center">
                                    <p className='font-[Josefin Sans] text-[14px] leading-[16.41px]'>Ac vitae vestibulum</p>
                                    <p className='font-[Josefin Sans] text-[14px] leading-[16.41px] text-[#A1A8C1]'>Color: Brown</p>
                                    <p className='font-[Josefin Sans] text-[14px] leading-[16.41px] text-[#A1A8C1]'>Size: XL</p>
                                </div>
                            </div>
                            <div className="border-b-[1px] border-solid border-[#BEBFC2]"></div>
                            <div className="w-[250px] h-[88px] flex gap-3 relative">
                                <div className="absolute -top-[5px] left-[75px] w-3 h-3 rounded-full bg-black flex justify-center">
                                    <div className="flex flex-col justify-center">
                                        <i className="fa-solid fa-xmark text-white text-[8px] leading-[8px] cursor-pointer"></i>
                                    </div>
                                </div>
                                <Image src={curt_item_4} width={84} className="h-[88px]" alt="image"></Image>
                                <div className="flex flex-col gap-1 justify-center">
                                    <p className='font-[Josefin Sans] text-[14px] leading-[16.41px]'>Elit massa diam</p>
                                    <p className='font-[Josefin Sans] text-[14px] leading-[16.41px] text-[#A1A8C1]'>Color: Brown</p>
                                    <p className='font-[Josefin Sans] text-[14px] leading-[16.41px] text-[#A1A8C1]'>Size: XL</p>
                                </div>
                            </div>
                            <div className="border-b-[1px] border-solid border-[#BEBFC2]"></div>
                            <div className="w-[250px] h-[88px] flex gap-3 relative">
                                <div className="absolute -top-[5px] left-[75px] w-3 h-3 rounded-full bg-black flex justify-center">
                                    <div className="flex flex-col justify-center">
                                        <i className="fa-solid fa-xmark text-white text-[8px] leading-[8px] cursor-pointer"></i>
                                    </div>
                                </div>
                                <Image src={curt_item_5} width={84} className="h-[88px]" alt="image"></Image>
                                <div className="flex flex-col gap-1 justify-center">
                                    <p className='font-[Josefin Sans] text-[14px] leading-[16.41px]'>Proin pharetra elementum</p>
                                    <p className='font-[Josefin Sans] text-[14px] leading-[16.41px] text-[#A1A8C1]'>Color: Brown</p>
                                    <p className='font-[Josefin Sans] text-[14px] leading-[16.41px] text-[#A1A8C1]'>Size: XL</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-5">
                            <h1 className="font-[Josefin Sans] text-[20px] leading-[23.44px] text-[#1D3178] font-semibold left-1 mb-8">Price</h1>
                            <div className="w-[80px] h-[88px] flex flex-col justify-center text-[14px] leading-[16.41px] font-[Josefin Sans] text-[#15245E]">
                                $32.00
                            </div>
                            <div className="border-b-[1px] border-solid border-[#BEBFC2]"></div>
                            <div className="w-[80px] h-[88px] flex flex-col justify-center text-[14px] leading-[16.41px] font-[Josefin Sans] text-[#15245E]">
                                $32.00
                            </div>
                            <div className="border-b-[1px] border-solid border-[#BEBFC2]"></div>
                            <div className="w-[80px] h-[88px] flex flex-col justify-center text-[14px] leading-[16.41px] font-[Josefin Sans] text-[#15245E]">
                                $32.00
                            </div>
                            <div className="border-b-[1px] border-solid border-[#BEBFC2]"></div>
                            <div className="w-[80px] h-[88px] flex flex-col justify-center text-[14px] leading-[16.41px] font-[Josefin Sans] text-[#15245E]">
                                $32.00
                            </div>
                            <div className="border-b-[1px] border-solid border-[#BEBFC2]"></div>
                            <div className="w-[80px] h-[88px] flex flex-col justify-center text-[14px] leading-[16.41px] font-[Josefin Sans] text-[#15245E]">
                                $32.00
                            </div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <h1 className="font-[Josefin Sans] text-[20px] leading-[23.44px] text-[#1D3178] font-semibold left-1 mb-8">Quantity</h1>
                            <div>
                            </div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <h1 className="font-[Josefin Sans] text-[20px] leading-[23.44px] text-[#1D3178] font-semibold left-1 mb-8">Total</h1>
                            <div>
                            </div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <button></button>
                        <button></button>
                    </div>
                </div>
                <div className="flex flex-col gap-1">
                </div>
            </div>
        </>
    )
}