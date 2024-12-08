import lamb from "../../../public/lamb.png";
import sofa from "../../../public/sofa.png";
import Image from "next/image";
import Featured_Card from "../components/Featured_Card";
import kursi_1 from "../../../public/kursi_1.png";
import kursi_2 from "../../../public/kursi_2.png";
import kursi_3 from "../../../public/kursi_3.png";
import kursi_4 from "../../../public/kursi_4.png";
export default function MainHome(){
    return(
<main className="w-full">
    <div className="bg-[#F2F0FF] flex flex-wrap">
        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 2xl:w-1/4">
            <Image src={lamb} alt="lamb" />
        </div>
        <div className="flex flex-col justify-center w-full sm:w-1/2 md:w-1/2 lg:1/3 xl:w-1/3 2xl:w-1/3">
            <div className="h-[300px]">
                <p className="text-[#FB2E86] font-[Lato] font-bold text-[16px] leading-7 pb-3">Best Furniture For Your Castle....</p>
                <h1 className="font-[Josefin Sans] text-[53px] font-bold leading-[81.98px] sm:tracking-[0.5%] md:tracking-[1.0%] lg:tracking-[1.5%] xl:tracking-[1.5%] 2xl:tracking-[1.5%] pb-3">New Furniture Collection Trends in 2020</h1>
                <p className="font-[Lato] font-bold text-[16px] leading-7 text-[#8A8FB9] pb-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
                <button type="button" className="bg-[#FB2E86] text-white font-[Josefin Sans] rounded-sm h-[50px] w-[163px]">Show Now</button>
            </div>
        </div>
        <div className="w-full hidden md:w-1/3 lg:flex xl:flex 2xl:flex flex-col justify-center">
            <Image src={sofa} alt="sofa" />
        </div>
    </div>

    <div className="bg-[#F2F0FF] flex justify-center h-20">
        <div className="w-[66px]">
            <ul className="flex gap-3">
                <li className="w-[10px] h-[9.89px] rotate-45 bg-[#FB2E86]"></li>
                <li className="w-[10px] h-[9.89px] rotate-45 border-[1px] border-[#FB2E86]"></li>
                <li className="w-[10px] h-[9.89px] rotate-45 border-[1px] border-[#FB2E86]"></li>
            </ul>
        </div>
    </div>

    <div className="flex justify-center mt-32">
        <h1 className="font-[Josefin Sans] text-[42px] leading-[50px] font-bold text-[#1A0B5B]">Featured Products</h1>
    </div>

    <div className="flex justify-center my-12">
        <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-5">
            <Featured_Card image={kursi_1} title="Cantilever chair" code="Y523201" price={42.00} />
            <Featured_Card image={kursi_2} title="Cantilever chair" code="Y523201" price={42.00} />
            <Featured_Card image={kursi_3} title="Cantilever chair" code="Y523201" price={42.00} />
            <Featured_Card image={kursi_4} title="Cantilever chair" code="Y523201" price={42.00} />
        </div>
    </div>

    <div className="flex justify-center my-14">
        <ul className="flex gap-3">
        <li className="w-6 h-1 rounded-[10px] bg-[#FB2E86]"></li>
        <li className="w-4 h-1 rounded-[10px] bg-[#FEBAD7]"></li>
        <li className="w-4 h-1 rounded-[10px] bg-[#FEBAD7]"></li>
        <li className="w-4 h-1 rounded-[10px] bg-[#FEBAD7]"></li>
        </ul>
    </div>

    <div className="flex justify-center mt-32">
        <h1 className="font-[Josefin Sans] text-[42px] leading-[50px] font-bold text-[#1A0B5B]">Latest Products</h1>
    </div>
    <div className="flex justify-center my-5">
        <ul className="flex gap-[58px]">
            <li className="text-[#FB2E86] border-b-2 border-[#FB2E86] font-[Lato] font-normal text-[18px] leading-[21.6px]">New Arrival</li>
            <li className="text-[#151875] font-[Lato] font-normal text-[18px] leading-[21.6px]">Best Seller</li>
            <li className="text-[#151875] font-[Lato] font-normal text-[18px] leading-[21.6px]">Featured</li>
            <li className="text-[#151875] font-[Lato] font-normal text-[18px] leading-[21.6px]">Special Offer</li>
        </ul>
    </div>
</main>

    )
}