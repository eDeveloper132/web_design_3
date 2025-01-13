import Link from "next/link"
import Image from "next/image"
import sponsor from "../../../public/sponsor.png"
export default function Login_Main() {
    return (
        <>
                    <div className="h-[286px] bg-[#F6F5FF] flex flex-col justify-center">
                <div className="flex xs250:w-screen xs250:justify-center sm:w-screen sm:justify-center md:w-screen md:justify-center lg:w-5/12 lg:justify-end xl:w-5/12 xl:justify-end 2xl:w-5/12 2xl:justify-end">
                    <div className="flex flex-col">
                        <p className="font-[Josefin Sans] text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] leading-[30px] sm:leading-[34px] md:leading-[38px] lg:leading-[42.19px] text-[#101750] font-bold">
                            My Account
                        </p>
                        <div className="flex">
                            <p className="text-[12px] sm:text-[14px] md:text-[16px] leading-[16px] sm:leading-[18px] md:leading-[19.2px]">
                                Home.Pages.
                            </p>
                            <p className="text-[#FB2E86] font-[Lato] font-semibold text-[14px] sm:text-[16px] leading-[18px] sm:leading-[19.2px] my-auto">
                                My Account
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-screen bg-white">
    <div className="flex justify-center py-16 md:py-20">
        <div className="w-full max-w-[545px] h-auto md:h-[475px] border-[1px] border-[#F8F8FB] shadow-sm shadow-[#C2C5E1] flex justify-center py-2 px-4 sm:px-6">
            <div className="flex flex-col justify-center w-full">
                <div className="w-full max-w-[433px] h-auto md:h-[374px] flex flex-col gap-6 md:gap-10 mx-auto">
                    <span className="flex flex-col gap-2">
                        <span className="flex justify-center">
                            <p className="font-[Josefin Sans] text-2xl md:text-[32px] leading-[30px] md:leading-[37.5px] font-semibold text-black">
                                Login
                            </p>
                        </span>
                        <span className="flex justify-center">
                            <p className="font-[Lato] font-normal text-sm md:text-[17px] leading-[18px] md:leading-[20.4px] text-[#9096B2] text-center">
                                Please login using account detail below.
                            </p>
                        </span>
                    </span>
                    
                    <span className="flex flex-col gap-4">
                        <input 
                            type="text"
                            placeholder="Email Address" 
                            className="h-12 md:h-[52px] border-[1px] border-[#C2C5E1] text-sm md:text-[16px] text-[#9096B2] px-4 rounded"
                        />
                        <input 
                            type="password"
                            placeholder="Password" 
                            className="h-12 md:h-[52px] border-[1px] border-[#C2C5E1] text-sm md:text-[16px] text-[#9096B2] px-4 rounded"
                        />
                        <p className="text-sm md:text-[17px] leading-5 md:leading-[20.4px] text-[#9096B2] font-normal">
                            Forgot your password?
                        </p>
                        <button 
                            type="button" 
                            className="h-12 md:h-[47px] rounded bg-[#FB2E86] text-white font-[Josefin Sans] text-sm md:text-[16px]"
                        >
                            <Link href={'/'}>Sign In</Link>
                        </button>
                    </span>

                    <span className="flex justify-center">
                        <p className="text-sm md:text-[17px] leading-5 md:leading-[20.4px] font-normal text-[#9096B2] text-center">
                            Don’t have an Account? <span className="text-[#FB2E86]">Create account</span>
                        </p>
                    </span>
                </div>
            </div>
        </div>
    </div>
</div>

            <div className="flex justify-center mt-20">
                <Image 
                    src={sponsor} 
                    width={1000} 
                    height={100} 
                    alt="sponsor" 
                    className="max-w-full h-auto" 
                    style={{ objectFit: 'contain' }}
                />
            </div>
        </>
    )
}