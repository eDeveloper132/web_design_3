import Image from "next/image"
import blog_web_1 from "../../../public/blog_web_1.jpeg"
import pen_nib from "../../../public/pen_nib.png";
import calendar_iop from "../../../public/calendar_iop.png";
export default function Blog_Main() {
    return (
        <>
            <div className="h-[286px] bg-[#F6F5FF] flex flex-col justify-center">
                <div className="flex xs250:w-screen xs250:justify-center sm:w-screen sm:justify-center md:w-screen md:justify-center lg:w-5/12 lg:justify-end xl:w-5/12 xl:justify-end 2xl:w-5/12 2xl:justify-end">
                    <div className="flex flex-col">
                        <p className="font-[Josefin Sans] text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] leading-[30px] sm:leading-[34px] md:leading-[38px] lg:leading-[42.19px] text-[#101750] font-bold">
                            Blog Page
                        </p>
                        <div className="flex">
                            <p className="text-[12px] sm:text-[14px] md:text-[16px] leading-[16px] sm:leading-[18px] md:leading-[19.2px]">
                                Home.Pages.
                            </p>
                            <p className="text-[#FB2E86] font-[Lato] font-semibold text-[14px] sm:text-[16px] leading-[18px] sm:leading-[19.2px] my-auto">
                                Blog Page
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-screen bg-white">
                <div className="flex justify-center gap-6 my-40">
                    <div className="flex flex-col gap-6">
                        <div className="w-[870px] h-[630px] flex flex-col gap-4">
                                <Image src={blog_web_1} width={870} alt="image" className="h-[453px] rounded-md"></Image>
                                <div className="w-[360px] h-6 flex gap-4">
                                    <span className="flex gap-2">
                                        <span className="flex flex-col justify-center">
                                            <Image src={pen_nib} alt="image" width={12} className="h-[12px]" style={{filter: "invert(28%) sepia(91%) saturate(5487%) hue-rotate(322deg) brightness(94%) contrast(104%)"}}></Image>
                                        </span>
                                        <span className="w-[160px] rounded-sm bg-[#FFE7F9]"></span>
                                    </span>
                                    <span className="flex gap-2">
                                    <span className="flex flex-col justify-center">
                                        <Image src={calendar_iop} alt="image" width={12} className="h-[12]" style={{filter: "invert(76%) sepia(67%) saturate(732%) hue-rotate(1deg) brightness(101%) contrast(98%)"}}></Image>
                                    </span>
                                        <span className="w-[160px] rounded-sm bg-[#FFECE2]"></span>
                                    </span>
                                </div>
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
        </>
    )
}